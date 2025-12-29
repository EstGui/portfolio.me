"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ProjectsContent() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const toastId = toast.loading("Sending...");

    try {
      const res = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname,
            email,
            message,
          }),
        }
      );

      if (!res.ok) throw new Error();

      toast.success("Success", { id: toastId });

      setFullname("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      toast.error("Failed", { id: toastId });
    }
  }

  return (
    <>
      <section className="border-border mb-9 overflow-hidden rounded-lg border">
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
        <h3 className="mb-4 text-lg font-semibold capitalize">send message</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 grid grid-cols-1 gap-6">
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Full name"
              required
              className="focus:border-highlight rounded-lg border border-[#484848] px-5 py-3 transition outline-none focus:invalid:border-red-700"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="focus:border-highlight rounded-lg border border-[#484848] px-5 py-3 transition outline-none focus:invalid:border-red-700"
            />
          </div>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            required
            className="focus:border-highlight mb-6 min-h-36 w-full resize-y overflow-hidden rounded-lg border border-[#484848] px-5 py-3 transition outline-none focus:invalid:border-red-700"
          ></textarea>

          <button
            type="submit"
            className="border-highlight/50 hover:border-highlight/90 flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg border bg-black/20 px-5 py-3 shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out active:scale-98"
          >
            <Send size={18} color="#7297E9" className="z-1" />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </>
  );
}
