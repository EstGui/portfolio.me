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


export default function About({ username } : GithubUserProps) {
  const [userData, setUserData] = useState<GithubUserResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`)
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
  }, [username])

  return (
    <div className="flex min-h-[280] bg-secondary min-w-full rounded-2xl overflow-hidden border border-[#646464]">
      <Image
        src={userData?.avatar_url ?? "/images/default-avatar.svg"}
        width={280}
        height={280}
        alt={`profile photo ${userData?.name}`}
        draggable="false"
        className="border-r border-r-[#646464] min-h-[280] min-w-[280]"
      />
      <div className="w-full flex flex-col items-center justify-center gap-1.5">
        <h1 className="font-primary text-5xl font-semibold">{userData?.name}</h1>
        <p>{userData?.bio}</p>
      </div>
    </div>
  )
}