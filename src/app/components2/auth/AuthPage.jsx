"use client";

import Image from "next/image";
import React, { useState } from "react";
import Button from "../../components/button";
import { supabase } from "@/services/supabaseClient";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const slides = [
  "/auth-slider/page1.jpeg",
  "/auth-slider/page2.jpeg",
  "/auth-slider/page3.jpeg",
  "/auth-slider/page4.jpeg",
  "/auth-slider/page5.jpeg",
  "/auth-slider/page6.jpeg",
  "/auth-slider/page7.jpeg",
  "/auth-slider/page8.jpeg",
  "/auth-slider/page9.jpeg",
  "/auth-slider/page10.jpeg",
];

const Login = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
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
    <main className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto bg-[#060816] md:fixed md:inset-0 md:h-screen md:overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg1.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="fixed inset-0 bg-[#050713]/35" />

      {/* Purple atmospheric glow */}
      <div className="fixed -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[140px]" />

      <div className="fixed -right-40 bottom-[-100px] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center px-4 pb-8 md:h-full md:px-0 md:pb-0">

        {/* BRAND */}
        <div className="absolute left-5 top-5 flex items-center gap-2 md:left-7 md:top-6">

          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20 backdrop-blur-xl">
            <Sparkles
              size={16}
              className="text-violet-300"
            />
          </div>

          <div>
            <p className="text-[13px] font-semibold tracking-[0.18em] text-white sm:text-[15px] md:tracking-[0.22em]">
              ARTIMUS<span className="text-violet-400">XR</span>
            </p>

            <p className="mt-0.5 text-[7px] tracking-[0.25em] text-white/40 sm:text-[8px]">
              INTERVIEWS REIMAGINED
            </p>
          </div>

        </div>

        {/* TOP TAGLINE */}
        <div className="absolute right-7 top-7 hidden items-center gap-3 md:flex">

          <span className="text-[9px] tracking-[0.35em] text-white/40">
            PRACTICE
          </span>

          <span className="text-white/20">→</span>

          <span className="text-[9px] tracking-[0.35em] text-white/40">
            IMPROVE
          </span>

          <span className="text-white/20">→</span>

          <span className="text-[9px] tracking-[0.35em] text-violet-300/80">
            GET HIRED
          </span>

        </div>

        {/* HERO TEXT */}
        <div className="relative mt-[105px] w-full text-center md:absolute md:top-[8vh] md:mt-0">

          <div className="mb-2 flex items-center justify-center gap-2">

            <span className="h-px w-6 bg-gradient-to-r from-transparent to-violet-400/70 sm:w-8" />

            <span className="text-[8px] font-medium tracking-[0.28em] text-violet-300/80 sm:text-[9px] sm:tracking-[0.4em]">
              AI INTERVIEW PLATFORM
            </span>

            <span className="h-px w-6 bg-gradient-to-l from-transparent to-violet-400/70 sm:w-8" />

          </div>

          <h1 className="mx-auto max-w-[370px] px-2 text-[26px] font-semibold leading-tight tracking-tight text-white sm:text-3xl md:max-w-none md:px-0 md:text-3xl">

            Practice today.

            <span className="ml-1 bg-gradient-to-r from-white via-violet-200 to-violet-500 bg-clip-text text-transparent sm:ml-2">
              Get hired tomorrow.
            </span>

          </h1>

          <p className="mx-auto mt-3 max-w-[350px] px-3 text-[10px] leading-relaxed text-white/45 sm:text-[11px] md:max-w-[500px] md:px-5 md:text-xs">
            Sharpen your interview skills with AI-powered practice,
            real-time conversations, intelligent feedback, and resume insights.
          </p>

        </div>

        {/* SWIPER */}
        <div
          className="
            relative
            mt-8
            w-full
            max-w-[820px]
            md:absolute
            md:left-1/2
            md:top-[20vh]
            md:mt-0
            md:w-[92vw]
            md:-translate-x-1/2
          "
        >

          {/* Outer glow */}
          <div className="absolute -inset-2 rounded-[26px] bg-violet-500/10 blur-2xl sm:-inset-3" />

          {/* Slider frame */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[18px]
              border
              border-white/15
              bg-white/[0.06]
              p-1
              shadow-[0_30px_80px_rgba(0,0,0,0.45)]
              backdrop-blur-xl
              sm:rounded-[22px]
            "
          >

            <div className="relative aspect-[17/8.2] w-full overflow-hidden rounded-[15px] bg-white sm:rounded-[18px]">

              {/* ENTIRE IMAGE VISIBLE */}
              <Image
                key={slides[currentSlide]}
                src={slides[currentSlide]}
                alt={`ArtemusXR feature ${currentSlide + 1}`}
                fill
                priority={currentSlide === 0}
                sizes="(max-width: 768px) 94vw, 820px"
                className="object-contain"
              />

              {/* Subtle glass overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />

              {/* LEFT ARROW */}
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous image"
                className="
                  absolute
                  left-2
                  top-1/2
                  flex
                  h-9
                  w-9
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/40
                  bg-black/30
                  text-white
                  shadow-xl
                  backdrop-blur-xl
                  transition-all
                  duration-200
                  hover:scale-110
                  hover:bg-black/50
                  active:scale-95
                  sm:left-3
                  sm:h-10
                  sm:w-10
                "
              >
                <ChevronLeft size={18} />
              </button>

              {/* RIGHT ARROW */}
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next image"
                className="
                  absolute
                  right-2
                  top-1/2
                  flex
                  h-9
                  w-9
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/40
                  bg-black/30
                  text-white
                  shadow-xl
                  backdrop-blur-xl
                  transition-all
                  duration-200
                  hover:scale-110
                  hover:bg-black/50
                  active:scale-95
                  sm:right-3
                  sm:h-10
                  sm:w-10
                "
              >
                <ChevronRight size={18} />
              </button>

              {/* COUNTER */}
              <div
                className="
                  absolute
                  bottom-2
                  right-2
                  rounded-full
                  border
                  border-white/20
                  bg-black/50
                  px-2.5
                  py-1
                  text-[8px]
                  font-medium
                  tracking-[0.15em]
                  text-white
                  backdrop-blur-xl
                  sm:bottom-3
                  sm:right-3
                  sm:px-3
                  sm:py-1.5
                  sm:text-[9px]
                "
              >
                {String(currentSlide + 1).padStart(2, "0")}
                <span className="mx-1 text-white/30">/</span>
                {String(slides.length).padStart(2, "0")}
              </div>

            </div>
          </div>

          {/* SLIDER CONTROLS */}
          <div className="mt-3 flex items-center justify-center gap-1.5 sm:mt-4 sm:gap-2">

            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    currentSlide === index
                      ? "w-6 bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.8)] sm:w-8"
                      : "w-1.5 bg-white/25 hover:bg-white/50"
                  }
                `}
              />
            ))}

          </div>

          {/* Swipe hint */}
          <div className="mt-2 text-center sm:mt-3">
            <span className="text-[8px] tracking-[0.3em] text-white/35 sm:text-[9px] sm:tracking-[0.4em]">
              SWIPE TO EXPLORE
            </span>
          </div>

        </div>

        {/* LOGIN SECTION */}
        <div
          className="
            relative
            mt-8
            w-full
            max-w-[520px]
            md:absolute
            md:bottom-[5vh]
            md:left-1/2
            md:mt-0
            md:w-[88vw]
            md:-translate-x-1/2
          "
        >

          {/* Divider */}
          <div className="mb-3 flex items-center gap-3 sm:mb-4">

            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />

            <span className="whitespace-nowrap text-[7px] tracking-[0.25em] text-white/25 sm:text-[8px] sm:tracking-[0.3em]">
              START YOUR JOURNEY
            </span>

            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />

          </div>

          {/* Login button */}
          <Button
            onClick={signInWithGoogle}
            className="
              group
              h-12
              w-full
              cursor-pointer
              rounded-xl
              border
              border-white/20
              bg-gradient-to-r
              from-blue-600
              via-violet-600
              to-purple-600
              text-sm
              font-semibold
              text-white
              shadow-[0_15px_40px_rgba(79,70,229,0.35)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_20px_50px_rgba(124,58,237,0.45)]
              active:translate-y-0
              sm:h-12
            "
          >
            <span className="flex items-center justify-center gap-2">
              Continue with Google

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Button>

          <p className="mt-2 text-center text-[8px] tracking-wide text-white/30 sm:text-[9px]">
            Secure authentication powered by Google
          </p>

        </div>

      </div>
    </main>
  );
};

export default Login;