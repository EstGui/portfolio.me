export default function AboutContent() {
  return (
    <>
      <section className="mb-6 flex flex-col gap-4">
        <p className="text-justify indent-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          eligendi rerum nihil laboriosam dignissimos vitae temporibus ex unde,
          doloremque mollitia ipsum nobis similique amet pariatur, nam
          accusamus, optio laborum iusto!
        </p>
      </section>

      <section>
        <div className="mb-4 text-lg font-semibold">
          <h3>What I Do</h3>
        </div>

        <div className="flex justify-between gap-5 overflow-x-auto">
          <div className="h-80 w-56 shrink-0 rounded-lg border border-border bg-[#222] shadow-xl transition hover:border-highlight"></div>
          <div className="h-80 w-56 shrink-0 rounded-lg border border-border bg-[#222] shadow-xl transition hover:border-highlight"></div>
          <div className="h-80 w-56 shrink-0 rounded-lg border border-border bg-[#222] shadow-xl transition hover:border-highlight"></div>
          <div className="h-80 w-56 shrink-0 rounded-lg border border-border bg-[#222] shadow-xl transition hover:border-highlight"></div>
        </div>
      </section>
    </>
  );
}
