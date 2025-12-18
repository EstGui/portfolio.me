"use client";

export default function ProjectsContent({ username } : { username: string}) {
    return (
        <>
            <section className="mb-8 rounded-md overflow-hidden border border-[#484848]">
                <figure>
                    <iframe className="filter grayscale invert w-full"
                        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJxT6qvGOtz5QRJ_0Q_TO_XMs&key=AIzaSyBna1mA_6Z_8QolA3Ww_6ZQawoXHesulbg"
                        height="300" loading="lazy"></iframe>
                </figure>
            </section>


            <section className="mb-2.5">
                <h3 className="mb-5 font-semibold text-xl capitalize">Formulário de Contato</h3>
                <form action="#" method="post">
                    <div className="grid grid-cols-1 gap-6 mb-6">
                        <input 
                            type="text" name="fullname" placeholder="Full name" required
                            className="px-5 py-3 rounded-md border border-[#484848] outline-none
                            focus:border-[#7297E9] focus:invalid:border-red-700 transition"
                        />
                        <input 
                            type="email" name="email" placeholder="Email" required
                            className="px-5 py-3 rounded-md border border-[#484848] outline-none 
                            focus:border-[#7297E9] focus:invalid:border-red-700 transition"
                        />
                    </div>

                    <textarea 
                        name="message" placeholder="Message" required
                        className="px-5 py-3 rounded-md border border-[#484848] outline-none focus:border-[#7297E9] focus:invalid:border-red-700 transition
                        resize-y w-full mb-6 overflow-hidden"
                    >
                    </textarea>

                    <button type="submit" className="relative w-full flex justify-center items-center gap-2.5 px-5 py-3 rounded-md capitalize transition border border-[#484848] text-[#7297E9]">
                        <span>Send Message</span>
                    </button>
                </form>
            </section>
        </>
    )
}