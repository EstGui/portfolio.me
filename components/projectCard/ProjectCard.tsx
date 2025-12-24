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
      className="bg-secondary relative min-h-56 overflow-hidden rounded-md border border-[#646464] transition hover:scale-101 hover:border-[#7297E9] hover:opacity-70 hover:shadow-lg hover:shadow-black"
    >
      <div className="absolute bottom-0 w-full bg-[#000000AA] px-5 py-6">
        <h3>{repoName}</h3>
      </div>
    </a>
  );
}
