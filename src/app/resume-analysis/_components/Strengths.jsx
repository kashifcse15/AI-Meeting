import { CheckCircle2 } from "lucide-react";

const Strengths = ({ strengths = [] }) => {
    return (
        <section className="mt-6 rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">

            {/* Header */}

            <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <CheckCircle2 size={21} />
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                        What's Working
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Strengths that are helping your resume
                        perform better.
                    </p>
                </div>

            </div>

            {/* Strengths */}

            <div className="mt-6 grid gap-3 md:grid-cols-2">

                {strengths.length > 0 ? (
                    strengths.map((strength, index) => (
                        <div
                            key={index}
                            className="group flex gap-3 rounded-xl border border-emerald-100 bg-emerald-50/50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-sm"
                        >

                            <div className="mt-0.5 shrink-0">
                                <CheckCircle2
                                    size={18}
                                    className="text-emerald-600"
                                />
                            </div>

                            <p className="text-sm leading-6 text-slate-700">
                                {strength}
                            </p>

                        </div>
                    ))
                ) : (
                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-sm text-slate-400 md:col-span-2">
                        No specific strengths were identified.
                    </div>
                )}

            </div>

        </section>
    );
};

export default Strengths;