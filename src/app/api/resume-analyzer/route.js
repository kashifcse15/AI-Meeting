import {currentUser} from "@clerk/nextjs";
import {createClient} from "@supabase/supabase-js";
import { CohereClientV2 } from "cohere-ai";
import PDFParser from "pdf2json";

const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);
const cohere = new CohereClientV2({
    token: process.env.COHERE_API_KEY,
});

export async function POST(request) {
    try {
                const clerkUser = await currentUser();

        if (!clerkUser) {
            return Response.json(
                {
                    success: false,
                    error: "Unauthorized.",
                },
                { status: 401 }
            );
        }

        const email =
            clerkUser.emailAddresses?.[0]?.emailAddress;

        if (!email) {
            return Response.json(
                {
                    success: false,
                    error: "User email not found.",
                },
                { status: 400 }
            );
        }

                const { data: dbUser, error: userError } =
            await supabaseAdmin
                .from("Users")
                .select("id, credits")
                .eq("email", email)
                .single();

        if (userError || !dbUser) {
            console.error("Supabase User Error:", userError);

            return Response.json(
                {
                    success: false,
                    error: "User account not found.",
                },
                { status: 404 }
            );
        }

                const ATS_COST = 2;

        if (dbUser.credits < ATS_COST) {
            return Response.json(
                {
                    success: false,
                    error: "You need at least 2 credits to analyze a resume.",
                },
                { status: 402 }
            );
        }


        const formData = await request.formData();

        const resume = formData.get("resume");
        const jobDescription = formData.get("jobDescription");

        if (!resume || !jobDescription) {
            return Response.json(
                {
                    success: false,
                    error: "Resume and job description are required.",
                },
                { status: 400 }
            );
        }

        // Convert uploaded PDF to Buffer
        const buffer = Buffer.from(
            await resume.arrayBuffer()
        );

        // Parse PDF and extract text
        const parser = new PDFParser();

        const resumeText = await new Promise((resolve, reject) => {
            parser.on("pdfParser_dataError", (error) => {
                reject(error.parserError);
            });

            parser.on("pdfParser_dataReady", (pdfData) => {
                const text = pdfData.Pages
                    .map((page) =>
                        page.Texts
                            .map((textItem) =>
                                textItem.R
                                    .map((r) => r.T)
                                    .join("")
                            )
                            .join(" ")
                    )
                    .join("\n");

                resolve(text);
            });

            parser.parseBuffer(buffer);
        });

        const analysisResponse = await cohere.chat({
    model: "command-a-plus-05-2026",

    messages: [
        {
            role: "user",
            content: `
Generate a JSON object that analyzes this resume against the job description.

RESUME:
${resumeText}

JOB DESCRIPTION:
${jobDescription}

You are an ATS resume evaluator and recruiter.

Analyze ONLY the information explicitly present in the resume and compare it against the job description.

Do not invent experience, skills, qualifications, achievements, projects, or technologies.

IMPORTANT RULES:

1. STRENGTHS
Identify the strongest parts of the resume that match the job description.

Return AT LEAST 1 strength whenever the resume contains any relevant skills, projects, experience, education, or achievements.

Prioritize specific strengths rather than generic statements.

2. WEAKNESSES
Identify actual weaknesses or gaps in the resume for this specific job.

Return AT LEAST 1 weakness whenever there is something that could reasonably be improved or is weaker compared with the job requirements.

Do not invent weaknesses.

3. MISSING KEYWORDS
Compare the important technical skills, tools, technologies, concepts, qualifications, and role-specific terms in the job description against the resume.

Return AT LEAST 1 relevant missing keyword whenever the job description contains important terms that are not explicitly present in the resume.

Only include genuinely relevant missing keywords.

Do NOT consider a keyword present just because it is related to another skill.

Examples:
- Manual testing does NOT mean Jest.
- React does NOT mean Next.js.
- AWS does NOT automatically mean Docker.
- JavaScript does NOT automatically mean Node.js.
- REST APIs do NOT automatically mean GraphQL.

4. REJECTION RISKS
Identify realistic reasons why this resume could be rejected for THIS PARTICULAR job.

Return at least 1 risk when a meaningful mismatch exists.

5. SUGGESTIONS
Provide specific and actionable recommendations based on the weaknesses, missing keywords, and job requirements.

Return at least 1 useful suggestion whenever there is something that could be improved.

6. HONESTY
Do not create problems just to fill an array.

If there is genuinely nothing missing or nothing to improve, an array may be empty.

However, when there are clear differences between the resume and job description, report them.

7. KEYWORD MATCHING
A keyword is considered PRESENT only if the resume explicitly contains that skill, technology, tool, concept, or equivalent clearly stated experience.

Do not infer skills that are not explicitly demonstrated.

8. EXPERIENCE
Do not penalize students simply because they lack years of professional experience.

Relevant internships, projects, academic work, and demonstrated technical experience should be considered.

9. SCORING
Return scores from 0 to 100.

formatting:
ATS readability, structure, headings, consistency, and parsing friendliness.

keywordMatch:
How well the resume's existing skills and terminology match the job description.

grammar:
Grammar, spelling, clarity, and professional writing.

jobRelevance:
How closely the candidate's existing experience, projects, and skills align with the role.

experience:
Quality and relevance of demonstrated experience.

skills:
Technical skills relevant to the job description.

overallScore:
Overall ATS suitability for this specific job description.

grade:
Use a letter grade from A+ to F based on the overallScore.

Return the following JSON fields:

{
    "overallScore": number,
    "grade": "string",
    "summary": "string",
    "formatting": number,
    "keywordMatch": number,
    "grammar": number,
    "jobRelevance": number,
    "experience": number,
    "skills": number,
    "strengths": ["string"],
    "weaknesses": ["string"],
    "rejectionRisks": ["string"],
    "missingKeywords": ["string"],
    "suggestions": ["string"]
}

The response MUST be a valid JSON object.

Do not return markdown.
Do not return explanations outside the JSON.
`,
        },
    ],

    responseFormat: {
        type: "json_object",
    },
});

        const analysisText =
            analysisResponse.message.content
                .filter((item) => item.type === "text")
                .map((item) => item.text)
                .join("");
        if (!analysisText) {
            throw new Error("Cohere returned an empty analysis.");
        }

        const analysis = JSON.parse(analysisText);
                const { error: creditError } =
            await supabaseAdmin
                .from("Users")
                .update({
                    credits: dbUser.credits - ATS_COST,
                })
                .eq("id", dbUser.id);

        if (creditError) {
            console.error(
                "Credit deduction error:",
                creditError
            );

            return Response.json(
                {
                    success: false,
                    error: "Analysis completed, but credits could not be deducted.",
                },
                { status: 500 }
            );
        }

        return Response.json({
            success: true,
            analysis,
        });

    } catch (error) {
        console.error("Resume Analyzer Error:", error);

        return Response.json(
            {
                success: false,
                error:
                    error.message ||
                    "Failed to analyze resume.",
            },
            { status: 500 }
        );
    }
}