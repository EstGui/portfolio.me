export default function ProjectCard({ repoName, repoLink }: { repoName: string; repoLink: string }) {
    return (
        <a 
            href={repoLink} 
            target="_blank" 
            className="min-h-56 bg-secondary rounded-md overflow-hidden border border-[#646464] relative 
            hover:border-[#7297E9] hover:opacity-70 hover:scale-101 hover:shadow-lg hover:shadow-black transition"
        >
            <div className="bg-[#000000AA] w-full absolute bottom-0 py-6 px-5">
                <h3>{repoName}</h3>
            </div>
        </a>
    )
}