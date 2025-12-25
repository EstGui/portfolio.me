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

        <div className="flex justify-between gap-6 overflow-x-scroll">
          <div className="h-80 w-56 shrink-0 rounded-md border border-[#656565] bg-[#333] shadow-xl transition hover:border-[#7297E9]"></div>
          <div className="h-80 w-56 shrink-0 rounded-md border border-[#656565] bg-[#333] shadow-xl transition hover:border-[#7297E9]"></div>
          <div className="h-80 w-56 shrink-0 rounded-md border border-[#656565] bg-[#333] shadow-xl transition hover:border-[#7297E9]"></div>
          <div className="h-80 w-56 shrink-0 rounded-md border border-[#656565] bg-[#333] shadow-xl transition hover:border-[#7297E9]"></div>
        </div>
      </section>
    </>
  );
}
