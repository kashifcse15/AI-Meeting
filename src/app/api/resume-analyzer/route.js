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

        console.log("Resume:", resume.name);
        console.log("Resume type:", resume.type);

        // PDF → Buffer
        const buffer = Buffer.from(
            await resume.arrayBuffer()
        );

        // Create PDF parser
        const parser = new PDFParser();

        // Parse PDF
        const resumeText = await new Promise((resolve, reject) => {

    parser.on("pdfParser_dataError", (error) => {
        reject(error.parserError);
    });

    parser.on("pdfParser_dataReady", (pdfData) => {

        console.log("PDF DATA READY");

        const text = pdfData.Pages
            .map(page =>
                page.Texts
                    .map(textItem =>
                        textItem.R
                            .map(r => r.T)
                            .join("")
                    )
                    .join(" ")
            )
            .join("\n");

        console.log("RAW TEXT:");
        console.log(text);

        resolve(text);
    });

    parser.parseBuffer(buffer);
});

        console.log("Resume text extracted!");
        console.log(resumeText);

        return Response.json({
            success: true,
            resumeText,
        });

    } catch (error) {
        console.error("PDF ERROR:", error);

        return Response.json(
            {
                success: false,
                error: error.message,
            },
            { status: 500 }
        );
    }
}