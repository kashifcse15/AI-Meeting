import React from "react";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-indigo-600 rounded-full shadow-md group ${className}`}
    >
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-600 group-hover:translate-x-0">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </span>

      <span className="absolute flex items-center justify-center w-full h-full text-indigo-600 transition-all duration-300 group-hover:translate-x-full">
        {children}
      </span>

      <span className="relative invisible">{children}</span>
    </button>
  );
};

export default Button;