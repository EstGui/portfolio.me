"use client";

type Props = {
  username: string;
  tabName: string;
  children: React.ReactNode;
};

export default function ContentContainer({ tabName, children }: Props) {
  return (
    <div className="bg-secondary flex w-full flex-col rounded-xl border border-[#646464] px-6 py-9 mb-17">
      <h3 className="relative mb-10 inline-block text-2xl font-bold capitalize after:absolute after:-bottom-3 after:left-0 after:h-1.5 after:w-14 after:rounded-sm after:bg-[linear-gradient(155deg,#7297E9,#2563EB)] after:content-['']">
        {tabName}
      </h3>
      {children}
    </div>
  );
}
