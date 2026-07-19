import React, { forwardRef } from "react";

const Button = forwardRef(
  (
    {
      children,
      onClick,
      className = "",
      type = "button",
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        {...props}
        className={`relative group overflow-hidden rounded-xl p-[2px] font-semibold text-white transition-all duration-300
        ${
          disabled
            ? "cursor-not-allowed opacity-60"
            : "cursor-pointer hover:scale-105 active:scale-95"
        }
        ${className}`}
      >
        {/* Animated Blue Gradient Border */}
        <span
          className="
            absolute inset-0 rounded-xl
            bg-gradient-to-r
            from-sky-400
            via-blue-500
            to-indigo-600
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        {/* Button Content */}
        <span
          className="
            relative z-10
            flex items-center justify-center gap-2
            rounded-[10px]
            bg-blue-600
            px-6 py-3
            transition-colors
            duration-300
            group-hover:bg-blue-700
          "
        >
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;