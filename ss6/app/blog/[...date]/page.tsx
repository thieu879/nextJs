// pages/blog/[...date].tsx
import React from "react";
interface Date{
    date:string
}
interface Props {
  params: Date
}

export default function Page({ params }: Props) {
  const path = params.date.join("/");

  return <div>Bạn đang xem blog với đường dẫn: /{path}</div>;
}
