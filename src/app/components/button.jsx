import React from "react";

const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  ...props
}) => {
  return (
    <div className="w-full flex justify-center group">
      <button
        type={type}
        onClick={onClick}
        className={`relative flex items-center justify-center p-px font-semibold leading-6 text-white bg-gray-800 cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 ${className}`}
      >
        {/* Animated Gradient Border */}
        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

        {/* Button Content */}
        <span className="relative z-10 flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-gray-950">
          {children}
        </span>
      </button>
    </div>
  );
};

export default Button;

