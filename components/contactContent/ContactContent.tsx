"use client";

import { MailOpen, Phone, Send } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

import { OctocatIcon } from "../icons/GitHubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import ProfileInfoItem from "../profileInfoItem/ProfileInfoItem";

export default function ProjectsContent() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const toastId = toast.loading("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          message,
        }),
      });

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
      <div className="flex h-full flex-col justify-between gap-4 lg:flex-row lg:gap-10">
        <section className="flex h-full w-full flex-col">
          <h3 className="mb-4 text-lg font-semibold capitalize">
            send message
          </h3>
          <form
            onSubmit={handleSubmit}
            className="grid h-full grid-rows-[auto_auto_1fr_auto] gap-4"
          >
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
              className="focus:border-highlight row-2 rounded-lg border border-[#484848] px-5 py-3 transition outline-none focus:invalid:border-red-700"
            />

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              required
              className="focus:border-highlight row-3 min-h-36 resize-y overflow-hidden rounded-lg border border-[#484848] px-5 py-3 transition outline-none focus:invalid:border-red-700"
            ></textarea>

            <button
              type="submit"
              className="border-highlight/50 lg:hover:border-highlight/90 row-4 flex cursor-pointer items-center justify-center gap-1.5 rounded-lg border bg-black/20 px-5 py-3 shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out active:scale-98"
            >
              <Send size={18} color="#7297E9" className="z-1" />
              <span>Send Message</span>
            </button>
          </form>
        </section>

        <div
          className="flex w-full items-center justify-center gap-3 px-8 py-2 lg:w-fit lg:flex-col lg:px-0 lg:py-10"
          role="separator"
          aria-label="or"
        >
          <div className="border-border flex-1 border-b lg:h-full lg:flex-wrap lg:border-b-0 lg:border-l"></div>
          <span className="text-muted font-extralight">or</span>
          <div className="border-border flex-1 border-b lg:h-full lg:flex-wrap lg:border-b-0 lg:border-l"></div>
        </div>

        <section className="lg:mr-4">
          <h3 className="mb-4 text-lg font-semibold capitalize">
            other channels
          </h3>
          <div>
            <ul className="text-muted flex items-start justify-around lg:flex-col lg:gap-4">
              <li>
                <ProfileInfoItem
                  title="Linkedin"
                  text="/in/guiest/"
                  link="https://www.linkedin.com/in/guiest/"
                  icon={LinkedinIcon}
                />
              </li>
              <li>
                <ProfileInfoItem
                  title="Github"
                  text="/EstGui"
                  link="https://github.com/EstGui"
                  icon={OctocatIcon}
                />
              </li>
              <li>
                <ProfileInfoItem
                  title="Email"
                  text="contact@esteves.com"
                  link="mailto:guilherme.o.esteves@gmail.com"
                  icon={MailOpen}
                  external={false}
                />
              </li>
              <li>
                <ProfileInfoItem
                  title="Phone"
                  text="+55 (11) 94204-5202"
                  link="tel:+5511942045202"
                  icon={Phone}
                  external={false}
                />
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
