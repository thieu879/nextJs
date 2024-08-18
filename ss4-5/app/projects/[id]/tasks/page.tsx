"use client";
import { useParams } from "next/navigation";
import React from "react";

export default function taskPage() {
  const params = useParams();
  const { id } = params;

  return <div>danh sách nhiệm vụ dự án có id: {id}</div>;
}
