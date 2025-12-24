"use client";

interface NavTabsProps {
  tab: string;
  setTab: (value: string) => void;
}

export default function Navbar({ tab, setTab }: NavTabsProps) {
  const tabs = ["about", "resume", "projects", "skills", "contact"];
  return (
    <div className="bg-secondary flex h-15 min-w-full items-center justify-evenly rounded-2xl border border-[#646464] px-5">
      {tabs.map((t) => {
        return (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`h-fit cursor-pointer font-medium transition ${tab === t ? "text-[#7297E9]" : "hover:text-[#7297E9]"}`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()}
          </button>
        );
      })}
    </div>
  );
}
