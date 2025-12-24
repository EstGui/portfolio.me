"use client";

export default function ProjectsContent() {
  return (
    <>
      <section className="mb-8 overflow-hidden rounded-md border border-[#484848]">
        <figure>
          <iframe
            className="w-full grayscale invert filter"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJxT6qvGOtz5QRJ_0Q_TO_XMs&key=AIzaSyBna1mA_6Z_8QolA3Ww_6ZQawoXHesulbg"
            height="300"
            loading="lazy"
          ></iframe>
        </figure>
      </section>

      <section className="mb-2.5">
        <h3 className="mb-5 text-xl font-semibold capitalize">
          Formulário de Contato
        </h3>
        <form action="#" method="post">
          <div className="mb-6 grid grid-cols-1 gap-6">
            <input
              type="text"
              name="fullname"
              placeholder="Full name"
              required
              className="rounded-md border border-[#484848] px-5 py-3 transition outline-none focus:border-[#7297E9] focus:invalid:border-red-700"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="rounded-md border border-[#484848] px-5 py-3 transition outline-none focus:border-[#7297E9] focus:invalid:border-red-700"
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            required
            className="mb-6 min-h-36 w-full resize-y overflow-hidden rounded-md border border-[#484848] px-5 py-3 transition outline-none focus:border-[#7297E9] focus:invalid:border-red-700"
          ></textarea>

          <button
            type="submit"
            className="relative flex w-full items-center justify-center gap-2.5 rounded-md border border-[#484848] px-5 py-3 text-[#7297E9] capitalize transition"
          >
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </>
  );
}
