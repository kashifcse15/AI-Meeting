import { Info, KeyRound } from "lucide-react";

const MissingKeywords = ({ keywords = [] }) => {
    return (
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            {/* Header */}

            <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                    <KeyRound size={21} />
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                        Missing Keywords
                    </h2>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                        Job-specific terms that could improve your
                        keyword alignment.
                    </p>
                </div>

            </div>

            {/* Keywords */}

            <div className="mt-6">

                {keywords.length > 0 ? (
                    <div className="flex flex-wrap gap-2">

                        {keywords.map((keyword, index) => (
                            <span
                                key={index}
                                className="rounded-lg border border-violet-100 bg-violet-50 px-3 py-2 text-xs font-semibold text-violet-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-100 hover:shadow-sm"
                            >
                                {keyword}
                            </span>
                        ))}

                    </div>
                ) : (
                    <div className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50/50 px-4 py-3 text-sm text-emerald-700">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100">
                            ✓
                        </div>

                        <span>
                            Great! No significant missing keywords
                            were identified.
                        </span>
                    </div>
                )}

            </div>

            {/* Helpful Note */}

            {keywords.length > 0 && (
                <div className="mt-5 flex gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">

                    <Info
                        size={16}
                        className="mt-0.5 shrink-0 text-slate-400"
                    />

                    <p className="text-xs leading-5 text-slate-500">
                        Only add keywords that genuinely match your
                        skills or experience. Avoid keyword stuffing,
                        as recruiters and ATS systems can penalize
                        irrelevant additions.
                    </p>

                </div>
            )}

        </section>
    );
};

export default MissingKeywords;