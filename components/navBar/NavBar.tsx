"use client";

interface NavTabsProps {
  tab: string;
  setTab: (value: string) => void;
}

export default function Navbar({ tab, setTab }: NavTabsProps) {
    const tabs = [ "about", "resume", "projects", "skills", "contact"]
    return (
        <div 
            className="flex bg-secondary min-w-full rounded-2xl border border-[#646464] h-15 px-5 items-center justify-evenly">
            
            {tabs.map((t) => {
                return (
                    <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`font-medium transition cursor-pointer h-fit ${tab === t ? "text-[#7297E9]" : "hover:text-[#7297E9]"}`}
                    >
                        {t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()}
                    </button>
                )
            })}
        </div>
    )
}
