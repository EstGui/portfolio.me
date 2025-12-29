import { NextResponse } from "next/server";

import { sendEmail } from "@/services/mailer";
import { sendTelegramMessage } from "@/services/telegram";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullname, email, message } = body;

    if (!fullname || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const content =
      `👤 <b>${fullname}</b>\n` +
      `📩 ${email}\n\n` +
      `💬 <b>Message:</b>\n` +
      `"${message}"`;

    await sendEmail(content);
    await sendTelegramMessage(content);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
