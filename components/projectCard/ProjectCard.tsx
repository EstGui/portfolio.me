type ProjectCardProps = {
  repoName: string;
  repoLink: string;
  repoTopics: string[];
};

export default function ProjectCard({
  repoName,
  repoLink,
  repoTopics,
}: ProjectCardProps) {
  return (
    <a
      href={repoLink}
      target="_blank"
      className="border-border lg:hover:border-highlight/0 ease relative aspect-video overflow-hidden rounded-lg border bg-[#202020] transition duration-300 lg:hover:scale-100 lg:hover:opacity-85 lg:hover:shadow-lg lg:hover:shadow-black/25"
    >
      <div className="bg-background absolute bottom-0 flex w-full flex-col gap-1 p-5">
        <h3>{repoName}</h3>
        <span className="text-muted text-xs font-extralight capitalize lg:font-light">
          {repoTopics
            .map((topic) => (topic.length <= 3 ? topic.toUpperCase() : topic))
            .join(" • ")}
        </span>
      </div>
    </a>
  );
}
