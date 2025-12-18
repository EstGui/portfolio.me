"use client";

import About from "@/components/about/about";
import ContentContainer from "@/components/contentContainer/ContentContainer";
import NavBar from "@/components/navBar/NavBar";
import ProjectsContent from "@/components/projectsContent/ProjectsContent";
import ContactContent from "@/components/contactContent/ContactContent";
import ResumeContent from "@/components/resumeContent/ResumeContent";
import AboutContent from "@/components/aboutContent/AboutContent";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState("estgui");
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
    <div className="py-16 flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-start px-16 gap-6 dark:bg-black sm:items-start">
        <About username={user}/>
        <NavBar tab={tab} setTab={setTab}/>
        <ContentContainer username={user} tabName={tab}>
          {tab === "about" && <AboutContent/>}
          {tab === "resume" && <ResumeContent/>}
          {tab === "projects" && <ProjectsContent username={user}/>}
          {tab === "contact" && <ContactContent username={user}/>}
        </ContentContainer>
        <button className="hover:cursor-pointer bg-blue-400 min-h-14 min-w-14 rounded-4xl fixed right-10 bottom-8 hidden">Oi</button>
      </main>
    </div>
  );
}
