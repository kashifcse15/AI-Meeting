import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.ATS_RESUME_ANALYZER_API_KEY,
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

        // Convert uploaded resume into a Blob
        const resumeBlob = new Blob(
            [await resume.arrayBuffer()],
            {
                type: resume.type,
            }
        );

        // Upload resume to Gemini Files API
        const uploadedFile = await ai.files.upload({
            file: resumeBlob,
            config: {
                mimeType: resume.type,
                displayName: resume.name,
            },
        });

        console.log("Uploaded file:", uploadedFile.name);
        console.log("File URI:", uploadedFile.uri);

        // Send resume + job description to Gemini
        const response = await ai.models.generateContent({
            model: "gemini-3.7-flash",

            contents: [
                {
                    fileData: {
                        fileUri: uploadedFile.uri,
                        mimeType: uploadedFile.mimeType,
                    },
                },
                {
                    text: `
You are an expert resume reviewer.

Analyze the uploaded resume against the following job description.

JOB DESCRIPTION:
${jobDescription}

Give me:

1. A short summary of the candidate.
2. The candidate's strongest skills.
3. The biggest strengths of the resume.
4. The biggest weaknesses.
5. How relevant the resume is to this job.
6. Important missing skills or keywords.
7. General suggestions for improvement.

Keep the response concise and useful.
                    `,
                },
            ],
        });

        console.log("Gemini response:");
        console.log(response.text);

        return Response.json({
            success: true,
            analysis: response.text,
        });

    } catch (error) {
        console.error("Gemini ATS Error:", error);

        return Response.json(
            {
                success: false,
                error: "Failed to analyze resume.",
                details: error.message,
            },
            { status: 500 }
        );
    }
}