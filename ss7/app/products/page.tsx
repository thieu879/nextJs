"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [inputCategory, setInputCategory] = useState("");
  const [inputName, setInputName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchName, setSearchName] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const name = searchParams.get("name") || "";
    const category = searchParams.get("category") || "";
    setSearchName(name);
    setSearchCategory(category);
    setInputName(name);
    setInputCategory(category);
  }, [searchParams]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCategory(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  const handleClick = () => {
    router.push(
      `/products?name=${encodeURIComponent(
        inputName
      )}&category=${encodeURIComponent(inputCategory)}`
    );
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <h1>Tên Sản Phẩm: {searchName}</h1>
      <h1>Danh Mục: {searchCategory}</h1>
      <input
        value={inputName}
        onChange={handleNameChange}
        type="text"
        placeholder="Enter name"
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        value={inputCategory}
        onChange={handleCategoryChange}
        type="text"
        placeholder="Enter category"
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleClick}
        className="w-full max-w-md px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Tìm Kiếm
      </button>
    </div>
  );
}
