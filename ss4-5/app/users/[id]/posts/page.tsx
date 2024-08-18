"use client";
import { useParams } from "next/navigation";
import React from "react";

export default function UserPostsPage() {
  const params = useParams();
  const { id } = params;

  return <div>danh sách bài viết của user id: {id}</div>;
}
