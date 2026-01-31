import { GithubRepository } from "@/app/types/GithubRepository";

import ProjectsContent from "./ProjectsContent";
import ProjectsSkeleton from "./ProjectsSkeleton";

export default async function ProjectsContentServer() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/github/starred`,
      {
        // next: { revalidate: 300 },
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
