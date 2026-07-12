import { BriefcaseBusinessIcon, Calendar, Code2Icon, Files, LayoutDashboard, Settings2, User2Icon, WalletCards,Speech,PuzzleIcon } from "lucide-react";

export const SideBarOptions=[
    {
        name:"Dashboard",
        icon:LayoutDashboard ,
        path:"/dashboard"
    },
    {
        name:"Scheduled Interviews",
        icon:Calendar,
        path:"/scheduled-interviews"
    },
    {
        name:"All Interviews",
        icon:Files,
        path:"/all-interviews"
    },
    {
        name:"Billing",
        icon:WalletCards,
        path:"/billing"
    },
    {
        name:"Settings",
        icon:Settings2,
        path:"/settings"
    }
]

export const InterviewType=[
    {
        title:'Technical',
        icon:Code2Icon
    },
    {
        title:'Behavioral',
        icon:User2Icon
    },
    {
        title:'Experience',
        icon:BriefcaseBusinessIcon
    },
    {
        title:'Coding',
        icon:PuzzleIcon
    },
    {
        title:'Leadership',
        icon:Speech
    },
]

export const QUESTION_PROMPT = `
You are an expert technical interviewer.

Based on the following information, generate a structured and professional interview questionnaire.

Job Title: {{jobTitle}}
Job Description: {{jobDescription}}
Interview Duration: {{duration}} minutes
Interview Types: {{type}}

Instructions:
1. Analyze the job description to identify the key responsibilities, required technical skills, soft skills, and expected experience.
2. Generate interview questions based on the selected interview types.
3. Adjust the number and difficulty of questions according to the interview duration.
4. Ensure the questions are realistic and suitable for a real-world {{jobTitle}} interview.
5. Include only the interview types selected in {{type}}.
6. Return the response in valid JSON format only. Do not include any explanation or markdown.

Expected JSON Format:

{
  "interviewQuestions": [
    {
      "question": "Explain the difference between REST and GraphQL.",
      "type": "Technical"
    },
    {
      "question": "Describe a challenging situation you faced in a team and how you handled it.",
      "type": "Behavioral"
    }
  ]
}

Allowed question types:
- Technical
- Behavioral
- Experience
- Problem Solving
- Leadership

The goal is to create a structured, relevant, and time-optimized interview plan for the {{jobTitle}} role.
`;