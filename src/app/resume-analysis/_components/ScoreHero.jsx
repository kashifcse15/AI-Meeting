import {
    CheckCircle2,
    FileText,
    Sparkles,
    Target,
    TrendingUp,
} from "lucide-react";

const ScoreHero = ({ analysis }) => {
    const score = Number(analysis?.overallScore) || 0;
    const experience = Number(analysis?.experience) || 0;
    const skills = Number(analysis?.skills) || 0;
    const keywordMatch = Number(analysis?.keywordMatch) || 0;

    const radius = 72;
    const circumference = 2 * Math.PI * radius;

    const offset =
        circumference -
        (Math.min(score, 100) / 100) * circumference;

    return (
        <section className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_70px_-30px_rgba(15,23,42,0.2)]">

            {/* Background decoration */}
            <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-indigo-100/60 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-violet-100/50 blur-3xl" />

            <div className="relative grid md:grid-cols-[280px_1fr]">

                {/* ================= SCORE ================= */}

                <div className="flex flex-col items-center justify-center border-b border-slate-100 px-7 py-9 md:border-b-0 md:border-r md:px-10">

                    {/* Circle */}

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
                                className="text-indigo-600 transition-all duration-1000"
                            />
                        </svg>

                        {/* Score */}

                        <div className="absolute inset-0 flex flex-col items-center justify-center">

                            <span className="text-5xl font-bold tracking-tight text-slate-950">
                                {score}
                            </span>

                            <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                                / 100
                            </span>

                        </div>

                    </div>

                    {/* Grade */}

                    <div className="mt-5 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-sm font-bold text-indigo-600">
                        Grade {analysis?.grade || "—"}
                    </div>

                    <p className="mt-3 text-center text-xs font-medium text-slate-400">
                        Overall ATS Score
                    </p>

                </div>

                {/* ================= SUMMARY ================= */}

                <div className="flex flex-col justify-center p-7 md:p-10">

                    <div className="flex items-start gap-4">

                        {/* Icon */}

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                            <Sparkles size={20} />
                        </div>

                        <div>

                            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                                AI Summary
                            </p>

                            <h2 className="mt-1 text-xl font-semibold leading-8 text-slate-900">
                                {analysis?.summary ||
                                    "No summary was provided."}
                            </h2>

                        </div>

                    </div>

                    {/* Optional detailed feedback */}

                    {analysis?.overallFeedback && (
                        <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600">
                            {analysis.overallFeedback}
                        </p>
                    )}

                    {/* ================= QUICK STATS ================= */}

                    <div className="mt-7 grid gap-3 sm:grid-cols-3">

                        {/* Experience */}

                        <div className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">

                            <p className="text-xs text-slate-400">
                                Experience
                            </p>

                            <p className="mt-1 text-lg font-bold text-slate-800">
                                {experience}
                                <span className="text-xs font-medium text-slate-400">
                                    /100
                                </span>
                            </p>

                        </div>

                        {/* Skills */}

                        <div className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">

                            <p className="text-xs text-slate-400">
                                Skills
                            </p>

                            <p className="mt-1 text-lg font-bold text-slate-800">
                                {skills}
                                <span className="text-xs font-medium text-slate-400">
                                    /100
                                </span>
                            </p>

                        </div>

                        {/* Keywords */}

                        <div className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">

                            <p className="text-xs text-slate-400">
                                Keywords
                            </p>

                            <p className="mt-1 text-lg font-bold text-slate-800">
                                {keywordMatch}
                                <span className="text-xs font-medium text-slate-400">
                                    /100
                                </span>
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ScoreHero;