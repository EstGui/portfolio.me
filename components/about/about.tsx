"use client";

import { Cake, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import DownloadCVButton from "../button/DownloadCVButton";
import { OctocatIcon } from "../icons/GitHubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import ProfileInfoItem from "../profileInfoItem/ProfileInfoItem";

interface GithubUserResponse {
  name: string;
  avatar_url: string;
  bio: string;
}

const personalInfo = [
  {
    title: "Email",
    text: "contact@esteves.com",
    link: "mailto:guilherme.o.esteves@gmail.com",
    icon: Mail,
  },
  {
    title: "Birth",
    text: "March 08, 2004",
    icon: Cake,
  },
  {
    title: "Location",
    text: "Itapecerica da Serra, SP",
    icon: MapPin,
  },
  {
    title: "Phone",
    text: "+55 (11) 94204-5202",
    link: "tel:+5511942045202",
    icon: Phone,
  },
];

const socialLinks = [
  {
    title: "LinkedIn",
    text: "/in/guiest/",
    link: "https://www.linkedin.com/in/guiest/",
    icon: LinkedinIcon,
  },
  {
    title: "GitHub",
    text: "/EstGui",
    link: "https://github.com/EstGui",
    icon: OctocatIcon,
  },
];

export default function About() {
  const [user, setUser] = useState<GithubUserResponse | null>(null);

  useEffect(() => {
    fetch("/api/github/profile", { next: { revalidate: 300 } })
      .then((res) => res.ok && res.json())
      .then(setUser)
      .catch(() => null);
  }, []);

  return (
    <div className="bg-surface border-border flex w-full overflow-hidden rounded-lg border lg:sticky lg:top-6 lg:row-span-2 lg:h-fit lg:min-w-[300] lg:flex-col lg:gap-5.5 lg:p-8 lg:pt-4.5">
      <div className="border-r-border relative border-r lg:border-r-0">
        <Image
          src={user?.avatar_url ?? "/images/default-avatar.svg"}
          alt={"profile photo"}
          draggable={false}
          priority
          width={200}
          height={200}
          className="mx-auto object-cover lg:rounded-full"
        />
      </div>

      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="font-primary text-foreground text-xl font-medium lg:text-xl lg:font-semibold">
          {user?.name || "Username"}
        </h1>
        <p className="text-muted text-sm">{user?.bio || "Description"}</p>
      </div>

      <hr className="text-border" />

      <ul className="text-muted hidden flex-col items-start gap-4 lg:flex">
        {personalInfo.map((item) => (
          <li key={item.title}>
            <ProfileInfoItem {...item} external={false} />
          </li>
        ))}
      </ul>

      <hr className="text-border" />

      <ul className="text-muted hidden flex-col items-start gap-4 lg:flex">
        {socialLinks.map((item) => (
          <li key={item.title}>
            <ProfileInfoItem {...item} />
          </li>
        ))}
      </ul>

      <hr className="text-border" />

      <div className="hidden lg:block">
        <DownloadCVButton />
      </div>
    </div>
  );
}
