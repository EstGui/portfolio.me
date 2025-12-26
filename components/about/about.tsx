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
    <div className="bg-surface flex w-full overflow-hidden rounded-xl border border-border">
    <Image
        src={userData?.avatar_url ?? "/images/default-avatar.svg"}
        width={135}
        height={135}
        alt={`profile photo ${userData?.name}`}
        draggable="false"
        className="h-[135] w-[135] border-r border-r-border"
      />
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="font-primary text-xl font-medium text-foreground">
          {userData?.name || "Username"}
        </h1>
        <p className="text-xs font-light">{userData?.bio || "Description"}</p>
      </div>
    </div>
  );
}
