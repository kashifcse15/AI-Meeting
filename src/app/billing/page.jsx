import React from "react";
import { CheckCircle2 } from "lucide-react";
import { plans } from "@/services/PaymentOptions";

const Page = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold">
            Upgrade Your <span className="text-violet-500">AI Meeting</span>
          </h1>

          <p className="mt-4 text-lg text-gray-400">
            Choose the perfect plan and unlock more AI interview credits.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular
                  ? "border-violet-500 bg-slate-900"
                  : "border-slate-800 bg-slate-900/70"
              }`}
            >
              {plan.popular && (
                <span className="absolute right-5 top-5 rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold">
                  Most Popular
                </span>
              )}

              <h2 className="text-3xl font-bold">{plan.name}</h2>

              <p className="mt-3 text-gray-400">{plan.description}</p>

              <div className="mt-8">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-gray-400"> / month</span>
              </div>

              <p className="mt-3 font-medium text-violet-400">
                {plan.credits} AI Interview Credits
              </p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-green-500" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10 w-full rounded-xl py-3 font-semibold transition ${
                  plan.popular
                    ? "bg-violet-600 hover:bg-violet-700"
                    : "bg-slate-800 hover:bg-slate-700"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center text-sm text-gray-500">
          🔒 Secure payments powered by Razorpay
        </div>
      </div>
    </div>
  );
};

export default Page;