
import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(null);

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
              {time}
            </span>
          </button>
    </div>
  );
}