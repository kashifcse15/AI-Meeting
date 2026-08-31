import { AlertTriangle } from "lucide-react";

const Weaknesses = ({ weaknesses = [] }) => {
    return (
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            {/* Header */}

            <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <AlertTriangle size={21} />
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                        Key Weaknesses
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Areas that are currently limiting your
                        resume's effectiveness.
                    </p>
                </div>

            </div>

            {/* Weakness Cards */}

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                {weaknesses.length > 0 ? (
                    weaknesses.map((weakness, index) => (
                        <div
                            key={index}
                            className="group rounded-xl border border-slate-100 bg-slate-50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-100 hover:bg-amber-50/40 hover:shadow-sm"
                        >

                            {/* Number */}

                            <span className="text-xs font-bold uppercase tracking-[0.15em] text-amber-600">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            {/* Weakness */}

                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                {weakness}
                            </p>

                        </div>
                    ))
                ) : (
                    <div className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50/50 p-4 text-sm text-emerald-700 md:col-span-2 lg:col-span-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100">
                            ✓
                        </span>

                        No major weaknesses were identified.
                    </div>
                )}

            </div>

        </section>
    );
};

export default Weaknesses;