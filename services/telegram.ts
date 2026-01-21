const TOKEN = process.env.TELEGRAM_TOKEN;

export async function sendTelegramMessage(content: string) {
  return fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: content,
      parse_mode: "HTML",
    }),
  });
}
