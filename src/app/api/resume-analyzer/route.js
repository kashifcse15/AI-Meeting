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
You are an expert ATS resume analyzer.

Analyze the resume against the provided job description.

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

Evaluate the following:

- Overall resume quality
- ATS compatibility
- Job relevance
- Keyword matching
- Formatting
- Grammar and writing quality
- Technical skills
- Experience and projects
- Strengths
- Weaknesses
- Missing keywords
- Actionable improvement suggestions

Important instructions:

- Compare the resume specifically against the provided job description.
- Only use information actually present in the resume.
- Do not invent skills, experience, achievements, or qualifications.
- Identify important skills and keywords from the job description that are missing from the resume.
- Give practical and actionable suggestions.
- Be objective and honest about weaknesses.
- Do not give generic advice when a specific improvement can be identified.

Return a clear and well-organized analysis.
                    `,
                },
            ],
        });

        const analysis = analysisResponse.message.content
            .filter((item) => item.type === "text")
            .map((item) => item.text)
            .join("\n");

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