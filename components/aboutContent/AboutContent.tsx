export default function AboutContent() {
  return (
    <>
      <section className="mb-5 flex flex-col gap-4">
        <p className="text-justify indent-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          eligendi rerum nihil laboriosam dignissimos vitae temporibus ex unde,
          doloremque mollitia ipsum nobis similique amet pariatur, nam
          accusamus, optio laborum iusto!
        </p>

        <p className="text-justify indent-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          laudantium quod repellat. Inventore enim facilis ut nisi tempora
          doloremque ipsum! Sapiente quo autem odit earum ducimus alias quaerat
          expedita libero. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Laborum iste obcaecati tempora eius iure excepturi magni
          assumenda nostrum hic voluptate, quae blanditiis nihil ipsum autem
          veritatis ut, nisi architecto distinctio.
        </p>
      </section>

      <section>
        <div className="mb-4">
          <h3>O Que Faço?</h3>
        </div>

        <div className="flex justify-between gap-6">
          <div className="h-80 w-full rounded-md border border-transparent bg-[#333] shadow-xl transition hover:border-[#7297E9]"></div>
          <div className="h-80 w-full rounded-md border border-transparent bg-[#333] shadow-xl transition hover:border-[#7297E9]"></div>
          <div className="h-80 w-full rounded-md border border-transparent bg-[#333] shadow-xl transition hover:border-[#7297E9]"></div>
          <div className="h-80 w-full rounded-md border border-transparent bg-[#333] shadow-xl transition hover:border-[#7297E9]"></div>
        </div>
      </section>
    </>
  );
}
