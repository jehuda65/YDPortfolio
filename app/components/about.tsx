// import { useState } from "react";
// import Link from "next/link";

// import { a } from "@react-spring/web";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";

const About = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <div className="group cursor-none bg-[url('/images/cvPic.png')] bg-cover shadow-inner hover:shadow-slate-700 hover:scale-[101%] hover:bg-gray-700 duration-300 shadow-black bg-center bg-blend-soft-light h-[38vh] w-1/3 rounded-2xl my-10 border-0 border-amber-500 border-opacity-90 min-w-[300px] active:bg-gray-800">
        <div className="bg-gradient-to-b from-gray-800 via-gray-500 rounded-t-2xl group-hover:bg-none">
          <div className=" to-white px-10 py-6 rounded-3xl ">
            <p className="font-extrabold text-2xl text-white font-['arial'] group-hover:translate-y-[14vh] text-left duration-300">
              About Me
            </p>
          </div>
        </div>
      </div>
    </Dialog.Trigger>

    <Dialog.Portal>
      <Dialog.Overlay className="cursor-none z-50 bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 bg-gray-800 bg-opacity-40 backdrop-blur-sm" />
      <Dialog.Content className="z-[100] text-white data-[state=open]:animate-contentShow fixed inset-[7%] rounded-lg bg-gradient-to-tr from-amber-400 to-zinc-400  p-1 flex flex-col items-center shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <div className=" rounded-lg z-20  p-1 backdrop-blur-lg cursor-none bg-zinc-800/80 h-full w-full">
          <Dialog.Close asChild>
            <button
              className="rounded-full h-14 w-14 inline-flex border border-zinc-600/30 items-center justify-center hover:text-black hover:bg-amber-400 text-amber-400 duration-300 absolute top-5 right-5 cursor-none"
              aria-label="Close"
            >
              <Cross2Icon height={40} width={40} />
            </button>
          </Dialog.Close>

          <Dialog.Title className="text-amber-300 text-3xl font-extrabold py-10 text-center">
            Yehudah Davidson - Web developer
          </Dialog.Title>
          <Dialog.Description className="mt-[10px] mb-5 text-[15px] leading-normal">
            <div className="flex">
              <div className="basis-2/5 grid">
                <Image
                  src="/images/logos/react.png"
                  alt="anotherPic"
                  width={100}
                  height={100}
                  className="block  mx-auto"
                />
                <Image
                  src="/images/logos/javaScriptLogo-01.png"
                  alt="anotherPic"
                  width={100}
                  height={100}
                  className="block  mx-auto"
                />
              </div>
              <div className="leading-10 basis-3/5 text-white md:pl-5 md:pr-20">
                <p>
                  Hi, I&apos;m Yehudah, an aspiring Web Developer looking to
                  expand my skillset and learn through doing.
                </p>
              </div>
            </div>
          </Dialog.Description>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default About;

{
  /*HERE I WANTED AN ANIMATED SCROLL BAR: 
              <div
                id="progressbar"
                className="fixed top-0 right-0 w-2.5 bg-gradient-to-t from-[#008aff] to-[#00ffe7] animate-[animateBar_5s_linear_infinite] 
                before:content-[''] before:absolute before:top-0 before:right-0 before:w-full before:height-full before:bg-gradient-to-t before:from-[#008aff] before:to-[#00ffe7] before:blur-[30px]
                after:content-[''] after:absolute after:top-0 after:right-0 after:w-full after:h-full after:bg-gradient-to-t after:from-['#008aff'] after:to-['#00ffe7'] after:blur-[30px]"
              ></div> */
}
{
  /* <div
                id="scrollPath"
                className="fixed top-0 right-0 w-2.5 h-full bg-white/50 rounded-r-lg"
              ></div> */
}
{
  /* {let progress = document.getElementById('progressbar');
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    window.onscroll = function(){
        let progressHeight = (window.pageYOffset / totalHeight) *100;
        progress.style.height = progressHeight + "%";
    }} */
}
