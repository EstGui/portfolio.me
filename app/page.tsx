"use client";

import { useEffect, useState } from "react";

import About from "@/components/about/about";
import AboutContent from "@/components/aboutContent/AboutContent";
import ContactContent from "@/components/contactContent/ContactContent";
import ContentContainer from "@/components/contentContainer/ContentContainer";
import NavBar from "@/components/navBar/NavBar";
import ProjectsContent from "@/components/projectsContent/ProjectsContent";
import ResumeContent from "@/components/resumeContent/ResumeContent";

export default function Home() {
  const [user] = useState("estgui");
  const [tab, setTab] = useState("about");

  useEffect(() => {
    const savedTab = localStorage.getItem("selectedTab");
    if (savedTab) {
      setTab(savedTab);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedTab", tab);
  }, [tab]);

  return (
    <div className="bg-bg-main flex items-center justify-center p-4">
      <main className="flex w-full flex-col items-center justify-start gap-4">
        <About username={user} />
        <NavBar tab={tab} setTab={setTab} />
        <ContentContainer username={user} tabName={tab}>
          {tab === "about" && <AboutContent />}
          {tab === "resume" && <ResumeContent />}
          {tab === "projects" && <ProjectsContent username={user} />}
          {tab === "contact" && <ContactContent />}
        </ContentContainer>
      </main>
    </div>
  );
}
