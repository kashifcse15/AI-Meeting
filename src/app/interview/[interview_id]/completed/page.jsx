import Image from "next/image";
import { CheckCircle2, ArrowRight, LayoutDashboard } from "lucide-react";
import Link from "next/link";

const InterviewCompleted = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-6 lg:px-20">
        <Image
          src="/spotify.jpeg"
          alt="Spotify"
          width={150}
          height={45}
          className="object-contain"
        />

        <Link
          href="/dashboard"
          className="rounded-xl border border-gray-200 bg-white px-5 py-2 font-medium shadow-sm transition hover:shadow-md"
        >
          Dashboard
        </Link>
      </header>

      {/* Main */}
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-20">

        {/* Success Icon */}
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 shadow-lg">
          <CheckCircle2 className="h-14 w-14 text-green-600" />
        </div>

        {/* Heading */}
        <h1 className="text-center text-5xl font-bold text-gray-900">
          Interview Completed 🎉
        </h1>

        <p className="mt-4 max-w-2xl text-center text-lg text-gray-500">
          Congratulations! Your interview has been submitted successfully.
          Our AI has finished evaluating your responses and your feedback
          report is ready.
        </p>

        {/* Hero Image */}
        <div className="mt-12 w-full overflow-hidden rounded-3xl bg-white p-4 shadow-2xl">
          <Image
            src="/completed.png"
            alt="Interview Completed"
            width={1200}
            height={650}
            className="h-[380px] w-full rounded-2xl object-cover"
          />
        </div>

        {/* Cards */}
        <div className="mt-12 grid w-full gap-8 md:grid-cols-2">

          {/* Next Steps */}
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-2xl font-bold">
              🚀 What's Next?
            </h2>

            <p className="mt-4 text-gray-500 leading-7">
              Your interview has been securely stored.
              Our AI has generated a detailed performance analysis including
              technical skills, communication, confidence, and overall
              recommendation.
            </p>

            <Link
              href="/dashboard"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              <LayoutDashboard size={20} />
              Go to Dashboard
            </Link>
          </div>

          {/* Feedback */}
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-2xl font-bold">
              📊 Interview Feedback
            </h2>

            <p className="mt-4 text-gray-500 leading-7">
              You can now view your complete AI-generated interview report.
              It includes ratings, strengths, improvement areas, interview
              summary and hiring recommendation.
            </p>

            <Link
              href="/dashboard"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-green-600 px-6 py-3 font-semibold text-green-600 transition hover:bg-green-50"
            >
              View Feedback
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InterviewCompleted;