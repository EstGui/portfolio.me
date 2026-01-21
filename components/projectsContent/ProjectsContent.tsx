"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { GithubRepository } from "@/app/types/GithubRepository";

import ProjectCard from "../projectCard/ProjectCard";


interface Props {
  repositories: GithubRepository[];
}

export default function ProjectsContent({ repositories }: Props) {
  const [open, setOpen] = useState(false);
  const [filterValue, setFilterValue] = useState("All");

  const project_classes_arr = [
    "All",
    "Front-End",
    "Back-End",
    "API",
    "Automation",
    "Algorithm",
    "Artificial-Intelligence",
    "Mobile",
  ];

  return (
    <>
      <div className="relative inline-block">
        <button
          onClick={() => setOpen(!open)}
          className="text-muted border-border flex w-full cursor-pointer justify-between rounded-lg border bg-[#202020] px-4 py-2 transition lg:hover:opacity-85"
        >
          <div>{filterValue}</div>
          <div>
            <ChevronDown
              className={`${open ? "rotate-180" : ""} transition duration-300`}
            />
          </div>
        </button>

        {open && (
          <div
            className={`border-border absolute right-0 left-0 z-10 mt-2 h-50 overflow-auto rounded-lg border shadow-lg transition-all duration-150 ease-out ${open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-95"}`}
          >
            <ul className="bg-[#202020] py-2">
              {project_classes_arr.map((filterItem) => (
                <li
                  key={filterItem}
                  className="lg:hover:bg-surface text-muted cursor-pointer rounded px-4 py-2"
                  onClick={() => {
                    setFilterValue(filterItem);
                    setOpen(!open);
                  }}
                >
                  {filterItem}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
        {repositories
          ?.filter(
            (repo) =>
              repo.owner?.login.toLowerCase() === "estgui" &&
              (repo.topics.includes(filterValue.toLowerCase()) ||
                filterValue === "All")
          )
          .map((repo) => (
            <ProjectCard
              key={repo.id}
              repoName={repo.name}
              repoLink={repo.homepage || repo.html_url}
              repoTopics={repo.topics}
            />
          ))}
      </div>
    </>
  );
}
