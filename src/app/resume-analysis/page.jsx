"use client";

import { AlertTriangle, ArrowLeft, Loader2, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import AnalysisHeader from "./_components/AnalysisHeader";
import ScoreHero from "./_components/ScoreHero";
import ScoreBreakdown from "./_components/ScoreBreakdown";
import Strengths from "./_components/Strengths";
import Weaknesses from "./_components/Weakness";
import RejectionRisks from "./_components/RejectionRisks";
import MissingKeywords from "./_components/MissingKeywords";
import Recommendations from "./_components/Recommendations";

const ResumeAnalysis = () => {
    const router = useRouter();

    const [analysis, setAnalysis] = useState(null);
    const [loading, setLoading] = useState(true);

    // Load AI analysis from sessionStorage
    useEffect(() => {
        const storedAnalysis =
            sessionStorage.getItem("resumeAnalysis");

        if (!storedAnalysis) {
            setLoading(false);
            return;
        }

        try {
            const parsedAnalysis = JSON.parse(storedAnalysis);

            setAnalysis(parsedAnalysis);
        } catch (error) {
            console.error(
                "Failed to load resume analysis:",
                error
            );
        } finally {
            setLoading(false);
        }
    }, []);

    // --------------------------------------------------
    // Loading State
    // --------------------------------------------------

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#f7f8fc] px-6">

                <div className="flex flex-col items-center text-center">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-100 bg-white shadow-sm">
                        <Loader2
                            size={24}
                            className="animate-spin text-indigo-600"
                        />
                    </div>

                    <p className="mt-4 text-sm font-semibold text-slate-700">
                        Loading your analysis...
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                        Preparing your ATS report
                    </p>

                </div>

            </div>
        );
    }

    // --------------------------------------------------
    // No Analysis Found
    // --------------------------------------------------

    if (!analysis) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#f7f8fc] px-6">

                <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                        <AlertTriangle size={25} />
                    </div>

                    <h1 className="mt-5 text-xl font-bold text-slate-900">
                        No analysis found
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                        Your resume analysis could not be found.
                        Please upload your resume and run the ATS
                        analysis again.
                    </p>

                    <button
                        type="button"
                        onClick={() =>
                            router.push("/resume-analyzer")
                        }
                        className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
                    >
                        <ArrowLeft size={17} />
                        Back to Resume Analyzer
                    </button>

                </div>

            </div>
        );
    }

    // --------------------------------------------------
    // Main Analysis Page
    // --------------------------------------------------

    return (
        <div className="min-h-screen bg-[#f7f8fc] px-4 py-8 text-slate-900 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-7xl">

                {/* Header */}

                <AnalysisHeader />

                {/* Overall ATS Score + Summary */}

                <ScoreHero
                    analysis={analysis}
                />

                {/* Score Breakdown */}

                <ScoreBreakdown
                    analysis={analysis}
                />

                {/* Strengths */}

                <Strengths
                    strengths={analysis.strengths}
                />

                {/* Weaknesses */}

                <Weaknesses
                    weaknesses={analysis.weaknesses}
                />

                {/* Rejection Risks */}

                <RejectionRisks
                    risks={analysis.rejectionRisks}
                />

                {/* Missing Keywords */}

                <MissingKeywords
                    keywords={analysis.missingKeywords}
                />

                {/* Recommendations */}

                <Recommendations
                    suggestions={analysis.suggestions}
                />

                {/* Footer */}

                <div className="mt-8 mb-4 flex items-center justify-center gap-2 text-xs text-slate-400">

                    <Sparkles size={13} />

                    <span>
                        Analysis generated by MockPilot AI
                    </span>

                </div>

            </div>

        </div>
    );
};

export default ResumeAnalysis;