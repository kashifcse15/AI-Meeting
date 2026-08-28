import { CohereClientV2 } from "cohere-ai";

const cohere = new CohereClientV2({
    token: process.env.COHERE_API_KEY,
});

export async function POST(request) {
    try {
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

        console.log("Resume:", resume.name);
        console.log("Resume type:", resume.type);

        // --------------------------------
        // STEP 1: Convert resume to Buffer
        // --------------------------------

        const buffer = Buffer.from(
            await resume.arrayBuffer()
        );

        // --------------------------------
        // STEP 2: Send PDF to Cohere Parse
        // --------------------------------

        const parseForm = new FormData();

        const pdfBlob = new Blob(
            [buffer],
            {
                type: resume.type,
            }
        );

        parseForm.append(
            "file",
            pdfBlob,
            resume.name
        );

        console.log("Sending resume to Cohere Parse...");

        const parseResponse = await fetch(
            "https://api.cohere.com/v2/parse",
            {
                method: "POST",

                headers: {
                    Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
                },

                body: parseForm,
            }
        );

        if (!parseResponse.ok) {
            const errorText = await parseResponse.text();

            console.error(
                "Cohere Parse Error:",
                errorText
            );

            throw new Error(
                `Cohere Parse failed: ${errorText}`
            );
        }

        const parsedData = await parseResponse.json();

        console.log("Resume parsed successfully!");

        // --------------------------------
        // STEP 3: Extract text
        // --------------------------------

        const resumeText = parsedData.pages
            ?.map((page) => page.markdown || "")
            .join("\n\n");

        if (!resumeText) {
            throw new Error(
                "Could not extract text from resume."
            );
        }

        console.log(
            "Extracted resume text length:",
            resumeText.length
        );

        // --------------------------------
        // STEP 4: Analyze with Cohere
        // --------------------------------

        const analysisResponse = await cohere.chat({
            model: "command-a-plus-05-2026",

            messages: [
                {
                    role: "user",

                    content: `
You are an expert ATS resume analyzer.

Analyze the following resume against the provided job description.

====================
RESUME
====================

${resumeText}

====================
JOB DESCRIPTION
====================

${jobDescription}

====================
ANALYSIS REQUIRED
====================

Evaluate:

1. Overall resume quality
2. ATS compatibility
3. Job relevance
4. Keyword matching
5. Formatting
6. Grammar and writing quality
7. Skills
8. Experience
9. Strengths
10. Weaknesses
11. Missing keywords
12. Suggestions for improvement

Important rules:

- Only use information actually present in the resume.
- Do not invent skills, experience, education, or achievements.
- Compare the resume specifically against the job description.
- Give practical and actionable suggestions.
- Be honest about weaknesses.

For now, return the analysis as normal text.
                    `,
                },
            ],
        });

        const analysis = analysisResponse.message.content
            .filter((item) => item.type === "text")
            .map((item) => item.text)
            .join("\n");

        console.log("Cohere analysis completed!");

        // --------------------------------
        // STEP 5: Return result
        // --------------------------------

        return Response.json({
            success: true,
            analysis,
        });

    } catch (error) {

        console.error(
            "COHERE ATS ERROR:",
            error
        );

        return Response.json(
            {
                success: false,
                error:
                    error.message ||
                    "Failed to analyze resume.",
            },
            {
                status: 500,
            }
        );
    }
}