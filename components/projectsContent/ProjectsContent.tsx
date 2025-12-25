"use client";

import { useEffect, useState } from "react";

import { GithubRepository } from "@/app/types/GithubRepository";

import ProjectCard from "../projectCard/ProjectCard";

export default function ProjectsContent({ username }: { username: string }) {
  const [userData, setUserData] = useState<GithubRepository[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/starred`
        );
        if (!res.ok) throw new Error("Usuário não encontrado");

        const data: GithubRepository[] = await res.json();
        setUserData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [userData]);

  return (
    <div
      id="cardsContainer"
      className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
    >
      {userData
        ?.filter((repo) => repo.owner?.login.toLowerCase() === username)
        .map((repo) => (
          <ProjectCard
            key={repo.id}
            repoName={repo.name}
            repoLink={repo.homepage || repo.html_url}
          />
        ))}
    </div>
  );
}
