import {
    CheckCircle2,
    ShieldAlert,
    XCircle,
} from "lucide-react";

const RejectionRisks = ({ risks = [] }) => {
    return (
        <section className="mt-6 overflow-hidden rounded-2xl border border-red-200 bg-white shadow-sm">

            {/* Header */}

            <div className="border-b border-red-100 bg-gradient-to-r from-red-50 via-orange-50 to-white px-6 py-5">

                <div className="flex items-start gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                        <ShieldAlert size={21} />
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-red-900">
                            Why Could Your Resume Be Rejected?
                        </h2>

                        <p className="mt-1 text-sm text-red-700/70">
                            Potential issues that could hurt your chances
                            during ATS or recruiter screening.
                        </p>
                    </div>

                </div>

            </div>

            {/* Risks */}

            <div className="divide-y divide-slate-100">

                {risks.length > 0 ? (
                    risks.map((risk, index) => (
                        <div
                            key={index}
                            className="group flex gap-4 px-6 py-5 transition-colors hover:bg-red-50/30"
                        >

                            {/* Icon */}

                            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500 transition-colors group-hover:bg-red-100">
                                <XCircle size={17} />
                            </div>

                            {/* Risk */}

                            <div className="flex-1">

                                <div className="flex items-center gap-2">

                                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-red-400">
                                        Risk {String(index + 1).padStart(2, "0")}
                                    </span>

                                </div>

                                <p className="mt-1.5 text-sm leading-6 text-slate-600">
                                    {risk}
                                </p>

                            </div>

                        </div>
                    ))
                ) : (
                    <div className="flex items-center gap-3 px-6 py-6 text-sm text-emerald-600">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50">
                            <CheckCircle2 size={17} />
                        </div>

                        <span>
                            No major rejection risks were identified.
                        </span>
                    </div>
                )}

            </div>

        </section>
    );
};

export default RejectionRisks;