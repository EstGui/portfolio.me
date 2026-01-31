import { GithubRepository } from "@/app/types/GithubRepository";

import ProjectsContent from "./ProjectsContent";
import ProjectsSkeleton from "./ProjectsSkeleton";

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function ProjectsContentServer() {
  // await delay(3000);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/github/starred`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      throw new Error("Erro ao buscar projetos");
    }

    const data: GithubRepository[] = await res.json();

    if (!Array.isArray(data)) {
      throw new Error("Erro");
    }

    return <ProjectsContent repositories={data} />;
  } catch {
    return <ProjectsSkeleton />;
  }
}
