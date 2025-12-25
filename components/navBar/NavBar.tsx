"use client";

interface NavTabsProps {
  tab: string;
  setTab: (value: string) => void;
}

export default function Navbar({ tab, setTab }: NavTabsProps) {
  const tabs = ["about", "resume", "projects", "skills", "contact"];
  return (
    <div className="fixed bottom-0 inset-x-0 h-40 bg-linear-to-t from-[#00000099] to-transparent z-1">
      <div className="bg-secondary fixed right-4 bottom-4 left-4 flex justify-evenly rounded-md border border-[#646464] py-3.5 z-1">
        {tabs.map((t) => {
          return (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`cursor-pointer font-normal transition ${tab === t ? "text-[#7297E9]" : "hover:text-[#7297E9]"}`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
