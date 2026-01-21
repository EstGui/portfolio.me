import { NextResponse } from "next/server";

export async function GET() {
    const soft_skills_arr: string[] = [
      "Teamwork",
      "Problem-Solving",
      "Time Management",
      "Empathy",
      "Adaptability",
      "Critical",
      "Priorization",
      "Accountability",
      "Clarity",
    ];

  return NextResponse.json(soft_skills_arr);
}
