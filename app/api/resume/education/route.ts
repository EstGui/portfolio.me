import { NextResponse } from "next/server";

import { TimelineItem } from "@/app/types/TimelineItem";

export async function GET() {
  const cursos_arr: TimelineItem[] = [
    {
      id: 1,
      title: "Bachelor's degree in Computer Science",
      institution: "UNASP",
      startDate: "07/2022",
      endDate: "06/2026",
      description:
      "Fundamentals of computer science, including algorithms, data structures, software engineering, databases, operating systems, and web development.",
    },
    {
      id: 2,
      title: "Node.js Fundamentals Program",
      institution: "Digital Innovation One",
      endDate: "11/2024",
      description:
      "Backend development with Node.js, REST API creation, Express, authentication, data validation, database integration, and architectural concepts.",
    },
    {
      id: 3,
      title: "JavaScript Developer Program",
      institution: "Digital Innovation One",
      endDate: "09/2023",
      description:
        "Modern JavaScript (ES6+), core language concepts, DOM manipulation, asynchronous programming, API consumption, and frontend development best practices.",
    },
    {
      id: 4,
      title: "Android Developer Program",
      institution: "Digital Innovation One",
      endDate: "08/2023",
      description:
        "Android application development using Kotlin, MVVM architecture, REST API consumption, data persistence, and mobile UI best practices.",
    },
    {
      id: 5,
      title: "Java Developer Program",
      institution: "Digital Innovation One",
      endDate: "07/2023",
      description:
        "Java programming with a focus on object-oriented principles, collections, exception handling, streams, testing, best practices, and backend application development.",
    },
    {
      id: 6,
      title: "Advanced Low to Advanced Mid Level English",
      institution: "iW - English School",
      endDate: "01/2019",
      description:
        "Advanced English studies focused on communication, grammar, and comprehension.",
    },
  ];

  return NextResponse.json(cursos_arr);
}
