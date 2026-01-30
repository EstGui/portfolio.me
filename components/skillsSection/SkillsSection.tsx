import { ReactNode } from "react";

type SkillsSectionProps = {
  title: string;
  children: ReactNode;
};

export default function SkillsSection({ title, children }: SkillsSectionProps) {
  return (
    <section className="lg:max-w-11/12">
      <h3 className="mb-4 text-lg font-semibold capitalize">{title}</h3>

      <div className="flex flex-wrap justify-start gap-2">{children}</div>
    </section>
  );
}
