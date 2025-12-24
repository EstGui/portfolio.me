"use client";

type Props = {
  username: string;
  tabName: string;
  children: React.ReactNode;
};

export default function ContentContainer({ tabName, children }: Props) {
  return (
    <div className="bg-secondary flex min-w-full flex-col overflow-hidden rounded-2xl border border-[#646464] px-12 py-9">
      <h3 className="relative mb-14 inline-block text-2xl font-bold capitalize after:absolute after:-bottom-3 after:left-0 after:h-1.5 after:w-14 after:rounded-sm after:bg-[linear-gradient(155deg,#7297E9,#2563EB)] after:content-['']">
        {tabName}
      </h3>
      {children}
    </div>
  );
}
