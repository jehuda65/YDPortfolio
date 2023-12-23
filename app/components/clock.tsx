"use client";
import React, { useState, useEffect } from "react";

interface ClockProps {}

const Clock: React.FC<ClockProps> = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours() * 30;
      const minutes = now.getMinutes() * 6;
      const seconds = now.getSeconds() * 6;

      setTime({ hours, minutes, seconds });
    };

    const intervalId = setInterval(updateClock, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div
      className="clock bg-gray-900 bg-opacity-20 w-[130px] h-[130px] md:w-[22vw] md:h-[22vw] max-w-[250px] max-h-[250px] flex justify-center items-center bg-[url('/images/clock.png')] 
    bg-cover border-2 border-[#3e3311] rounded-[50%] before:content-[''] before:absolute before:w-[15px] before:h-[15px] before:bg-gray-200 before:shadow before:shadow-gray-700 before:rounded-full before:z-[40]"
    >
      <div className="hour absolute">
        <div
          className="hr w-[120px] h-[12vw] max-h-[130px] flex justify-center rounded-[50%] before:content-[''] before:absolute before:w-[5px] before:h-[6.5vw] before:max-h-[60px] before:bg-[#ff105e] before:z-10 before:rounded-t-2xl before:shadow-pink-500 before:shadow"
          id="hr"
          style={{ transform: `rotateZ(${time.hours + time.minutes / 12}deg)` }}
        ></div>
      </div>
      <div className="min absolute">
        <div
          className="mn h-[15vw] max-h-[150px] flex justify-center rounded-[30%] before:content-[''] before:absolute before:w-[3px] before:h-[8vw] before:max-h-[80px] before:bg-[#afafaf] before:z-[11] before:rounded-t-full before:shadow-white before:shadow-md"
          id="mn"
          style={{ transform: `rotateZ(${time.minutes}deg)` }}
        ></div>
      </div>
      <div className="sec absolute">
        <div
          className="sc w-[100px] h-[14vw] flex justify-center rounded-[50%] before:content-[''] before:absolute before:w-[2px] before:h-[7vw] before:bg-[#fff] before:z-[12] before:rounded-t "
          id="sc"
          style={{ transform: `rotateZ(${time.seconds}deg)` }}
        ></div>
      </div>
    </div>
  );
};

export default Clock;
