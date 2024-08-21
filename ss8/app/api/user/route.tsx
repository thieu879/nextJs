import { NextResponse } from "next/server";
import React from "react";
const user = [
  {
    id: 1,
    name: "Gia Thiều",
  },
  {
    id: 2,
    name: "Nguyễn Văn A",
  },
  {
    id: 3,
    name: "Trần Thị B",
  },
];

// export async function GET() {
//   return NextResponse.json(user);
// }

export async function POST(req: any) {
  const data = await req.json();
  console.log(11111, data);

  return NextResponse.json({ message: "Thêm user thành công"});
}