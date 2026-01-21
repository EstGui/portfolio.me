import { Code, GraduationCap } from "lucide-react";

import { TimelineItem } from "@/app/types/TimelineItem";

import Timeline from "../timeline/Timeline";

export default async function ResumeContent() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [education, experience] = await Promise.all([
    fetchSkills(`${baseUrl}/api/resume/education`),
    fetchSkills(`${baseUrl}/api/resume/experience`),
  ])

  return (
    <>
      <Timeline title="Experience" timelineItems={experience} icon={Code} />
      <Timeline
        title="Education"
        timelineItems={education}
        icon={GraduationCap}
      />
    </>
  );
}

async function fetchSkills(url: string): Promise<TimelineItem[]> {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch skills");
  return res.json();
}
