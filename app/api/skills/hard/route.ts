import { NextResponse } from "next/server";

export async function GET() {
    const hard_skills_arr: string[] = [
    "JavaScript",
    "Rest API",
    "Python",
    "React.js",
    "C#",
    "Java",
    "Next.js",
    "SQL",
    "TypeScript",
    "Node.js"
  ];

  return NextResponse.json(hard_skills_arr);
}
