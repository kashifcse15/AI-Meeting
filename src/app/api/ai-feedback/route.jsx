import { NextResponse } from "next/server";
import Groq from "groq-sdk";
import createAssistantFeedback from "@/services/AssistantFeedback";

const groq = new Groq({
  apiKey: process.env.FEEDBACK_API_KEY,
});

export async function POST(req) {
  try {
    const { conversation } = await req.json();

    console.log("Received Conversation:");
    console.log(conversation);

    const FEEDBACK_PROMPT = createAssistantFeedback().replace(
      "{{conversation}}",
      JSON.stringify(conversation)
    );

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: FEEDBACK_PROMPT,
        },
      ],
      temperature: 0.3,
    });

    let content = completion.choices[0].message.content;

    console.log("Raw AI Response:");
    console.log(content);

    // Remove markdown if returned
    content = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    console.log("Cleaned JSON:");
    console.log(content);

    return NextResponse.json({
      success: true,
      content,
    });

  } catch (e) {
    console.error("AI Feedback Error:");
    console.error(e);

    return NextResponse.json(
      {
        success: false,
        error: e.message,
      },
      {
        status: 500,
      }
    );
  }
}