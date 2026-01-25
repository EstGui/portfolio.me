import SkillsSection from "../skillsSection/SkillsSection";
import SkillTag from "../skillTag/SkillTag";

interface HardSkills {
  backend: string[];
  frontend: string[];
  frameworks: string[];
  databases: string[];
  tools: string[];
  automation: string[];
}

interface Skills {
  hardSkills: HardSkills;
  softSkills: string[];
  languages: string[];
}

export default async function SkillsContent() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const skills: Skills = await fetchSkills(`${baseUrl}/api/skills`);

  return (
    <>
      <SkillsSection title="Hard Skills">
        {Object.entries(skills.hardSkills).map(([category, items]) => (
          <div key={category} className="mb-4 w-full">
            <h4 className="mb-2 text-sm font-medium capitalize">{category}</h4>

            <div className="flex flex-wrap gap-2">
              {items.map((skill: string) => (
                <SkillTag key={skill} text={skill} />
              ))}
            </div>
          </div>
        ))}
      </SkillsSection>

      <SkillsSection title="Soft Skills">
        <div className="flex flex-wrap gap-2">
          {skills.softSkills.map((skill) => (
            <SkillTag key={skill} text={skill} />
          ))}
        </div>
      </SkillsSection>

      <SkillsSection title="Languages">
        {skills.languages.map((language) => (
          <SkillTag key={language} text={language} />
        ))}
      </SkillsSection>
    </>
  );
}

async function fetchSkills(url: string): Promise<Skills> {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch skills");
  return res.json();
}
