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

        return Response.json({
            success: true,
            resumeText,
        });

    } catch (error) {
        console.error("Resume Analyzer Error:", error);

        return Response.json(
            {
                success: false,
                error: error.message || "Failed to analyze resume.",
            },
            { status: 500 }
        );
    }
}