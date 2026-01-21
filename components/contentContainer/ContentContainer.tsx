import { Suspense } from "react";

import AboutContent from "@/components/aboutContent/AboutContent";
import ContactContent from "@/components/contactContent/ContactContent";
import ProjectsContentServer from "@/components/projectsContent/ProjectsContentServer";
import ResumeContent from "@/components/resumeContent/ResumeContent";
import SkillsContent from "@/components/skillsContent/SkillsContent";

import ProjectsSkeleton from "../projectsContent/ProjectsSkeleton";

export default function ContentContainer({ activeTab }: { activeTab: string }) {
  return (
    <div className="bg-surface border-border mb-17 flex w-full flex-col overflow-hidden rounded-lg border p-6 lg:col-2 lg:row-2 lg:m-0 lg:h-full lg:px-12 lg:py-10">
      <h2 className="relative mb-10 inline-block text-2xl font-bold capitalize after:absolute after:-bottom-3 after:left-0 after:h-1.5 after:w-14 after:rounded-sm after:bg-[linear-gradient(155deg,#7297E9,#2563EB)] after:content-['']">
        {activeTab}
      </h2>
      <section className="flex h-full flex-col gap-7">
        {activeTab === "about" && <AboutContent />}
        {activeTab === "resume" && <ResumeContent />}
        {activeTab === "projects" && (
          <Suspense fallback={<ProjectsSkeleton />}>
            <ProjectsContentServer />
          </Suspense>
        )}
        {activeTab == "skills" && <SkillsContent />}
        {activeTab === "contact" && <ContactContent />}
      </section>
    </div>
  );
}
