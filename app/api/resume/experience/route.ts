import { NextResponse } from "next/server";

import { TimelineItem } from "@/app/types/TimelineItem";

export async function GET() {
  const experience_arr: TimelineItem[] = [
    {
      id: 1,
      title: "The Catalyst Group",
      jobTitle: "Client Accounting Intern",
      startDate: "08/2025",
      endDate: "Present",
      description:
      "Documented internal workflows, supported system integrations and data exchange, and developed solutions to automate operational processes.",
    },
    {
      id: 2,
      title: "Giesecke+Devrient",
      jobTitle: "Software Development Intern",
      startDate: "02/2024",
      endDate: "07/2025",
      description:
        "Worked on software development, maintenance, and testing using C#, Python, and Java, with a focus on process automation, efficiency improvements, technical documentation, code reviews, and researching solutions to support project evolution.",
    },
  ];

  return NextResponse.json(experience_arr);
}
