import {
    CheckCircle2,
    FileText,
    KeyRound,
    Target,
    TrendingUp,
} from "lucide-react";

const ScoreBreakDown = ({ analysis }) => {
    const formatting = Number(analysis?.formatting) || 0;
    const keywordMatch = Number(analysis?.keywordMatch) || 0;
    const grammar = Number(analysis?.grammar) || 0;
    const jobRelevance = Number(analysis?.jobRelevance) || 0;

    const getScoreLabel = (score) => {
        if (score >= 90) return "Excellent";
        if (score >= 80) return "Strong";
        if (score >= 70) return "Good";
        if (score >= 60) return "Moderate";

        return "Needs Work";
    };

    const getScoreColor = (score) => {
        if (score >= 80) return "text-emerald-600";
        if (score >= 60) return "text-amber-600";

        return "text-red-600";
    };

    const scoreCards = [
        {
            title: "Resume Formatting",
            value: formatting,
            icon: FileText,
            iconBg: "bg-blue-50",
            iconColor: "text-blue-600",
            bar: "bg-blue-500",
        },
        {
            title: "Keyword Match",
            value: keywordMatch,
            icon: KeyRound,
            iconBg: "bg-violet-50",
            iconColor: "text-violet-600",
            bar: "bg-violet-500",
        },
        {
            title: "Grammar & Writing",
            value: grammar,
            icon: CheckCircle2,
            iconBg: "bg-emerald-50",
            iconColor: "text-emerald-600",
            bar: "bg-emerald-500",
        },
        {
            title: "Job Relevance",
            value: jobRelevance,
            icon: Target,
            iconBg: "bg-orange-50",
            iconColor: "text-orange-600",
            bar: "bg-orange-500",
        },
    ];

    return (
        <section className="mt-6">

            {/* Section Header */}

            <div className="mb-4 flex items-end justify-between">

                <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                        Score Breakdown
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-slate-900">
                        How your resume performs
                    </h2>
                </div>

                <div className="hidden items-center gap-2 text-xs text-slate-400 sm:flex">
                    <TrendingUp size={14} />
                    AI evaluated
                </div>

            </div>

            {/* Score Cards */}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                {scoreCards.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.title}
                            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                        >

                            {/* Icon + Status */}

                            <div className="flex items-center justify-between">

                                <div
                                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.iconBg} ${item.iconColor}`}
                                >
                                    <Icon size={19} />
                                </div>

                                <span
                                    className={`text-xs font-semibold ${getScoreColor(
                                        item.value
                                    )}`}
                                >
                                    {getScoreLabel(item.value)}
                                </span>

                            </div>

                            {/* Title */}

                            <p className="mt-5 text-sm font-medium text-slate-500">
                                {item.title}
                            </p>

                            {/* Score */}

                            <div className="mt-2 flex items-end gap-1">

                                <span className="text-3xl font-bold tracking-tight text-slate-900">
                                    {item.value}
                                </span>

                                <span className="mb-1 text-sm text-slate-400">
                                    /100
                                </span>

                            </div>

                            {/* Progress Bar */}

                            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">

                                <div
                                    className={`h-full rounded-full ${item.bar} transition-all duration-1000 ease-out`}
                                    style={{
                                        width: `${Math.min(
                                            Math.max(item.value, 0),
                                            100
                                        )}%`,
                                    }}
                                />

                            </div>

                        </div>
                    );
                })}

            </div>

        </section>
    );
};

export default ScoreBreakDown;