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
            </div>
        </div>
    )}
