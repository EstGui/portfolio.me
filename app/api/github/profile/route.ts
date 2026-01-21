import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "GITHUB_TOKEN not defined" },
      { status: 500 }
    );
  }

  const res = await fetch("https://api.github.com/user", {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-Github-Api-Version": "2022-11-28",
    },
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    return NextResponse.json(
        { error: "Error fetching profile"},
        { status: res.status }
    )
  }

  const data = await res.json();
  return NextResponse.json(data);
}
