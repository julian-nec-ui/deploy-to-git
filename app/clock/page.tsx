'use client';

import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toUTCString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex font-sans tabular-nums flex-col items-center justify-center h-screen">
      <button
            className="relative inline-flex items-center
              font-sans tabular-nums
            justify-center p-0.5 bg-linear-to-r
            from-cyan-500 to-blue-500 rounded-xl
            focus:ring-4 focus:outline-none focus:ring-blue-300
            dark:focus:ring-blue-800
            dark:text-white hover:text-white
            hover:from-cyan-500 hover:to-blue-500
            "
          >
            <span
              className="relative px-7 py-2.5 transition-all 
              ease-in duration-150 bg-slate-900 
              rounded-xl hover:bg-transparent
              hover:dark:bg-transparent leading-5 font-bold"
            >
              {time || (
                <div className="flex gap-2 items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 text-[#0adefe]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-77"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span className="w-55 ml-2 text-[#ced5f5]">
                    Loading time ...
                  </span>
                </div>
              )}
            </span>
          </button>
    </div>
  );
}