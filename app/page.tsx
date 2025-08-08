"use client";

import { useEffect, useState } from "react";
import Clock from "./components/clock";
import Float from "./components/float";
// import Ripple from "./components/newTestRipple";

// import WeatherComponent from "./components/weather";

// import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

import Sidebar from "./components/sidebar";

import Options from "./components/options";
import WeatherComponent from "./components/weather";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Switch,
  Typography,
} from "@mui/material";

import { DotIcon, SunIcon } from "@radix-ui/react-icons";

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

  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "dark" : "light",
      primary: {
        main: "#ccb71b",
      },
      secondary: {
        main: "#f48fb1",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <main className="cursor-none flex min-h-screen justify-center bg-[url('/images/meshgrad.png')] bg-cover px-8">
          <motion.div
            className="fixed z-[2000] mix-blend-difference pointer-events-none  left-0 top-0 w-[32px] h-[32px] rounded-2xl bg-white"
            style={{
              translateX: cursorXSpring,
              translateY: cursorYSpring,
            }}
          />

          <Sidebar />

          <Float />
          <div className="z-10  flex-col font-mono text-sm lg:flex">
            <div className="flex flex-col md:flex-row">
              <div className="text-gray-300 text-2xl pt-10 text-center flex flex-col place-content-between">
                Yehudah Davidson
                <WeatherComponent />
              </div>

              <div className="mx-auto pt-10 ">
                <Clock />
              </div>
              <div className="text-amber-300 text-2xl p-10 text-center">
                Web <span className="text-pink-600">Developer</span>
                <div className="flex text-zinc-300 text-xs items-center">
                  <h2>Toggle Dark Mode:</h2>
                  <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
                </div>
              </div>
            </div>
            <Options />

            <Card
              sx={{
                width: "30%",
                borderRadius: 3,
                padding: 1,
              }}
              className={`bg-opacity-40 backdrop-blur-sm ${
                toggleDarkMode
                  ? "bg-gradient-to-br from-zinc-800/50 to-zinc-700"
                  : "bg-amber-400"
              }`}
            >
              <CardContent>
                <CardMedia
                  sx={{ height: 180, borderRadius: 3 }}
                  image="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
                  title="semaphore"
                />
                <Typography variant="h4" component="div" sx={{ marginTop: 3 }}>
                  Programming Blogs
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  by Semaphore
                </Typography>
                <Typography variant="body1">
                  Checkout the latest blogs on Semaphore. Semaphore provides you
                  the best CI/CD solution for high-performance engineering
                  teams.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </main>
      </ThemeProvider>
    </>
  );
}
