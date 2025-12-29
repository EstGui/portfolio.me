import { Code, GraduationCap } from "lucide-react";

import { TimelineItem } from "@/app/types/TimelineItem";

import Timeline from "../timeline/Timeline";

export default function ResumeContent() {
  const cursos_arr: TimelineItem[] = [
    {
      id: 1,
      title: "Bachelor's degree in Computer Science",
      institution: "UNASP",
      startDate: "07/2022",
      endDate: "06/2026",
      description:
        "HTML, CSS, JavaScript, Git e fundamentos essenciais de desenvolvimento web.",
    },
    {
      id: 2,
      title: "Formação Java Developer",
      institution: "Digital Innovation One",
      startDate: "09/2022",
      endDate: "12/2022",
      description:
        "React Hooks, Context API, otimização, roteamento e integração com APIs reais.",
    },
    {
      id: 3,
      title: "Formação Android Developer",
      institution: "Digital Innovation One",
      startDate: "01/2023",
      endDate: "05/2023",
      description:
        "Princípios de design, heurísticas, prototipação, wireframes e testes de usabilidade.",
    },
    {
      id: 4,
      title: "Formação JavaScript Developer",
      institution: "Digital Innovation One",
      startDate: "06/2023",
      endDate: "11/2023",
      description:
        "Criação de APIs escaláveis com Express, autenticação, validação e integração com banco de dados.",
    },
    {
      id: 5,
      title: "Formação Node.JS Fundamentals",
      institution: "Digital Innovation One",
      startDate: "06/2023",
      endDate: "11/2023",
      description:
        "Criação de APIs escaláveis com Express, autenticação, validação e integração com banco de dados.",
    },
  ];

  const experience_arr: TimelineItem[] = [
    {
      id: 1,
      title: "Giesecke+Devrient",
      jobTitle: "Intern",
      startDate: "02/2024",
      endDate: "07/2025",
      description:
        "HTML, CSS, JavaScript, Git e fundamentos essenciais de desenvolvimento web.",
    },
    {
      id: 2,
      title: "The Catalyst Group",
      jobTitle: "Intern - Client Accounting",
      startDate: "08/2025",
      endDate: "Present",
      description:
        "HTML, CSS, JavaScript, Git e fundamentos essenciais de desenvolvimento web.",
    },
  ];

  return (
    <>
      <Timeline title="Experience" timelineItems={experience_arr} icon={Code} />
      <Timeline
        title="Education"
        timelineItems={cursos_arr}
        icon={GraduationCap}
      />
    </>
  );
}
