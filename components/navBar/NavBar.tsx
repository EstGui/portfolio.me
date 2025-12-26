"use client";

interface NavTabsProps {
  tab: string;
  setTab: (value: string) => void;
}

export default function Navbar({ tab, setTab }: NavTabsProps) {
  const tabs = ["about", "resume", "projects", "skills", "contact"];
  return (
    <div className="fixed bottom-0 inset-x-0 h-28 bg-linear-to-t from-[#000000CC] to-transparent z-1">
      <div className="bg-surface fixed right-4 bottom-4 left-4 flex justify-evenly rounded-lg border border-border py-3.5 z-1">
        {tabs.map((t) => {
          return (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`cursor-pointer font-normal text-normal transition ${tab === t ? "text-highlight" : "hover:text-highlight"}`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
