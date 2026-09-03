"use client";

import Image from "next/image";
import React, { useState } from "react";
import Button from "../../components/button";
import { supabase } from "@/services/supabaseClient";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
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
      className="relative min-h-screen overflow-hidden bg-slate-950"
      style={{
        backgroundImage: "url('/AuthBg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-slate-950/35" />

      {/* Soft blur/gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-slate-950/30" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center px-5 py-8">

        {/* Logo */}
        <div className="mb-8 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 shadow-lg backdrop-blur-sm">
            <Sparkles
              size={21}
              className="text-indigo-600"
            />
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-white drop-shadow-md">
            Artemus<span className="text-indigo-200">XR</span>
          </h1>
        </div>

        {/* Login Card */}
        <div className="w-full max-w-2xl rounded-3xl border border-white/40 bg-white/85 p-6 shadow-2xl backdrop-blur-xl sm:p-8">

          {/* Heading */}
          <div className="mb-6 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
              AI Interview Platform
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Welcome to ArtemusXR
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Practice smarter, prepare better, and walk into your next
              interview with confidence.
            </p>
          </div>

          {/* Image Swiper */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">

            {/* Image */}
            <div className="relative aspect-[16/8] w-full">
              <Image
                key={slides[currentSlide]}
                src={slides[currentSlide]}
                alt={`ArtemusXR preview ${currentSlide + 1}`}
                fill
                priority={currentSlide === 0}
                className="object-cover transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 672px"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>

            {/* Previous button */}
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/80 text-slate-800 shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-white"
            >
              <ChevronLeft size={21} />
            </button>

            {/* Next button */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next image"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/80 text-slate-800 shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-white"
            >
              <ChevronRight size={21} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-3 right-3 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-4 flex items-center justify-center gap-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to image ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-7 bg-indigo-600"
                    : "w-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* Login section */}
          <div className="mt-7 border-t border-slate-200 pt-6">

            <Button
              className="h-12 w-full cursor-pointer rounded-xl text-sm font-semibold shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              onClick={signInWithGoogle}
            >
              Login with Google
            </Button>

            <p className="mt-4 text-center text-xs text-slate-400">
              Secure authentication powered by Google
            </p>
          </div>
        </div>

        {/* Bottom text */}
        <p className="mt-6 text-xs font-medium text-white/80 drop-shadow">
          Your AI-powered interview companion
        </p>
      </div>
    </main>
  );
};

export default Login;