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

                {/* ================= HERO SCORE ================= */}
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

                            {/* Quick highlights */}
                            <div className="mt-7 grid gap-3 sm:grid-cols-2">

                                <div className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3">
                                    <CheckCircle2
                                        size={18}
                                        className="text-emerald-600"
                                    />

                                    <span className="text-sm font-medium text-slate-700">
                                        Strong technical foundation
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3">
                                    <CheckCircle2
                                        size={18}
                                        className="text-emerald-600"
                                    />

                                    <span className="text-sm font-medium text-slate-700">
                                        Good project experience
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 rounded-xl border border-amber-100 bg-amber-50/60 px-4 py-3">
                                    <TriangleAlert
                                        size={18}
                                        className="text-amber-600"
                                    />

                                    <span className="text-sm font-medium text-slate-700">
                                        Keyword alignment can improve
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 rounded-xl border border-amber-100 bg-amber-50/60 px-4 py-3">
                                    <TriangleAlert
                                        size={18}
                                        className="text-amber-600"
                                    />

                                    <span className="text-sm font-medium text-slate-700">
                                        More measurable impact needed
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= SCORE CARDS ================= */}
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Formatting */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <div className="flex items-center justify-between">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                <FileText size={19} />
                            </div>

                            <span className="text-xs font-semibold text-emerald-600">
                                Excellent
                            </span>
                        </div>

                        <p className="mt-5 text-sm font-medium text-slate-500">
                            Resume Formatting
                        </p>

                        <div className="mt-2 flex items-end gap-1">
                            <span className="text-3xl font-bold">91</span>
                            <span className="mb-1 text-sm text-slate-400">
                                /100
                            </span>
                        </div>

                        <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                            <div className="h-full w-[91%] rounded-full bg-blue-500" />
                        </div>
                    </div>

                    {/* Keywords */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <div className="flex items-center justify-between">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                                <KeyRound size={19} />
                            </div>

                            <span className="text-xs font-semibold text-amber-600">
                                Needs Work
                            </span>
                        </div>

                        <p className="mt-5 text-sm font-medium text-slate-500">
                            Keyword Match
                        </p>

                        <div className="mt-2 flex items-end gap-1">
                            <span className="text-3xl font-bold">76</span>
                            <span className="mb-1 text-sm text-slate-400">
                                /100
                            </span>
                        </div>

                        <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                            <div className="h-full w-[76%] rounded-full bg-violet-500" />
                        </div>
                    </div>

                    {/* Grammar */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <div className="flex items-center justify-between">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                                <CheckCircle2 size={19} />
                            </div>

                            <span className="text-xs font-semibold text-emerald-600">
                                Strong
                            </span>
                        </div>

                        <p className="mt-5 text-sm font-medium text-slate-500">
                            Grammar & Writing
                        </p>

                        <div className="mt-2 flex items-end gap-1">
                            <span className="text-3xl font-bold">88</span>
                            <span className="mb-1 text-sm text-slate-400">
                                /100
                            </span>
                        </div>

                        <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                            <div className="h-full w-[88%] rounded-full bg-emerald-500" />
                        </div>
                    </div>

                    {/* Relevance */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <div className="flex items-center justify-between">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                                <Target size={19} />
                            </div>

                            <span className="text-xs font-semibold text-amber-600">
                                Moderate
                            </span>
                        </div>

                        <p className="mt-5 text-sm font-medium text-slate-500">
                            Job Relevance
                        </p>

                        <div className="mt-2 flex items-end gap-1">
                            <span className="text-3xl font-bold">81</span>
                            <span className="mb-1 text-sm text-slate-400">
                                /100
                            </span>
                        </div>

                        <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                            <div className="h-full w-[81%] rounded-full bg-orange-500" />
                        </div>
                    </div>

                </div>

                {/* ================= WEAKNESSES ================= */}
                <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                    <div className="flex items-start gap-4">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                            <AlertTriangle size={21} />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-slate-900">
                                Key Weaknesses
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                These areas are currently limiting your resume's
                                effectiveness.
                            </p>
                        </div>

                    </div>

                    <div className="mt-6 grid gap-4 md:grid-cols-3">

                        <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                                01
                            </span>

                            <h3 className="mt-3 text-sm font-semibold">
                                Weak measurable impact
                            </h3>

                            <p className="mt-2 text-xs leading-5 text-slate-500">
                                Several project bullets describe what you built
                                but do not quantify the result or impact.
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                                02
                            </span>

                            <h3 className="mt-3 text-sm font-semibold">
                                Missing job-specific keywords
                            </h3>

                            <p className="mt-2 text-xs leading-5 text-slate-500">
                                Some important technologies and requirements
                                from the job description are not reflected.
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                                03
                            </span>

                            <h3 className="mt-3 text-sm font-semibold">
                                Generic positioning
                            </h3>

                            <p className="mt-2 text-xs leading-5 text-slate-500">
                                Your opening profile could be tailored more
                                specifically toward the target position.
                            </p>
                        </div>

                    </div>
                </div>

                {/* ================= REJECTION RISKS ================= */}
                <div className="mt-6 overflow-hidden rounded-2xl border border-red-200 bg-white shadow-sm">

                    <div className="border-b border-red-100 bg-red-50/70 px-6 py-5">
                        <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-red-600">
                                <ShieldAlert size={20} />
                            </div>

                            <div>
                                <h2 className="font-semibold text-red-900">
                                    Why Could Your Resume Be Rejected?
                                </h2>

                                <p className="mt-1 text-xs text-red-700/70">
                                    Potential issues that could hurt your chances
                                    during automated or recruiter screening.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="divide-y divide-slate-100">

                        <div className="flex gap-4 px-6 py-5">
                            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-500" />

                            <div>
                                <h3 className="text-sm font-semibold text-slate-800">
                                    Low keyword alignment
                                </h3>

                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                    Important terms from the job description may
                                    not appear naturally in your resume.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 px-6 py-5">
                            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-500" />

                            <div>
                                <h3 className="text-sm font-semibold text-slate-800">
                                    Experience does not clearly demonstrate impact
                                </h3>

                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                    Recruiters may struggle to understand the
                                    measurable value of your projects.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 px-6 py-5">
                            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-500" />

                            <div>
                                <h3 className="text-sm font-semibold text-slate-800">
                                    Resume isn't sufficiently tailored
                                </h3>

                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                    A generic resume can perform worse when the
                                    role expects highly specific skills or
                                    terminology.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ================= SUGGESTIONS ================= */}
                <div className="mt-6 rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-6 shadow-sm">

                    <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                            <Sparkles size={20} />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-slate-900">
                                Recommended Improvements
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                High-impact changes that can improve your score.
                            </p>
                        </div>

                    </div>

                    <div className="mt-6 space-y-3">

                        <div className="flex gap-3 rounded-xl border border-white bg-white p-4 shadow-sm">
                            <CheckCircle2
                                size={18}
                                className="mt-0.5 shrink-0 text-indigo-600"
                            />
                            <p className="text-sm text-slate-600">
                                Tailor your summary and skills section to match
                                the terminology used in the target job.
                            </p>
                        </div>

                        <div className="flex gap-3 rounded-xl border border-white bg-white p-4 shadow-sm">
                            <CheckCircle2
                                size={18}
                                className="mt-0.5 shrink-0 text-indigo-600"
                            />
                            <p className="text-sm text-slate-600">
                                Add measurable outcomes to project and experience
                                bullets wherever possible.
                            </p>
                        </div>

                        <div className="flex gap-3 rounded-xl border border-white bg-white p-4 shadow-sm">
                            <CheckCircle2
                                size={18}
                                className="mt-0.5 shrink-0 text-indigo-600"
                            />
                            <p className="text-sm text-slate-600">
                                Incorporate missing job-specific keywords only
                                where they accurately reflect your experience.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ResumeAnalysis;