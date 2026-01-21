import SkillsSection from "../skillsSection/SkillsSection";
import SkillTag from "../skillTag/SkillTag";

export default async function SkillsContent() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [hardSkills, softSkills] = await Promise.all([
    fetchSkills(`${baseUrl}/api/skills/hard`),
    fetchSkills(`${baseUrl}/api/skills/soft`),
  ]);

  return (
    <>
      {[
        { title: "Hard Skills", data: hardSkills },
        { title: "Soft Skills", data: softSkills },
      ].map((section) => (
        <SkillsSection key={section.title} title={section.title}>
          {section.data.map((skill) => (
            <SkillTag key={skill} text={skill} />
          ))}
        </SkillsSection>
      ))}
    </>
  );
}

async function fetchSkills(url: string): Promise<string[]> {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch skills");
  return res.json();
}
