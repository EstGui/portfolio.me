import { Code,GraduationCap } from "lucide-react";

import Timeline from "../timeline/Timeline";

export default function ResumeContent() {
  const cursosarr = [
    {
      id: 1,
      title: "Desenvolvimento Web Moderno",
      start: "02/2022",
      end: "07/2022",
      description:
        "HTML, CSS, JavaScript, Git e fundamentos essenciais de desenvolvimento web.",
    },
    {
      id: 2,
      title: "React Avançado",
      start: "09/2022",
      end: "12/2022",
      description:
        "React Hooks, Context API, otimização, roteamento e integração com APIs reais.",
    },
    {
      id: 3,
      title: "UI/UX Design",
      start: "01/2023",
      end: "05/2023",
      description:
        "Princípios de design, heurísticas, prototipação, wireframes e testes de usabilidade.",
    },
    {
      id: 4,
      title: "Node.js e APIs REST",
      start: "06/2023",
      end: "11/2023",
      description:
        "Criação de APIs escaláveis com Express, autenticação, validação e integração com banco de dados.",
    },
  ];

  return (
    <>
      <Timeline timelineItems={cursosarr} icon={GraduationCap} />
      <Timeline timelineItems={cursosarr} icon={Code} />
    </>
  );
}
