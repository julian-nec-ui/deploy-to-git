'use client'

import { ToastContainer, toast } from 'react-toastify';
import { initModals } from 'flowbite';
import { useEffect, useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { Player } from '../node_modules/@types/youtube/index.d';
import DropDown from '@/components/headless-ui/DropDown';
import './globals.css';

export default function Home() {
  
  const videos = ['7v_Yf8CZwaw'];

  // const [time, setTime] = useState<string | null>(null);

  const [player, setPlayer] = useState<Player | null>(null);

  const options: YouTubeProps['opts'] = {
    height: 390, // or 390
    width: 740, // or 640
    playerVars: {
      autoplay: 1,
      controls: 1,
      fs: 1
    }
  }

  const onPlayerReady: YouTubeProps['onReady'] = event => {
    event.target.pauseVideo()
    setPlayer(event.target)
  }

  const notify = (message: string, size: number) => {
    toast(message, { style: { width: size ? size + 'px' : '725px' } });
  }

  useEffect(() => {
    initModals()
  }, [])

  const handlePlay = () => {
    (player as YT.Player)?.playVideo()
  }

  const handleCloseVideo = () => {
    (player as YT.Player)?.stopVideo();
  }

  const handlePause = () => {
    player?.pauseVideo()
  }

  const handlePLayFromBeginning = () => {
    player?.seekTo(0, true)
    player?.playVideo()
  }

  return (
    <div className='flex flex-row flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <main className='flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start'>
        <div className='flex px-4 py-2 shadow-xl border-cyan-400 flex-col border-l rounded-lg border-r items-center text-center sm:items-start sm:text-left'>
          <h1 className='text-3xl font-semibold leading-15 tracking-tight text-black dark:text-zinc-50'>
            Hello and welcome Adi and Vlad Moldovan !
          </h1>
          <p className='mb-3 text-lg leading-6 text-[#2e312b] dark:text-[#cee4eb]'>
            I&apos;ve heard, from secret and reliable sources, that you guys want to experiment with {' '}
            <b className='hover:text-[#41e9f9] text-[#09b1d3] cursor-default'>Open Source Linux</b> on VMware Fusion.
            Nothing is more delightful than this. The link below will take you to VMware download page. Scroll down a little and
            click the download button for <code className='font-sans tabular-nums hover:text-[#41e9f9] text-[#09b1d3] cursor-default'>
              VMware Workstation Pro for PC</code> .
            From there, follow the instructions and you are ready to go.
            I recommend that you watch the YouTube video before proceeding with
            the actual installation. Video is available on the modal page below.
            Click the <code className='font-sans tabular-nums hover:text-[#41e9f9] text-[#09b1d3] cursor-default'>
              Good luck button
              </code> to watch the video.
          </p>
          <a
            href='https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion'
            className='font-medium flex flex-row items-center gap-2 text-[#2e312b] hover:text-[#737e5d] dark:text-[#05bcf4] dark:hover:text-[#80d4ed]'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path fill="#0ea5e9" d="M12.654 9.988q.818.26 1.07 1.113v3.18h2.424v-.004h.373v-.006h.035V8.875q-.417-1.407-1.766-1.838H3.943q-1.35.43-1.766 1.838v11.343Q2.594 21.626 3.98 22h10.77q1.388-.374 1.805-1.782V17.26h-2.831v.712q-.253.853-1.093 1.08H6.104q-.84-.226-1.093-1.08V11.1q.252-.854 1.07-1.113z" /><path fill="#0ea5e9" d="M21.824 3.838Q21.407 2.43 20.057 2H9.212q-1.35.43-1.766 1.838v2.885h2.83v-.66q.254-.854 1.072-1.112h6.572q.818.258 1.07 1.112v6.873q-.252.853-1.093 1.08H11.37q-.84-.227-1.093-1.08V9.673H7.445v5.508q.418 1.407 1.804 1.782h10.77q1.388-.375 1.805-1.783z" />
            </svg>
            vmware download link
          </a>
        </div>

        <div
          id='alert-additional-content-1'
          className='p-4 mb-4 mt-7 text-sm text-teal-600 rounded-xl bg-slate-950 border border-teal-800'
          role='alert'
        >
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <svg
                className='w-5 h-5 shrink-0 me-2'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                />
              </svg>
              <span className='sr-only'>Info</span>
              <h3 className='font-medium flex flex-row gap-1'>This is a info page on how to install
                <svg className="ml-1 hover:animate-pulse ease-in-out" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path fill="#0ea5e9" d="M12.654 9.988q.818.26 1.07 1.113v3.18h2.424v-.004h.373v-.006h.035V8.875q-.417-1.407-1.766-1.838H3.943q-1.35.43-1.766 1.838v11.343Q2.594 21.626 3.98 22h10.77q1.388-.374 1.805-1.782V17.26h-2.831v.712q-.253.853-1.093 1.08H6.104q-.84-.226-1.093-1.08V11.1q.252-.854 1.07-1.113z" /><path fill="#0ea5e9" d="M21.824 3.838Q21.407 2.43 20.057 2H9.212q-1.35.43-1.766 1.838v2.885h2.83v-.66q.254-.854 1.072-1.112h6.572q.818.258 1.07 1.112v6.873q-.252.853-1.093 1.08H11.37q-.84-.227-1.093-1.08V9.673H7.445v5.508q.418 1.407 1.804 1.782h10.77q1.388-.375 1.805-1.783z" />
                </svg>
                <b className='hover:text-[#93e0f7] text-[#0ea5e9] hover:animate-pulse ease-in-out cursor-default'>
                  VMware
                </b></h3>
            </div>
          </div>
          <div className='min-w-152 flex-auto mt-2 mb-4'>
            Please use the good luck button to start the tutorial .
          </div>

          {/* Modal toggle */}
          <button
            data-modal-target='default-modal'
            data-modal-toggle='default-modal'
            className='relative inline-flex items-center
            justify-center p-0.5 bg-linear-to-r
            from-[#297dc8] to-[#07761f] rounded-xl
            focus:ring-4 focus:outline-none focus:ring-blue-300
            dark:focus:ring-blue-800
            dark:text-white hover:text-white
            hover:from-[#297dc8] hover:to-[#07761f]'
            type='button'
          >
            <span
              className='relative flex flex-row items-center justify-between  gap-4 px-4 py-2.5 transition-all 
              ease-in duration-150 bg-slate-900 
              rounded-xl hover:bg-transparent
              hover:dark:bg-transparent leading-5 font-bold'
            >
              Good luck button
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 bounce-right">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>

            </span>
          </button>
          {/* Main modal */}
          <div
            id='default-modal'
            data-modal-backdrop='static'
            tabIndex={-1}
            aria-hidden='true'
            className='hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-2rem)] max-h-full'
          >
            <div className='relative w-full max-w-2xl max-h-full'>
              {/* Modal content */}
              <div className='relative bg-[#0d0f0d] border-2 rounded-lg shadow-sm p-4 md:p-6'>
                {/* <!-- Modal header --> */}
                <div className='flex items-center justify-between border rounded-lg p-2 md:p-3'>
                  <h3 className='text-lg font-medium text-heading'>
                    Termeni de folosire
                  </h3>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                  </svg>

                  <button
                    type='button'
                    className='text-[#dd1122] ease-in duration-200 
                    transition-all bg-transparent hover:border-2 
                    rounded-lg text-sm h-7 w-7 
                    ms-auto inline-flex justify-center items-center'
                    data-modal-hide='default-modal'
                    onClick={handleCloseVideo}
                  >
                    <svg
                      className='w-5 h-5'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M6 18 17.94 6M18 18 6.06 6'
                      />
                    </svg>
                    <span className='sr-only'>Close modal</span>
                  </button>
                </div>
                {/* Modal body */}
                <div className='space-y-4 md:space-y-6 py-4 md:py-6'>
                  <p className='leading-relaxed text-md'>
                    Acum vorbim romaneste. Vlad, te rog sa fii tu actorul principal in instalarea masinii virtuale pentru Windows PC.
                    Tata e numai asistent la catedra. Baga in marșalier ca sa mearga inainte {`:))`} .
                    Urmariti video si urmati instructiunile. E nevoie sa folositi o adresa de email valida pentru
                    ca veti primi un cod de verificare. O sa fiti intrebati de date personale, intoduceti totul fictiv.
                    Poate tara de origine sa puneti Romania, atat. Ei cer datele astea pentru statistici. Eu am folosit 
                    VMware si merge struna. Nici o problema. Dupa asta trecem la pasul urmator. 
                    Pentru a descarca aplicatia folositi link-ul meu de pe pagina anterioara.
                    Pentru moment, sa ne asiguram ca aplicatia s-a instalat cu succes si ca o puteti deschide fara erori. Succes !

                  </p>
                  <div className='relative flex items-center justify-between border w-full h-full p-6  border-[#15589b] rounded-lg'>
                    <YouTube
                      videoId={videos[0]}
                      id='video'
                      opts={{ options }}
                      onReady={event => onPlayerReady(event)}
                    />
                    <div className='relative flex flex-col gap-2'>
                      <button
                        className='relative bg-[#056EBE] 
                        px-4.5 py-1 rounded-lg text-white
                        border-b-4 border-[#6790CD]
                        transition-all duration-200 ease-in-out 
                        active:border-b active:translate-y-1 
                        active:shadow-lg hover:bg-[#005EA5]'
                        onClick={handlePlay}
                      >
                        <span className='flex flex-row gap-1 justify-content-center items-center justify-content-evenly'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='size-4.5'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
                            />
                          </svg>
                          Play
                        </span>
                      </button>
                      <button
                        className='relative bg-[#056EBE] text-white px-4.5 py-1 rounded-lg
               border-b-4 border-[#6790CD]
               transition-all duration-200 ease-in-out 
               active:border-b active:translate-y-1 
               active:shadow-lg hover:bg-[#005EA5]'
                        onClick={handlePause}
                      >
                        <span className='flex flex-row gap-1 justify-content-center items-center justify-content-evenly'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='size-5'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M15.75 5.25v13.5m-7.5-13.5v13.5'
                            />
                          </svg>
                          Pause
                        </span>
                      </button>
                      <button
                        className='relative bg-[#056EBE] text-white px-4.5 py-1 rounded-lg
               border-b-4 border-[#6790CD]
               transition-all duration-200 ease-in-out 
               active:border-b active:translate-y-1 
               active:shadow-lg hover:bg-[#005EA5]'
                        onClick={handlePLayFromBeginning}
                      >
                        <span className='flex flex-row gap-1 justify-content-center items-center justify-content-evenly'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='size-4'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99'
                            />
                          </svg>
                          Replay
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Modal footer */}
                <div className="flex items-center border-t border-default space-x-4 pt-4 md:pt-5">
                 {/* <button
                    data-modal-hide="default-modal"
                    type="button"
                    className="text-[#62e8d0] ease-in duration-150 transition-all bg-transparent hover:border font-bold leading-5 rounded-lg text-md px-4 py-2.5 inline-flex justify-center items-center"
                  >
                    I accept
                  </button> */}
                 <button
                    data-modal-hide="default-modal"
                    type="button"
                    className="text-[#e30c22] ease-in duration-150 transition-all  hover:border focus:ring-2 shadow-xs font-bold leading-5 rounded-lg text-md px-4 py-2.5 focus:outline-none"
                    onClick={handleCloseVideo}
                  >
                    Inchide
                  </button> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <DropDown />
      </main>
    </div>
  )
}
