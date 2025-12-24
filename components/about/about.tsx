"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface GithubUserProps {
  username: string;
}

interface GithubUserResponse {
  login: string;
  name: string;
  avatar_url: string;
  followers: number;
  bio: string;
}

export default function About({ username }: GithubUserProps) {
  const [userData, setUserData] = useState<GithubUserResponse | null>(null);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) throw new Error("Usuário não encontrado");

        const data = await res.json();
        setUserData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [username]);

  return (
    <div className="bg-secondary flex min-h-[280] min-w-full overflow-hidden rounded-2xl border border-[#646464]">
      <Image
        src={userData?.avatar_url ?? "/images/default-avatar.svg"}
        width={280}
        height={280}
        alt={`profile photo ${userData?.name}`}
        draggable="false"
        className="min-h-[280] min-w-[280] border-r border-r-[#646464]"
      />
      <div className="flex w-full flex-col items-center justify-center gap-1.5">
        <h1 className="font-primary text-5xl font-semibold">
          {userData?.name || "Username"}
        </h1>
        <p>{userData?.bio || "Description"}</p>
      </div>
    </div>
  );
}
