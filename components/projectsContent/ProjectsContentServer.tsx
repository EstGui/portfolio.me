import { GithubRepository } from "@/app/types/GithubRepository";

import ProjectsContent from "./ProjectsContent";

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function ProjectsContentServer() {
  // await delay(3000);
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

  return <ProjectsContent repositories={data} />;
}
