"use client";

import { Cake, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { OctocatIcon } from "../icons/GitHubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import ProfileInfoItem from "../profileInfoItem/ProfileInfoItem";

interface GithubUserResponse {
  login: string;
  name: string;
  avatar_url: string;
  followers: number;
  bio: string;
}

export default function About() {
  const [userData, setUserData] = useState<GithubUserResponse | null>(null);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/github/profile");

        if (!res.ok) throw new Error("User not found");

        const data = await res.json();
        setUserData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  return (
    <div className="lg:sticky lg:top-6 bg-surface border-border flex w-full overflow-hidden rounded-lg border lg:row-span-2 lg:h-fit lg:min-w-[300] lg:flex-col lg:gap-5.5 lg:p-8 lg:pt-4.5">
      <div className="border-r-border relative border-r lg:border-r-0">
        <Image
          src={userData?.avatar_url ?? "/images/default-avatar.svg"}
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
          {userData?.name || "Username"}
        </h1>
        <p className="text-muted text-sm font-normal">
          {userData?.bio || "Description"}
        </p>
      </div>

      <hr className="text-border" />

      <div className="text-muted hidden flex-col justify-evenly gap-4 lg:flex">
        <ul className="text-muted hidden items-start justify-around lg:flex lg:flex-col lg:gap-4">
          <li>
            <ProfileInfoItem
              title="Email"
              text="contact@esteves.com"
              link="mailto:guilherme.o.esteves@gmail.com"
              icon={Mail}
              external={false}
            />
          </li>
          <li>
            <ProfileInfoItem
              title="Birth"
              text="March 08, 2004"
              icon={Cake}
              external={false}
            />
          </li>
          <li>
            <ProfileInfoItem
              title="Location"
              text="Itapecerica da Serra, SP"
              icon={MapPin}
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

      <hr className="text-border" />

      <div>
        <ul className="text-muted hidden items-start justify-around lg:flex lg:flex-col lg:gap-4">
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
        </ul>
      </div>
    </div>
  );
}
