import { NextResponse } from "next/server";

import { sendEmail } from "@/services/mailer";
import { sendTelegramMessage } from "@/services/telegram";

export async function POST(req: Request) {
  try {
    const update = await req.json();

    if (update.message?.reply_to_message?.text) {
      const replyText = update.message.reply_to_message.text;

      const match = replyText.match(
        /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/
      );

      if (match) {
        const email = match[0];
        const text = update.message.text;

        await sendEmail(text, email);
        await sendTelegramMessage("✅ Reply sent by email.");
        
        return NextResponse.json({ success: true }, { status: 200 });
      }
    }
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
