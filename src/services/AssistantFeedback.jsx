const createAssistantFeedback = () => {
  return `
{{conversation}}

You are an expert Senior Technical Interview Evaluator.

Analyze the complete interview conversation above between the AI interviewer and the candidate.

Evaluate the candidate objectively based only on the conversation.

Assess the following areas:

• Technical Knowledge
• Problem Solving
• Communication Skills
• Confidence
• Experience & Practical Understanding
• Overall Performance

Instructions:

- Score each category from 1 to 10.
- Be fair and unbiased.
- Do not assume knowledge that wasn't demonstrated.
- Keep all feedback concise and professional.
- Provide strengths and improvement points.
- Write a short interview summary (maximum 3 lines).
- Decide whether the candidate is recommended for hiring.
- If not recommended, explain why.
- Return ONLY valid JSON.
- Do not include markdown or explanations.

Expected JSON:

{
  "feedback": {
    "ratings": {
      "technicalSkills": 8,
      "problemSolving": 7,
      "communication": 9,
      "confidence": 8,
      "experience": 7,
      "overall": 8
    },
    "strengths": [
      "Strong understanding of React fundamentals.",
      "Communicated ideas clearly.",
      "Answered most technical questions confidently."
    ],
    "improvements": [
      "Improve knowledge of system design.",
      "Provide more real-world examples.",
      "Explain time complexity more clearly."
    ],
    "summary": "...",
    "recommendation": true,
    "recommendationMessage": "..."
  }
}
`;
};

export default createAssistantFeedback;