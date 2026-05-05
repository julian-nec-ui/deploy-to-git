'use client';

import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import { initModals } from 'flowbite';
import { useEffect, useState } from 'react';
import Table from './table/page';
import ReactPlayer from 'react-player';
import YouTube, { YouTubeProps } from 'react-youtube';
import YT, { Player } from '../node_modules/@types/youtube/index.d';
import { ProfileMenu } from '@/components/ProfileMenu';
import DropDown from '@/components/headless-ui/DropDown';
import SelectBasic from '@/components/headless-ui/SelectBasic';

export default function Home() {

  const videos = [
    "mJuz45RXeXY",
    "tVBZq2fq-WA"
  ]

  const [time, setTime] = useState<any | null>(null);

  const [player, setPlayer] = useState<null>(null);

  const options: YouTubeProps['opts'] = {
    height: 390, // or 390
    width: 640, // or 640
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
    setPlayer(event.target);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toUTCString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const notify = (message: string, size: number) =>
    toast(message, { style: { width: size ? size + 'px' : '725px' } });

  useEffect(() => {
    initModals();
  }, []);

  const handlePlay = () => {
    if (player) {
      (player as YT.Player).playVideo();
    }
  };

  const handlePause = () => {
    if (player) {
      (player as YT.Player).pauseVideo();
    }
  };

  const handlePLayFromBeginning = () => {
    if (player) {
      (player as YT.Player).seekTo(0, true);
      (player as YT.Player).playVideo();
    }
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-15 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md mb-8 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{' '}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{' '}
            or the{' '}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{' '}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/2 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-39.5"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
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
        <div
          id="alert-additional-content-1"
          className="p-4 mb-4 mt-7 text-sm text-teal-600 rounded-xl bg-slate-950 border border-teal-800"
          role="alert"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 shrink-0 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="sr-only">Info</span>
              <h3 className="font-medium">This is a info page</h3>
            </div>
          </div>
          <div className="mt-2 mb-4">
            More info about this info alert goes here. This example text is
            going to run a bit longer so that you can see how spacing within an
            alert works with this kind of content.
          </div>

          {/* Modal toggle */}
          <button
            data-modal-target="default-modal"
            data-modal-toggle="default-modal"
            className="relative inline-flex items-center
            justify-center p-0.5 bg-linear-to-r
            from-[#297dc8] to-[#07761f] rounded-xl
            focus:ring-4 focus:outline-none focus:ring-blue-300
            dark:focus:ring-blue-800
            dark:text-white hover:text-white
            hover:from-[#297dc8] hover:to-[#07761f]"
            type="button"
          >
            <span
              className="relative px-4 py-2.5 transition-all 
              ease-in duration-150 bg-slate-900 
              rounded-xl hover:bg-transparent
              hover:dark:bg-transparent leading-5 font-bold"
            >
              Find out more ...
            </span>
          </button>
          {/* Main modal */}
          <div
            id="default-modal"
            tabIndex={-1}
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-2rem)] max-h-full"
          >
            <div className="relative w-full max-w-2xl max-h-full">
              {/* Modal content */}
              <div className="relative bg-[#0d0f0d] border-2 rounded-lg shadow-sm p-4 md:p-6">
                {/* <!-- Modal header --> */}
                <div className="flex items-center justify-between border rounded-lg p-2 md:p-3">
                  <h3 className="text-lg font-medium text-heading">
                    Terms of Service
                  </h3>
                  <button
                    type="button"
                    className="text-[#dd1122] ease-in duration-150 transition-all bg-transparent hover:border-2 rounded-lg text-sm h-7 w-7 ms-auto inline-flex justify-center items-center"
                    data-modal-hide="default-modal"
                  >
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18 17.94 6M18 18 6.06 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* Modal body */}
                <div className="space-y-4 md:space-y-6 py-4 md:py-6">
                  <p className="leading-relaxed text-body">
                    With less than a month to go before the European Union
                    enacts new consumer privacy laws for its citizens, companies
                    around the world are updating their terms of service
                    agreements to comply.
                  </p>
                  <p className="leading-relaxed text-body">
                    The European Union’s General Data Protection Regulation
                    (G.D.P.R.) goes into effect on May 25 and is meant to ensure
                    a common set of data rights in the European Union. It
                    requires organizations to notify users as soon as possible
                    of high-risk data breaches that could personally affect
                    them.
                  </p>
                </div>
                {/* Modal footer */}
                <div className="flex items-center border-t border-default space-x-4 pt-4 md:pt-5">
                  <button
                    data-modal-hide="default-modal"
                    type="button"
                    className="text-[#62e8d0] ease-in duration-150 transition-all bg-transparent hover:border font-bold leading-5 rounded-lg text-md px-4 py-2.5 inline-flex justify-center items-center"
                  >
                    I accept
                  </button>
                  <button
                    data-modal-hide="default-modal"
                    type="button"
                    className="text-[#e30c22] ease-in duration-150 transition-all  hover:border focus:ring-2 shadow-xs font-bold leading-5 rounded-lg text-md px-4 py-2.5 focus:outline-none"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-between border w-full h-full p-6  border-[#15589b] rounded-lg">
          <YouTube
            videoId={videos[0]}
            id="video"
            opts={{ options }}
            onReady={(event) => onPlayerReady(event)}
          />
          <div className="relative flex flex-col gap-2">
            <button
              className="relative bg-[#056EBE] text-white px-4.5 py-1 rounded-lg
               border-b-4 border-[#6790CD]
               transition-all duration-200 ease-in-out 
               active:border-b active:translate-y-1 
               active:shadow-lg hover:bg-[#005EA5]"
              onClick={handlePlay}
            >
              <span className="flex flex-row gap-1 justify-content-center items-center justify-content-evenly">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                  />
                </svg>
                Play
              </span>
            </button>
            <button
              className="relative bg-[#056EBE] text-white px-4.5 py-1 rounded-lg
               border-b-4 border-[#6790CD]
               transition-all duration-200 ease-in-out 
               active:border-b active:translate-y-1 
               active:shadow-lg hover:bg-[#005EA5]"
              onClick={handlePause}
            >
              <span className="flex flex-row gap-1 justify-content-center items-center justify-content-evenly">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                  />
                </svg>
                Pause
              </span>
            </button>
            <button
              className="relative bg-[#056EBE] text-white px-4.5 py-1 rounded-lg
               border-b-4 border-[#6790CD]
               transition-all duration-200 ease-in-out 
               active:border-b active:translate-y-1 
               active:shadow-lg hover:bg-[#005EA5]"
              onClick={handlePLayFromBeginning}
            >
              <span className="flex flex-row gap-1 justify-content-center items-center justify-content-evenly">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
                Replay
              </span>
            </button>
          </div>
          <DropDown />
        </div>
        
      </main>
    </div>
  );
}
