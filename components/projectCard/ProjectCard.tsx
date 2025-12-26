export default function ProjectCard({
  repoName,
  repoLink,
}: {
  repoName: string;
  repoLink: string;
}) {
  return (
    <a
      href={repoLink}
      target="_blank"
      className="bg-[#222] relative min-h-46 overflow-hidden rounded-lg border border-border transition hover:scale-101 hover:border-highlight hover:opacity-70 hover:shadow-lg hover:shadow-black"
    >
      <div className="absolute bottom-0 w-full bg-[#000000AA] px-5 py-5">
        <h3>{repoName}</h3>
      </div>
    </a>
  );
}
