export default function ProjectCard({
  repoName,
  repoLink,
  repoTopics,
}: {
  repoName: string;
  repoLink: string;
  repoTopics: string[];
}) {
  return (
    <a
      href={repoLink}
      target="_blank"
      className="border-border lg:hover:border-highlight/0 relative aspect-video overflow-hidden rounded-lg border bg-[#202020] transition duration-300 lg:hover:scale-100 ease lg:hover:opacity-85 lg:hover:shadow-lg lg:hover:shadow-black/25"
    >
      <div className="bg-background absolute bottom-0 flex w-full flex-col gap-1 p-5">
        <h3>{repoName}</h3>
        <span className="text-xs font-extralight capitalize text-muted lg:font-light">
          {repoTopics
            .map((topic) => (topic.length <= 3 ? topic.toUpperCase() : topic))
            .join(" • ")}
        </span>
      </div>
    </a>
  );
}
