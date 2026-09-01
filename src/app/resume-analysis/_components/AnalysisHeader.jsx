"use client";

import { ArrowLeft, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

const AnalysisHeader = () => {
    const router = useRouter();

    return (
        <div className="mb-8">

            {/* Top Row */}

            <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                {/* Back Button */}

                <button
                    type="button"
                    onClick={() =>
                        router.push("/resume-analyzer")
                    }
                    className="group inline-flex w-fit cursor-pointer items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-indigo-600"
                >
                    <ArrowLeft
                        size={17}
                        className="transition-transform duration-200 group-hover:-translate-x-0.5"
                    />

                    Resume Analyzer
                </button>

                {/* AI Badge */}

                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-100 bg-white px-3.5 py-1.5 text-xs font-semibold text-indigo-600 shadow-sm">

                    <Sparkles size={13} />

                    AI-POWERED ANALYSIS

                </div>

            </div>

            {/* Page Heading */}

            <div>

                {/* Small Label */}

                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">

                    <Sparkles size={15} />

                    Resume Intelligence

                </div>

                {/* Main Heading */}

                <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                    Resume Analysis
                </h1>

                {/* Description */}

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                    A detailed ATS-style evaluation of your resume
                    against the target job description.
                </p>

            </div>

        </div>
    );
};

export default AnalysisHeader;