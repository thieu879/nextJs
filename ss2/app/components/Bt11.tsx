"use client"
import React, { useState } from "react";

const Bt11 = () => {
  const [selectedOption, setSelectedOption] = useState("HTML");
  const [isOpen, setIsOpen] = useState(false);

  const options = ["HTML", "CSS", "JavaScript", "NextJS"];

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="w-64">
      <label className="block text-sm font-medium text-gray-700">Môn học</label>
      <div className="relative mt-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <span className="block truncate">{selectedOption}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <i className="fa-solid fa-caret-down"></i>
          </span>
        </button>
        {isOpen && (
          <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            {options.map((option) => (
              <li
                key={option}
                className={`cursor-pointer select-none relative py-2 pl-3 pr-9 ${
                  selectedOption === option
                    ? "text-indigo-600"
                    : "text-gray-900"
                }`}
                onClick={() => handleOptionClick(option)}
              >
                <span
                  className={`block truncate ${
                    selectedOption === option ? "font-semibold" : "font-normal"
                  }`}
                >
                  {option}
                </span>
                {selectedOption === option && (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 7.293a1 1 0 00-1.414 0L9 13.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Bt11;
