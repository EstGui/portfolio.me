"use client";

type Props = {
  username: string;
  tabName: string;
  children: React.ReactNode;
};


export default function ContentContainer({ tabName, children } : Props) {
    return (
        <div className="flex flex-col bg-secondary min-w-full rounded-2xl overflow-hidden border border-[#646464] px-12 py-9">
            <h3 
                className="
                    relative inline-block text-2xl font-bold mb-14 capitalize
                    after:content-[''] after:absolute after:left-0 after:w-14 after:h-1.5 after:bg-[linear-gradient(155deg,#7297E9,#2563EB)] after:-bottom-3 after:rounded-sm
                ">
                {tabName}
            </h3>
            {children}
        </div>
    )
}