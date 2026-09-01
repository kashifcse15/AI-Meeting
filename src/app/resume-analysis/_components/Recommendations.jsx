import {
    ArrowUpRight,
    CheckCircle2,
    Lightbulb,
} from "lucide-react";

const Recommendations = ({ suggestions = [] }) => {
    return (
        <section className="mt-6 overflow-hidden rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-6 shadow-sm">

            {/* Header */}

            <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                    <Lightbulb size={21} />
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                        Recommended Improvements
                    </h2>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                        High-impact changes you can make to improve
                        your resume and ATS performance.
                    </p>
                </div>

            </div>

            {/* Suggestions */}

            <div className="mt-6 space-y-3">

                {suggestions.length > 0 ? (
                    suggestions.map((suggestion, index) => (
                        <div
                            key={index}
                            className="group flex gap-4 rounded-xl border border-white bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                        >

                            {/* Number */}

                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-xs font-bold text-indigo-600 transition-colors group-hover:bg-indigo-100">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            {/* Content */}

                            <div className="flex-1">

                                <p className="text-sm leading-6 text-slate-600">
                                    {suggestion}
                                </p>

                            </div>

                            {/* Arrow */}

                            <ArrowUpRight
                                size={17}
                                className="mt-1 shrink-0 text-slate-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-500"
                            />

                        </div>
                    ))
                ) : (
                    <div className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50/50 p-4 text-sm text-emerald-700">

                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100">
                            <CheckCircle2 size={17} />
                        </div>

                        <span>
                            No additional improvements were suggested.
                        </span>

                    </div>
                )}

            </div>

        </section>
    );
};

export default Recommendations;