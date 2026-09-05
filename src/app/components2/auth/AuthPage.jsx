"use client";

import Image from "next/image";
import React, { useState } from "react";
import Button from "../../components/button";
import { supabase } from "@/services/supabaseClient";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

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
  const router = useRouter(); 

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
    <main className="fixed inset-0 h-screen w-full overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/AuthBG.jpeg')",
        }}
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 h-full w-full">

        {/* ================= SWIPER ================= */}
        <div
          className="
            absolute
            left-1/2
            top-[14vh]
            w-[88vw]
            max-w-[680px]
            -translate-x-1/2
          "
        >
          {/* Slider image */}
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/70
              shadow-[0_18px_50px_rgba(0,0,0,0.18)]
            "
          >
            <div className="relative aspect-[17/8.2] w-full">

              <Image
                key={slides[currentSlide]}
                src={slides[currentSlide]}
                alt={`ArtemusXR image ${currentSlide + 1}`}
                fill
                priority={currentSlide === 0}
                sizes="(max-width: 768px) 88vw, 680px"
                className="object-cover"
              />

              {/* Slight shadow over image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />

              {/* LEFT ARROW */}
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous image"
                className="
                  absolute
                  left-4
                  top-1/2
                  flex
                  h-10
                  w-10
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-white/90
                  text-slate-800
                  shadow-lg
                  backdrop-blur-sm
                  transition-all
                  duration-200
                  hover:scale-110
                  hover:bg-white
                  active:scale-95
                "
              >
                <ChevronLeft size={21} />
              </button>

              {/* RIGHT ARROW */}
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next image"
                className="
                  absolute
                  right-4
                  top-1/2
                  flex
                  h-10
                  w-10
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-white/90
                  text-slate-800
                  shadow-lg
                  backdrop-blur-sm
                  transition-all
                  duration-200
                  hover:scale-110
                  hover:bg-white
                  active:scale-95
                "
              >
                <ChevronRight size={21} />
              </button>

              {/* COUNTER */}
              <div
                className="
                  absolute
                  bottom-3
                  right-3
                  rounded-full
                  bg-black/50
                  px-3
                  py-1
                  text-[11px]
                  font-medium
                  tracking-wide
                  text-white
                  backdrop-blur-md
                "
              >
                {String(currentSlide + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* ================= DOTS ================= */}
          <div className="mt-3 flex justify-center gap-1.5">
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
                      ? "w-7 bg-slate-800"
                      : "w-1.5 bg-slate-500/40 hover:bg-slate-700/60"
                  }
                `}
              />
            ))}
          </div>
        </div>


        {/* ================================================= */}
        {/* LOGIN BUTTON                                      */}
        {/* ================================================= */}

        <div
          className="
            absolute
            left-1/2
            top-[86vh]
            w-[88vw]
            max-w-[680px]
            -translate-x-1/2
          "
        >
          <Button
            onClick={signInWithGoogle}
            className="
              h-11
              w-full
              cursor-pointer
              rounded-xl
              border
              border-white/80
              bg-blue-600
              text-sm
              font-semibold
              text-white
              shadow-[0_10px_30px_rgba(0,0,0,0.18)]
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-blue-700
              hover:shadow-[0_15px_35px_rgba(0,0,0,0.22)]
              active:translate-y-0
            "
          >
            Login with Google
          </Button>

          <p
            className="
              mt-1.5
              text-center
              text-[10px]
              font-medium
              tracking-wide
              text-slate-600/70
            "
          >
            Secure authentication powered by Google
          </p>
        </div>

      </div>
    </main>
  );
};

export default Login;