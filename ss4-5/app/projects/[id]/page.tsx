"use client";
import React from "react";
interface IdUser {
  id: string;
}
interface Props {
  params: IdUser;
}
export default function page(props: Props) {
  const { params } = props;
  return <div>trang chi tiết dự án có id: {params.id}</div>;
}
