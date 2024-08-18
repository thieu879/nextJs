"use client"
import Link from 'next/link'
import { usePathname } from "next/navigation";
import React from 'react'

export default function page() {
    const patchName = usePathname();
  return (
    <div className="flex gap-[20px]">
      <Link
        className={patchName == "/home/contact" ? "active" : ""}
        href={"/home/contact"}
      >
        contact
      </Link>
      <Link
        className={patchName == "/home/login" ? "active" : ""}
        href={"/home/login"}
      >
        login
      </Link>
    </div>
  );
}
