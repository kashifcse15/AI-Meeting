"use client";

import {
    AlertTriangle,
    BarChart3,
    CheckCircle2,
    FileText,
    KeyRound,
    ShieldAlert,
    Sparkles,
    Target,
    TriangleAlert,
} from "lucide-react";

const ResumeAnalysis = () => {
    const score = 84;

    // Circle calculations
    const radius = 72;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 100) * circumference;

    return (
        <div className="min-h-screen bg-[#f7f8fc] px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">

                {/* ================= HEADER ================= */}
                <div className="mb-8">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600">
                        <Sparkles size={13} />
                        AI RESUME ANALYSIS
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Resume Analysis
                    </h1>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                        A detailed ATS-style evaluation of your resume against
                        the target job description.
                    </p>
                </div>
                 <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_-20px_rgba(15,23,42,0.15)]">

                    {/* subtle background decoration */}
                    <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-indigo-100/50 blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-violet-100/40 blur-3xl" />

                    <div className="relative grid gap-10 p-7 md:grid-cols-[280px_1fr] md:p-10">

                        {/* SCORE CIRCLE */}
                        <div className="flex flex-col items-center justify-center border-b border-slate-100 pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-10">

                            <div className="relative h-48 w-48">

                                <svg
                                    className="h-full w-full -rotate-90"
                                    viewBox="0 0 180 180"
                                >
                                    {/* Background circle */}
                                    <circle
                                        cx="90"
                                        cy="90"
                                        r={radius}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="12"
                                        className="text-slate-100"
                                    />

                                    {/* Score circle */}
                                    <circle
                                        cx="90"
                                        cy="90"
                                        r={radius}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="12"
                                        strokeLinecap="round"
                                        strokeDasharray={circumference}
                                        strokeDashoffset={offset}
                                        className="text-indigo-600"
                                    />
                                </svg>

                                {/* Score text */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-5xl font-bold tracking-tight text-slate-900">
                                        {score}
                                    </span>

                                    <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
                                        / 100
                                    </span>
                                </div>
                            </div>

                            <div className="mt-5 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-bold text-indigo-600">
                                Grade A-
                            </div>

                            <p className="mt-3 text-center text-xs text-slate-400">
                                ATS Compatibility Score
                            </p>
                        </div>

                        {/* SUMMARY */}
                        <div className="flex flex-col justify-center">

                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                    <FileText size={20} />
                                </div>

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                                        Overall Summary
                                    </p>

                                    <h2 className="mt-1 text-xl font-semibold text-slate-900">
                                        Strong resume with room for better job alignment
                                    </h2>
                                </div>
                            </div>

                            <p className="max-w-2xl text-sm leading-7 text-slate-600">
                                Your resume demonstrates solid technical skills,
                                relevant development projects, and strong
                                foundational knowledge. The main opportunities
                                are improving keyword alignment, strengthening
                                measurable impact, and tailoring the resume
                                more closely to the target role.
                            </p>
            </div>
        </div>
        </div>
        </div></div>
    )}
