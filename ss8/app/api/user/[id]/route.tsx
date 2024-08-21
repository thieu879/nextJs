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

// export async function GET(req: any, res: any) {
//   console.log(req);
//   let find = user.find((item) => {
//     return item.id == +res.params.id;
//   });
//   return NextResponse.json({ user: find ? find : "không tìm thấy" });
// }

export async function DELETE(req: any) {
  const data = await req.json();
  console.log(11111, data);

  return NextResponse.json({ message: "Xoá thành công"});
}

export async function PUT(req: any) {
  const data = await req.json();
  console.log(11111, data);

  return NextResponse.json({ message: "cập nhật user thành công"});
}

export async function GET(req: any) {
  const { searchParams } = new URL(req.url);
  const nameQuery = searchParams.get("name");

  if (nameQuery) {
    const filteredUsers = user.filter((user) =>
      user.name.toLowerCase().includes(nameQuery.toLowerCase())
    );
    return NextResponse.json({ data: filteredUsers });
  }
  return NextResponse.json({ data: user });
}