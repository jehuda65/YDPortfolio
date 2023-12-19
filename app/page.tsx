"use client";

import { useEffect, useState } from "react";
import Art from "./components/art";
import Clock from "./components/clock";
import Float from "./components/float";
// import Ripple from "./components/newTestRipple";

// import WeatherComponent from "./components/weather";
import Websites from "./components/websites";
import ArtOpen from "./components/artOpen";
// import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

import * as Dialog from "@radix-ui/react-dialog";
import About from "./components/about";
import AboutOpen from "./components/aboutOpen";
import WebsitesOpen from "./components/websitesOpen";

export default function Home() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 45, stiffness: 900 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: any) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const [artShowing, setArtShowing] = useState(false);

  const handleArtClick = () => {
    setArtShowing(true);
  };

  return (
    <>
      <main className="cursor-none flex min-h-screen justify-center bg-[url('/images/meshgrad.png')] bg-cover px-8">
        {/* <Image
        ref=""
        height="100px"
        width="100px"
        loading=""
        alt=""
        src=""
        srcSet=""
      /> */}
        <motion.div
          className="fixed z-[100] mix-blend-difference pointer-events-none  left-0 top-0 w-[32px] h-[32px] rounded-2xl bg-white"
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
          }}
        />

        <Float />
        <div className="z-10  flex-col font-mono text-sm lg:flex">
          <div className="flex flex-col md:flex-row">
            <div className="text-gray-300 text-2xl pt-10 text-center">
              Yehudah Davidson
            </div>
            <div className="mx-auto pt-10 ">
              {/* <WeatherComponent /> */}
              <Clock />
            </div>
            <div className="text-amber-300 text-2xl p-10 text-center">
              Web <span className="text-pink-600">Developer</span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-list-nested text-zinc-100  my-10 hover:bg-white hover:text-amber-400 rounded-xl hover:bg-opacity-20 absolute opacity-80 top-0 right-7 md:right-0 md:relative"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 my-10 md:gap-8 bg-[url('/images/glass4.png')] bg-cover bg-center border border-gray-400 border-opacity-30 shadow-lg place-content-between items-center justify-center rounded-2xl bg-opacity-30 backdrop-blur-sm px-[3.5vw]">
            <Dialog.Root>
              <Dialog.Trigger className="cursor-none">
                <Art />
              </Dialog.Trigger>
              <Dialog.Portal>
                <ArtOpen />
              </Dialog.Portal>
            </Dialog.Root>

            <Dialog.Root>
              <Dialog.Trigger className="cursor-none">
                <About />
              </Dialog.Trigger>
              <Dialog.Portal>
                <AboutOpen />
              </Dialog.Portal>
            </Dialog.Root>

            <Dialog.Root>
              <Dialog.Trigger className="cursor-none">
                <Websites />
              </Dialog.Trigger>
              <Dialog.Portal>
                <WebsitesOpen />
              </Dialog.Portal>
            </Dialog.Root>

            {/* <Ripple /> */}
          </div>
        </div>
      </main>
    </>
  );
}
