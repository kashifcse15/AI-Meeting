export async function POST(request) {
    try {
        const formData = await request.formData();

        const resume = formData.get("resume");
        const jobDescription = formData.get("jobDescription");

        console.log("Resume:", resume);
        console.log("Job Description:", jobDescription);

        if (!resume || !jobDescription) {
            return Response.json(
                {
                    success: false,
                    error: "Resume and job description are required.",
                },
                { status: 400 }
            );
        }

        return Response.json({
            success: true,
            message: "Resume and job description received successfully!",
            fileName: resume.name,
            fileType: resume.type,
            fileSize: resume.size,
            jobDescription: jobDescription,
        });

    } catch (error) {
        console.error("API Error:", error);

        return Response.json(
            {
                success: false,
                error: "Something went wrong.",
            },
            { status: 500 }
        );
    }
}