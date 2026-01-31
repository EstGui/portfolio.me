type ProjectCardProps = {
  repoName: string;
  repoLink: string;
  repoTopics: string[];
  repoImage: string;
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
      className="group border-border ease relative aspect-video overflow-hidden rounded-lg border bg-[#202020] transition duration-300 lg:hover:shadow-lg lg:hover:shadow-black/25 bg-cover bg-center"
      style={{
        backgroundImage: `url(https://raw.githubusercontent.com/estgui/${repoName}/main/preview.png)`,
      }}
    >
      <div className="absolute inset-0 bg-black/30 lg:group-hover:opacity-65 transition duration-300" />
      <div className="bg-background/95 absolute bottom-0 flex w-full flex-col gap-1 p-5">
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
