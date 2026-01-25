import { NextResponse } from "next/server";

interface HardSkills {
  backend: string[];
  frontend: string[];
  frameworks: string[];
  databases: string[];
  tools: string[];
  automation: string[];
}

interface Skills {
  hardSkills: HardSkills;
  softSkills: string[];
  languages: string[];
}

export async function GET() {
  const skills: Skills = {
    hardSkills: {
      backend: ["C#", ".NET", "Java", "Node.js", "TypeScript", "Python", "SQL"],

      frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js"],

      frameworks: [
        "ASP.NET Core",
        "Entity Framework Core",
        "WPF",
        "Express.js",
        "FastAPI",
        "NUnit",
        "JUnit",
      ],

      databases: ["PostgreSQL", "SQL Server", "MySQL"],

      automation: ["Power Automate", "Power Apps", "Selenium"],

      tools: ["Git", "GitHub", "AWS", "Postman", "Vite", "Figma"],
    },

    softSkills: [
      "Problem Solving",
      "Critical Thinking",
      "Teamwork",
      "Communication",
      "Adaptability",
      "Time Management",
      "Prioritization",
      "Accountability",
    ],

    languages: ["Portuguese — Native", "English — Advanced"],
  };

  return NextResponse.json(skills);
}
