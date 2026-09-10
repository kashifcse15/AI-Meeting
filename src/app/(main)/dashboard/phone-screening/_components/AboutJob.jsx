"use client";

import { useState } from "react";

const AboutJob = () => {
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");

  const addSkill = (e) => {
    if (e.key === "Enter" && skillInput.trim() !== "") {
      e.preventDefault();

      const newSkill = skillInput.trim();

      if (!skills.includes(newSkill)) {
        setSkills([...skills, newSkill]);
      }

      setSkillInput("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className="w-full max-w-5xl mx-auto">

      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-medium text-blue-600 mb-2">
          STEP 1 OF 3
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
          About the Job
        </h1>

        <p className="mt-2 text-gray-500 max-w-2xl">
          Tell us about the role you're hiring for. This information will
          help ArtemusXR create a relevant AI-powered screening.
        </p>
      </div>

      {/* Main Form Card */}
      <div className="rounded-3xl border border-gray-200 bg-white shadow-sm">

        {/* Job Information */}
        <div className="p-6 md:p-8">

          <div className="mb-7">
            <h2 className="text-xl font-semibold text-gray-900">
              Job Information
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Provide the basic details about the position.
            </p>
          </div>

          {/* Job Title + Department */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Title
              </label>

              <input
                type="text"
                placeholder="e.g. Senior Frontend Developer"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department
              </label>

              <input
                type="text"
                placeholder="e.g. Engineering"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
            </div>

          </div>

          {/* Job Description */}
          <div className="mt-6">

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Description
            </label>

            <textarea
              rows={6}
              placeholder="Describe the role, responsibilities, expectations and what you're looking for in a candidate..."
              className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />

            <p className="mt-2 text-xs text-gray-400">
              A detailed description helps the AI generate better screening
              questions.
            </p>

          </div>

          {/* Experience */}
          <div className="mt-6">

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Experience Required
            </label>

            <select
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              defaultValue=""
            >
              <option value="" disabled>
                Select experience
              </option>

              <option>0–2 years</option>
              <option>2–4 years</option>
              <option>4–6 years</option>
              <option>6–8 years</option>
              <option>8+ years</option>
            </select>

          </div>

          {/* Required Skills */}
          <div className="mt-6">

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Required Skills
            </label>

            <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100">

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2 mb-2">

                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700"
                  >
                    {skill}

                    <button
                      type="button"
                      onClick={() => removeSkill(skill)}
                      className="text-blue-400 hover:text-blue-700"
                    >
                      ×
                    </button>
                  </span>
                ))}

              </div>

              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={addSkill}
                placeholder={
                  skills.length === 0
                    ? "Type a skill and press Enter..."
                    : "Add another skill..."
                }
                className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
              />

            </div>

            <p className="mt-2 text-xs text-gray-400">
              Press Enter after each skill.
            </p>

          </div>

          {/* Job Type + Work Mode */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Type
              </label>

              <select
                defaultValue=""
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              >
                <option value="" disabled>
                  Select job type
                </option>

                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Internship</option>
                <option>Freelance</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Work Mode
              </label>

              <select
                defaultValue=""
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              >
                <option value="" disabled>
                  Select work mode
                </option>

                <option>Remote</option>
                <option>Hybrid</option>
                <option>On-site</option>
              </select>
            </div>

          </div>

          {/* Location + Salary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>

              <input
                type="text"
                placeholder="e.g. Bangalore, India"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Salary Range
                <span className="ml-2 text-xs font-normal text-gray-400">
                  Optional
                </span>
              </label>

              <input
                type="text"
                placeholder="e.g. ₹8–12 LPA"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100 bg-gray-50/70 px-6 py-5 md:px-8 rounded-b-3xl">

          <p className="text-xs text-gray-400">
            You can edit these details later.
          </p>

          <button
            type="button"
            className="w-full sm:w-auto rounded-xl bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md active:scale-[0.98]"
          >
            Continue →
          </button>

        </div>

      </div>

    </div>
  );
};

export default AboutJob;