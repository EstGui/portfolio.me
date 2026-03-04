import { FaAws, FaDocker, FaJava } from "react-icons/fa";
import {
  SiDotnet,
  SiFlutter,
  SiGit,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";

export default function ServicesCarousel() {
  const techIcons = [
    { icon: SiPython, name: "Python" },
    { icon: FaJava, name: "Java" },
    { icon: TbBrandCSharp, name: "C#" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },

    // Backend & runtime
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiDotnet, name: ".NET" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: FaDocker, name: "Docker" },

    // Cloud
    { icon: VscAzure, name: "Azure" },
    { icon: FaAws, name: "AWS" },

    // Frontend
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },

    // Mobile
    { icon: SiFlutter, name: "Flutter" },

    // Versionamento / colaboração
    { icon: SiGit, name: "Git" },
    { icon: SiGithub, name: "GitHub" },
  ];

  return (
    <div className="relative overflow-hidden mask-[linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-[marquee_45s_linear_infinite] gap-5 py-10">
        {[...techIcons, ...techIcons].map(({ icon: Icon, name }, index) => (
          <div key={index} className="group relative w-fit shrink-0">
            <div className="border-border flex h-22 w-30 items-center justify-center rounded-lg border bg-[#202020] shadow-xl shadow-black/10 transition-shadow duration-400">
              <Icon className="text-6xl text-[#101010]" />
            </div>
            <span className="bg-background text-muted pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded-lg px-3 py-1 text-sm font-extralight whitespace-nowrap opacity-0 transition duration-300 group-hover:opacity-100 lg:delay-500">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
