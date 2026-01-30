type SkillTagProps = { text: string };

export default function SkillTag({ text }: SkillTagProps) {
  return (
    <>
      <div className="border-border text-muted cursor-default rounded-lg border bg-[#202020] px-4 py-2 shadow-md transition duration-300 lg:hover:opacity-85 lg:hover:shadow-lg">
        {text}
      </div>
    </>
  );
}
