"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

interface Props {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full lg:w-1/2 px-4 mb-8" onClick={() => setOpen(!open)}>
      <div className="h-full py-12 px-6 sm:px-12 border rounded-3xl">
        <div className="flex">
          <div className="max-w-md pr-10">
            <h4 className="text-2xl">{question}</h4>
          </div>
          <div className="ml-auto self-center">
            <button
              onClick={() => setOpen(!open)}
              className={cn(
                "flex-shrink-0 inline-flex ml-4 items-center justify-center w-12 h-12 text-black hover:text-white border border-black hover:bg-black rounded-full transition duration-150",
                `${open ? "bg-black text-white" : "bg-white text-black"}`
              )}
            >
              <IoIosArrowRoundForward
                className={cn(
                  "w-6 h-auto",
                  `${open ? "rotate-90" : "rotate-0"}`
                )}
              />
            </button>
          </div>
        </div>
        <div
          className={cn(
            "overflow-hidden duration-500",
            `${open ? "h-auto" : "h-0"}`
          )}
        >
          <p className="text-lg text-coolGray-600 mt-6">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
