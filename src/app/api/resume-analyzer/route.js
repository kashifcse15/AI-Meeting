import { CohereClientV2 } from "cohere-ai";
import PDFParser from "pdf2json";

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

Evaluate the resume honestly. Only use information present in the resume.

Return scores from 0 to 100.

The JSON must contain:

- overallScore
- grade
- summary
Score each category from 0 to 100:

formatting:
ATS readability, structure, headings, consistency, and parsing friendliness.

keywordMatch:
How well the resume's existing skills and terminology match the job description.

grammar:
Grammar, spelling, clarity, and professional writing.

jobRelevance:
How closely the candidate's existing experience/projects/skills align with the role.

experience:
Quality and relevance of demonstrated experience. Do not penalize a student simply for lacking professional experience if the resume contains relevant projects.

skills:
Technical skills relevant to the job description.
- strengths: array of strings
- weaknesses: array of strings
- rejectionRisks: array of strings
- missingKeywords: array of strings
- suggestions: array of strings

Do not invent experience, skills, qualifications, or achievements.
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