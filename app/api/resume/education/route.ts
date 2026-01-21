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
      title: "Java Developer Program",
      institution: "Digital Innovation One",
      startDate: "09/2022",
      endDate: "12/2022",
      description:
        "Java programming with a focus on object-oriented principles, collections, exception handling, streams, testing, best practices, and backend application development.",
    },
    {
      id: 3,
      title: "Android Developer Program",
      institution: "Digital Innovation One",
      startDate: "01/2023",
      endDate: "05/2023",
      description:
        "Android application development using Kotlin, MVVM architecture, REST API consumption, data persistence, and mobile UI best practices.",
    },
    {
      id: 4,
      title: "JavaScript Developer Program",
      institution: "Digital Innovation One",
      startDate: "06/2023",
      endDate: "11/2023",
      description:
        "Modern JavaScript (ES6+), core language concepts, DOM manipulation, asynchronous programming, API consumption, and frontend development best practices.",
    },
    {
      id: 5,
      title: "Node.js Fundamentals Program",
      institution: "Digital Innovation One",
      startDate: "06/2023",
      endDate: "11/2023",
      description:
        "Backend development with Node.js, REST API creation, Express, authentication, data validation, database integration, and architectural concepts.",
    },
  ];

  return NextResponse.json(cursos_arr);
}
