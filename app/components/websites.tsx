import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import Image from "next/image";

const Websites = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <div className="group bg-[url('/images/suzi.png')] bg-cover shadow-inner hover:shadow-slate-700 hover:scale-[101%] hover:bg-gray-700 duration-300 shadow-black bg-center bg-blend-soft-light h-[38vh] rounded-3xl mb-6 lg:my-10 border-0 border-amber-500 border-opacity-90 min-w-[300px]  active:bg-gray-800">
        <div className="bg-gradient-to-b from-gray-800 via-gray-500 rounded-t-3xl group-hover:bg-none">
          <div className=" to-white px-10 py-6 rounded-3xl  ">
            <p className="font-extrabold text-2xl text-white font-['arial'] group-hover:translate-y-[14vh] text-left duration-300">
              Websites
            </p>
          </div>
        </div>
      </div>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="cursor-none z-50 bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 bg-gray-800 bg-opacity-40 backdrop-blur-sm" />

      <Dialog.Content className="z-[100] text-white data-[state=open]:animate-contentShow fixed inset-[7%] rounded-lg bg-gradient-to-tr from-amber-400 to-zinc-400  p-1 flex flex-col items-center shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <div className=" rounded-lg z-20  p-1 backdrop-blur-lg cursor-none bg-zinc-800/80 h-full">
          <Dialog.Close asChild>
            <button
              className="rounded-full h-14 w-14 inline-flex border border-zinc-600/30 items-center justify-center hover:text-black hover:bg-amber-400 text-amber-400 duration-300 absolute top-5 right-5 cursor-none"
              aria-label="Close"
            >
              <Cross2Icon height={40} width={40} />
            </button>
          </Dialog.Close>

          <Dialog.Title className="text-amber-300 text-3xl font-extrabold py-10 text-center">
            My Websites
          </Dialog.Title>

          <Dialog.Description className="mt-[10px] mb-5 text-[15px] leading-normal">
            <div className="flex">
              <div className="basis-2/5">
                <a href="https://www.suziwinecoaching.com">
                  <Image
                    src="/images/suzi.png"
                    alt="anotherPic"
                    width={350}
                    height={100}
                    className="block rounded shadow-lg shadow-zinc-800 hover:mix-blend-luminosity duration-1000 mx-auto"
                  />
                </a>
              </div>
              <div className="leading-10 basis-3/5 text-white md:pl-5 md:pr-20">
                This is a website I created for a client of mine. It was built
                in Remix with tailwindcss for styling. I also made user of
                mailerlite&apos;s developer API for integrating email marketing.
              </div>
            </div>
          </Dialog.Description>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Websites;
