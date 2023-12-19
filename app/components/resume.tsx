// import { useState } from "react";
// import Link from "next/link";

// import { a } from "@react-spring/web";

export default function Resume() {
  return (
    <>
      <a
        href="/" /*}resumeCv{*/
        className="group cursor-none bg-[url('/images/cvPic.png')] bg-cover shadow-inner hover:shadow-slate-700 hover:scale-[101%] hover:bg-gray-700 duration-300 shadow-black bg-center bg-blend-soft-light h-[38vh] rounded-2xl my-10 border-0 border-amber-500 border-opacity-90 min-w-[300px] active:bg-gray-800"
      >
        <div className="bg-gradient-to-b from-gray-800 via-gray-500 rounded-t-2xl group-hover:bg-none">
          <div className=" to-white px-10 py-6 rounded-3xl  ">
            <p className="font-extrabold text-2xl text-white font-['arial'] group-hover:translate-y-[14vh]  duration-300">
              About Me
            </p>
            <p className="text-gray-200 font-['arial'] hidden group-hover:block translate-y-[15vh] animate-pulse">
              (Download PDF)
            </p>
          </div>
        </div>
      </a>
    </>
  );
}
