"use client";

import Image from "next/image";
import React, { useState } from "react";
import Button from "../../components/button";
import { supabase } from "@/services/supabaseClient";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const slides = [
  "/auth-slider/download.jpg",
  "/auth-slider/image_3.jpg",
  "/auth-slider/Madrid.jpg",
  "/auth-slider/spotify.jpeg",
  "/auth-slider/completed.png",
  "/auth-slider/link.jpg",
  "/auth-slider/butterfly.jpeg",
  "/auth-slider/Madrid.jpg",
  "/auth-slider/download.jpg",
  "/auth-slider/image_3.jpg",
];


const Login = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.log("Error signing in:", error.message);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/AuthBg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark / soft overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center px-5 py-8 mt-33">

       

        {/* SWIPER */}
        <div className="w-full max-w-2xl">

          <div className="relative overflow-hidden rounded-2xl border border-white/50 bg-black/10 shadow-2xl backdrop-blur-[2px]">

            {/* Image */}
            <div className="relative aspect-[16/8] w-full">
              <Image
                key={slides[currentSlide]}
                src={slides[currentSlide]}
                alt={`ArtemusXR image ${currentSlide + 1}`}
                fill
                priority={currentSlide === 0}
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 768px) 100vw, 672px"
              />

              {/* Slight image gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Previous */}
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next image"
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white"
            >
              <ChevronRight size={22} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 right-4 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to image ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 bg-white shadow"
                    : "w-1.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>

        {/* WELCOME TEXT */}
        <div className="mt-7 text-center text-black drop-shadow-lg">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Welcome to ArtemusXR
          </h1>

          <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-black/90 sm:text-base">
            Practice smarter, prepare better, and walk into your next
            interview with confidence.
          </p>
        </div>

        {/* LOGIN BUTTON */}
        <div className="mt-6 w-full max-w-2xl">
          <Button
            className="h-12 w-full cursor-pointer rounded-xl bg-white text-sm font-semibold text-slate-900 shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/95 hover:shadow-2xl"
            onClick={signInWithGoogle}
          >
            Login with Google
          </Button>

          <p className="mt-3 text-center text-xs text-white/75 drop-shadow">
            Secure authentication powered by Google
          </p>
        </div>

      </div>
    </main>
  );
};

export default Login;