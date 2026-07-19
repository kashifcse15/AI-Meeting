"use client";

import Link from "next/link";
import { Bot, Home, Search, Mic } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] text-white">
      {/* Background Glow */}
      <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-[120px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 mx-6 max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-2xl">
        {/* Robot */}
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 p-6 animate-pulse">
            <Bot size={70} />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-center text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="mt-4 text-center text-3xl font-bold">
          AI Interview Room Not Found
        </h2>

        <p className="mt-4 text-center text-gray-400 leading-7">
          Our AI interviewer searched every meeting room, scanned the cloud,
          and even asked another AI...
          <br />
          <span className="text-white font-medium">
            This interview page doesn't exist.
          </span>
        </p>

        {/* Status */}
        <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-[#0c1228] p-6">
          <div className="mb-4 flex items-center gap-2 text-cyan-400 font-semibold">
            <Search size={18} />
            AI Status Report
          </div>

          <div className="space-y-3 text-gray-300">
            <div className="flex justify-between">
              <span>🤖 AI Engine</span>
              <span className="text-green-400">Online</span>
            </div>

            <div className="flex justify-between">
              <span>🎤 Microphone</span>
              <span className="text-green-400">Connected</span>
            </div>

            <div className="flex justify-between">
              <span>📹 Camera</span>
              <span className="text-green-400">Ready</span>
            </div>

            <div className="flex justify-between">
              <span>📂 Interview Room</span>
              <span className="text-red-400">Not Found</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold transition hover:bg-cyan-400"
          >
            <Home size={18} />
            Go Home
          </Link>

          <Link
            href="/dashboard"
            className="flex items-center justify-center gap-2 rounded-xl border border-violet-500 px-6 py-3 font-semibold transition hover:bg-violet-500/20"
          >
            <Mic size={18} />
            Start Interview
          </Link>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Error Code: <span className="font-semibold text-white">404</span> •
          The interviewer is waiting... just not here.
        </p>
      </div>
    </main>
  );
}