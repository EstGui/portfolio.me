"use client";

import Link from "next/link";

export default function Navbar({ activeTab }: { activeTab: string }) {
  const tabs = ["about", "resume", "projects", "skills", "contact"];
  return (
    <div className="fixed inset-x-0 bottom-0 z-10 h-28 bg-linear-to-t from-black/80 to-transparent lg:static lg:h-auto">
      <div className="bg-surface border-border fixed inset-x-4 bottom-4 z-10 flex min-h-14 justify-evenly rounded-lg border sm:inset-x-6 lg:static lg:min-h-16">
        {tabs.map((t) => {
          const isActive = activeTab === t;

          return (
            <div key={t} className="group relative overflow-hidden">
              <Link
                key={t}
                href={`?tab=${t}`}
                className={`flex h-full cursor-pointer items-center px-1 transition-colors duration-500 ${isActive ? "text-highlight" : ""}`}
              >
                {t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()}
              </Link>
              <div
                className={`bg-highlight absolute bottom-0 left-0 h-2 w-full rounded-t-md transition-transform duration-300 ease-out ${
                  isActive
                    ? "translate-y-1 lg:group-hover:translate-y-0.5"
                    : "translate-y-2 lg:group-hover:translate-y-1.5"
                } `}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
