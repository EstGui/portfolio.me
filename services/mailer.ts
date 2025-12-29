import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(content: string, to: string) {
  await resend.emails.send({
    from: "Guilherme Esteves - Portfolio <onboarding@resend.dev>",
    to: to || process.env.DESTINATION_ADDRESS as string,
    subject: "Response to your inquiry",
    text: content,
  });
}
