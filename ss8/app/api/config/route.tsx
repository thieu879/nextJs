// app/api/config/route.js

import { NextRequest } from "next/server";

export async function GET(request:NextRequest) {
  // Giả lập dữ liệu cấu hình
  const config = {
    username: "JohnDoe",
    theme: "dark",
    language: "en",
    timezone: "UTC+7",
  };

  return new Response(JSON.stringify(config), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
