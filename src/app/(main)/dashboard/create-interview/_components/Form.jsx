"use client";

import React, { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from '@/components/ui/input'
import { InterviewType } from "@/services/Constants";
import { ArrowRightIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Button from "@/app/components/button";

const Form = ({ onHandleInputChange, GoToNext }) => {
  const [interviewType, setInterviewType] = useState([]);

  useEffect(() => {
    if (interviewType) {
      onHandleInputChange("type", interviewType);
    }
  }, [interviewType]);

  const Addtype = (type) => {
    const exists = interviewType.includes(type.title);

    if (!exists) {
      setInterviewType((prev) => [...prev, type.title]);
    } else {
      const result = interviewType.filter(
        (item) => item !== type.title
      );

      setInterviewType(result);
    }
  };

  const items = [
    { label: "5 Minutes", value: "5" },
    { label: "15 Minutes", value: "15" },
    { label: "30 Minutes", value: "30" },
    { label: "45 Minutes", value: "45" },
    { label: "60 Minutes", value: "60" },
  ];

  return (
    <div className="mt-4 w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:mt-5 sm:p-6">

      {/* Job Position */}
      <div>
        <h2 className="text-sm font-semibold text-gray-800 sm:text-base">
          Job Position
        </h2>

        <Input
          placeholder="Enter Job Position"
          className="mt-2 h-11 text-sm sm:h-12 sm:text-base"
          onChange={(e) =>
            onHandleInputChange("jobPosition", e.target.value)
          }
        />
      </div>


      {/* Job Description */}
      <div className="mt-5 sm:mt-6">
        <h2 className="text-sm font-semibold text-gray-800 sm:text-base">
          Job Description
        </h2>

        <Textarea
          placeholder="Enter Job Description"
          className="
            mt-2
            min-h-[120px]
            resize-none
            text-sm
            leading-6
            sm:min-h-[150px]
            sm:text-base
          "
          onChange={(e) =>
            onHandleInputChange("jobDescription", e.target.value)
          }
        />
      </div>


      {/* Interview Duration */}
      <div className="mt-5 sm:mt-6">
        <h2 className="text-sm font-semibold text-gray-800 sm:text-base">
          Interview Duration
        </h2>

        <Select
          onValueChange={(value) =>
            onHandleInputChange("duration", value)
          }
        >
          <SelectTrigger className="mt-2 h-11 w-full text-sm sm:h-12 sm:text-base">
            <SelectValue placeholder="Select Duration" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              {items.map((item) => (
                <SelectItem
                  key={item.value}
                  value={item.value}
                >
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>


      {/* Interview Type */}
      <div className="mt-5 sm:mt-6">

        <h2 className="text-sm font-semibold text-gray-800 sm:text-base">
          Interview Type
        </h2>

        <div className="mt-2 grid grid-cols-1 gap-2.5 sm:flex sm:flex-wrap sm:gap-3">

          {InterviewType.map((type, index) => {
            const selected = interviewType.includes(type.title);

            return (
              <button
                type="button"
                key={index}
                onClick={() => Addtype(type)}
                className={`
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-xl
                  border
                  px-4
                  py-3
                  text-left
                  text-sm
                  font-medium
                  transition-all
                  duration-200

                  sm:w-auto
                  sm:px-4
                  sm:py-3
                  sm:text-base

                  ${
                    selected
                      ? "border-blue-500 bg-blue-100 text-blue-700"
                      : "border-gray-200 bg-blue-50 text-gray-800 hover:border-blue-300 hover:bg-blue-100"
                  }
                `}
              >
                <type.icon className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />

                <span>{type.title}</span>

                {selected && (
                  <span className="ml-auto text-xs font-semibold text-blue-600 sm:hidden">
                    Selected
                  </span>
                )}
              </button>
            );
          })}

        </div>

        <p className="mt-2 text-xs text-gray-400">
          Select one or more interview types.
        </p>

      </div>


      {/* Generate Questions */}
      <Button
        className="
          mt-6
          flex
          h-11
          w-full
          cursor-pointer
          items-center
          justify-center
          text-sm
          sm:h-12
          sm:text-base
        "
        onClick={() => GoToNext()}
      >
        Generate Questions

        <ArrowRightIcon className="ml-2 h-4 w-4" />
      </Button>

    </div>
  );
};

export default Form;