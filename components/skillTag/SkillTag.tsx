export default function SkillTag({ text }: { text: string }) {
  return (
    <>
      <div className="border-border text-muted cursor-default rounded-lg border bg-[#202020] px-4 py-2 transition duration-300 lg:hover:opacity-85">
        {text}
      </div>
    </>
  );
}
