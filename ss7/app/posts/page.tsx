"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const route = useRouter();
  const searchParams = useSearchParams();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    route.push(`/posts?search=${encodeURIComponent(inputValue)}`);
  };

  useEffect(() => {
    const searchParam = searchParams.get("search");
    if (searchParam) {
      setSearchValue(decodeURIComponent(searchParam));
    }
  }, [searchParams]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h2>Search Value: {searchValue}</h2>
      <div className="p-4 bg-white shadow-lg rounded-md">
        <input
          onChange={handleInput}
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Nhập từ khóa..."
        />
        <button
          onClick={handleClick}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Tìm Kiếm
        </button>
      </div>
    </div>
  );
}
