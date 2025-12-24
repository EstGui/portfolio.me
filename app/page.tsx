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
  const [user, ] = useState("estgui");
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
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 py-16 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-start gap-6 px-16 sm:items-start dark:bg-black">
        <About username={user} />
        <NavBar tab={tab} setTab={setTab} />
        <ContentContainer username={user} tabName={tab}>
          {tab === "about" && <AboutContent />}
          {tab === "resume" && <ResumeContent />}
          {tab === "projects" && <ProjectsContent username={user} />}
          {tab === "contact" && <ContactContent />}
        </ContentContainer>
        <button className="fixed right-10 bottom-8 hidden min-h-14 min-w-14 rounded-4xl bg-blue-400 hover:cursor-pointer">
          Oi
        </button>
      </main>
    </div>
  );
}
