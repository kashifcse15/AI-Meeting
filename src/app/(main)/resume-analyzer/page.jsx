"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import {
    FileText,
    UploadCloud,
    BarChart3,
    ListChecks,
    ShieldAlert,
    KeyRound,
    WandSparkles,
    Coins,
    ShieldCheck,
    File,
} from "lucide-react";
import { Input } from "@/components/ui/input";

const ResumeAnalyser = () => {
    const [resume, setResume] = useState(null);
    const [jobDescription, setJobDescription] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];

        if (file) {
            setResume(file);
        }
    };

    const handleJobDescriptionChange = (e) => {
        setJobDescription(e.target.value);
    }

    return (
        <div className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <div className="mx-auto mb-10 max-w-3xl text-center">
                    <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold tracking-wide text-indigo-600">
                        <WandSparkles size={13} />
                        AI POWERED
                    </span>

                    <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
                        Resume Analyzer
                    </h1>

                    <p className="text-base leading-7 text-slate-500 sm:text-lg">
                        Upload your resume, compare it against a job description, and get
                        a polished ATS-style analysis with scores, risks, keywords, and
                        actionable rewrites.
                    </p>
                </div>

                {/* Main Grid */}
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

                    {/* Upload Card */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                        <div className="mb-6">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                    <FileText size={21} />
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold">
                                        Upload Resume
                                    </h2>

                                    <p className="mt-0.5 text-sm text-slate-500">
                                        Upload your resume to start the analysis.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* File Input */}
                        <input
                            id="resume-upload"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            onChange={handleFileChange}
                        />

                        {/* Upload Area */}
                        {!resume ? (
                            <label
                                htmlFor="resume-upload"
                                className="group flex min-h-[350px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 text-center transition-all duration-200 hover:border-indigo-400 hover:bg-indigo-50/40"
                            >
                                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-md">
                                    <FileText size={31} strokeWidth={1.8} />
                                </div>

                                <h3 className="text-lg font-semibold text-slate-800">
                                    Drop your resume here
                                </h3>

                                <p className="mt-2 text-sm text-slate-500">
                                    or click to browse from your device
                                </p>

                                <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 group-hover:bg-indigo-700">
                                    <UploadCloud size={17} />
                                    Choose Resume
                                </div>

                                <span className="mt-4 text-xs text-slate-400">
                                    PDF or DOCX · Max 5MB
                                </span>
                            </label>
                        ) : (
                            
                            <div className="flex min-h-[350px] flex-col items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50/30 px-6 text-center">

                                {/* File Icon */}
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
                                    <FileText size={30} />
                                </div>

                                {/* File Name */}
                                <h3 className="mt-5 max-w-full truncate text-lg font-semibold text-slate-800">
                                    {resume.name}
                                </h3>

                                {/* File Type */}
                                <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                                    <File size={15} />
                                    <span>
                                        {resume.type || "Unknown file type"}
                                    </span>
                                </div>

                                {/* File Size */}
                                <p className="mt-1 text-xs text-slate-400">
                                    {(resume.size / 1024 / 1024).toFixed(2)} MB
                                </p>

                                {/* Check ATS Button */}
                                <button
                                    type="button"
                                    className="mt-7 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-indigo-700 hover:shadow-md cursor-pointer"
                                >
                                    <BarChart3 size={18} />
                                    CHECK ATS SCORE
                                </button>

                                {/* Job Description */}
                                <div className="mt-8 w-full border-t border-slate-200 pt-6 text-left">
                                    <div className="mb-3">
                                        <h2 className="text-base font-semibold text-slate-800">
                                            Job Description
                                        </h2>

                                        <p className="mt-1 text-xs leading-5 text-slate-500">
                                            Paste the job description to compare your resume against the role.
                                        </p>
                                    </div>

                                    <Textarea
                                        placeholder="Paste the job description here..."
                                        className="min-h-[150px] resize-none rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm shadow-none transition-all placeholder:text-slate-400 focus-visible:border-indigo-400 focus-visible:ring-2 focus-visible:ring-indigo-100"
                                    />

                                    <p className="mt-2 text-right text-[11px] text-slate-400">
                                        Recommended: Include the complete job description
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Credit Notice */}
                        <div className="mt-4 flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                                <Coins size={18} />
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-amber-800">
                                    This analysis uses 2 credits
                                </p>

                                <p className="mt-0.5 text-xs text-amber-700/80">
                                    2 credits will be deducted when you start the resume analysis.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* What You'll Get */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                        <h2 className="text-xl font-semibold">
                            What You'll Get
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            Get detailed insights to improve your resume and increase your
                            chances of passing ATS screening.
                        </p>

                        <div className="mt-7 space-y-5">

                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                    <BarChart3 size={19} />
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold">
                                        ATS Score & Grade
                                    </h3>
                                    <p className="mt-1 text-xs leading-5 text-slate-500">
                                        Understand how well your resume performs against ATS
                                        screening systems.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                    <ListChecks size={19} />
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold">
                                        Section-by-Section Breakdown
                                    </h3>
                                    <p className="mt-1 text-xs leading-5 text-slate-500">
                                        See individual scores for experience, skills, education,
                                        projects and more.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500">
                                    <ShieldAlert size={19} />
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold">
                                        ATS Risks
                                    </h3>
                                    <p className="mt-1 text-xs leading-5 text-slate-500">
                                        Discover formatting and content issues that could hurt
                                        your application.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                                    <KeyRound size={19} />
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold">
                                        Missing Keywords
                                    </h3>
                                    <p className="mt-1 text-xs leading-5 text-slate-500">
                                        Find important keywords from the job description that are
                                        missing from your resume.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                                    <WandSparkles size={19} />
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold">
                                        Actionable Rewrites
                                    </h3>
                                    <p className="mt-1 text-xs leading-5 text-slate-500">
                                        Get ready-to-use suggestions to improve weak resume
                                        sections.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Privacy Notice */}
                <div className="mt-6 flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                        <ShieldCheck size={18} />
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-700">
                            Privacy Notice
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                            Uploaded files are sent for parsing and analysis, and the
                            temporary uploaded file is deleted server-side after extraction.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ResumeAnalyser;