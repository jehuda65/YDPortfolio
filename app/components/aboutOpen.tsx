import { Cross2Icon } from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";

export default function AboutOpen() {
  return (
    <>
      <div className="absolute left-0 top-0 bg-gray-800 bg-opacity-40 backdrop-blur-sm z-10  h-full w-full">
        <Dialog.Close asChild>
          <button
            className="rounded-full h-20 w-20 inline-flex items-center justify-center text-amber-400 hover:text-zinc-200 duration-300 absolute top-2.5 right-6"
            aria-label="Close"
          >
            <Cross2Icon height={40} width={40} />
          </button>
        </Dialog.Close>

        <Dialog.Portal>
          <div className="absolute top-[10%] left-[10%] h-[80vh] w-[80vw] rounded-lg z-20 bg-gradient-to-tr from-amber-400 to-zinc-400 p-1 backdrop-blur-lg">
            <div className="bg-zinc-800 text-white bg-opacity-80 h-full rounded-md flex flex-col items-center pt-10 overflow-clip">
              {/*HERE I WANTED AN ANIMATED SCROLL BAR: 
              <div
                id="progressbar"
                className="fixed top-0 right-0 w-2.5 bg-gradient-to-t from-[#008aff] to-[#00ffe7] animate-[animateBar_5s_linear_infinite] 
                before:content-[''] before:absolute before:top-0 before:right-0 before:w-full before:height-full before:bg-gradient-to-t before:from-[#008aff] before:to-[#00ffe7] before:blur-[30px]
                after:content-[''] after:absolute after:top-0 after:right-0 after:w-full after:h-full after:bg-gradient-to-t after:from-['#008aff'] after:to-['#00ffe7'] after:blur-[30px]"
              ></div> */}
              {/* <div
                id="scrollPath"
                className="fixed top-0 right-0 w-2.5 h-full bg-white/50 rounded-r-lg"
              ></div> */}
              {/* {let progress = document.getElementById('progressbar');
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    window.onscroll = function(){
        let progressHeight = (window.pageYOffset / totalHeight) *100;
        progress.style.height = progressHeight + "%";
    }} */}
              <div>
                <p className="text-amber-300 text-3xl font-extrabold pb-10">
                  Yehudah Davidson - Web Developer
                </p>
              </div>
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
                <div className="leading-10 basis-3/5">
                  <p>
                    Hi, I&apos;m Yehudah, an aspiring Web Developer looking to
                    expand my skillset and learn through doing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Portal>
      </div>
    </>
  );
}
