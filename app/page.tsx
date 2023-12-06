"use client";
import { useEffect, useState } from "react";
import Art from "./components/art";
import Clock from "./components/clock";
import Float from "./components/float";
// import Ripple from "./components/newTestRipple";
import Resume from "./components/resume";
// import WeatherComponent from "./components/weather";
import Websites from "./components/websites";
// import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Home() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
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
  return (
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
        className="fixed z-50 mix-blend-difference pointer-events-none  left-0 top-0 w-[32px] h-[32px] rounded-2xl bg-white"
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
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-10 gap-8 bg-[url('/images/glass4.png')] bg-cover bg-center border border-gray-400 border-opacity-30 shadow-lg place-content-between items-center justify-center rounded-2xl bg-opacity-30 backdrop-blur-sm px-[3.5vw]">
          <Art />

          <Resume />

          <Websites />

          {/* <Ripple /> */}
        </div>
      </div>
    </main>
  );
}
