import { NextResponse } from "next/server";
import { OpenAI } from "openai";
import { QUESTION_PROMPT } from "@/services/Constants";

export async function POST(req) {
  try {
    const { jobPosition, jobDescription, duration, type } = await req.json();

    const FINAL_PROMPT = QUESTION_PROMPT
      .replaceAll("{{jobTitle}}", jobPosition)
      .replaceAll("{{jobDescription}}", jobDescription)
      .replaceAll("{{duration}}", duration)
      .replaceAll("{{type}}", type);

    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "google/gemma-4-26b-a4b-it:free",
      messages: [
        {
          role: "user",
          content: FINAL_PROMPT,
        },
      ],
    });

    console.log(completion.choices[0].message);

    return NextResponse.json(completion.choices[0].message);

  } catch (e) {
    console.error(e);

    return NextResponse.json(
      { error: e.message },
      { status: 500 }
    );
  }
}