import React, { useState } from "react";

import { Cross2Icon } from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Art = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <div className="z-10 group bg-[url('/images/finkel.jpg')] bg-cover shadow-inner hover:shadow-slate-700 hover:scale-[101%] hover:bg-gray-700 duration-300 shadow-black bg-center bg-blend-soft-light h-[38vh] rounded-3xl mt-6 lg:my-10 border-0 border-amber-500 border-opacity-90 min-w-[300px] active:bg-gray-800">
        <div className="bg-gradient-to-b from-gray-800 rounded-t-3xl group-hover:bg-none">
          <div className=" to-white px-10 py-6 rounded-3xl  ">
            <p className="font-extrabold text-2xl text-white font-['arial'] group-hover:translate-y-[14vh]  duration-300 text-left">
              Art
            </p>
          </div>
        </div>
      </div>
    </Dialog.Trigger>

    <Dialog.Portal>
      <Dialog.Overlay className="cursor-none z-50 bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 bg-gray-800 bg-opacity-40 backdrop-blur-sm" />
      <Dialog.Content className="z-[100] text-white data-[state=open]:animate-contentShow fixed inset-[7%] rounded-lg bg-gradient-to-tr from-amber-400 to-zinc-400  p-1 flex flex-col items-center shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <div className=" rounded-lg z-20 backdrop-blur-lg cursor-none bg-zinc-800/80 h-full w-full">
          <Dialog.Close asChild>
            <button
              className="rounded-full z-50 h-14 w-14 inline-flex border border-zinc-600/30 items-center justify-center hover:text-black hover:bg-amber-400 text-amber-400 duration-300 absolute top-5 right-5 cursor-none"
              aria-label="Close"
            >
              <Cross2Icon height={40} width={40} />
            </button>
          </Dialog.Close>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className=" w-[100%] py-[50px] overflow-hidden cursor-none"
            //   flex justify-center items-center space-x-14 overflow-hidden
          >
            <SwiperSlide className="bg-center bg-cover w-[300px] h-[300px] cursor-none">
              <Image
                src="/images/finkel.jpg"
                alt="Rabbi Finkel"
                width={450}
                height={350}
                className="block h-[85vh] mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide className="bg-center bg-cover w-[300px] h-[300px] cursor-none">
              <Image
                src="/images/buch.jpg"
                alt="anotherPic"
                width={450}
                height={300}
                className="block h-[85vh] mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide className="bg-center bg-cover w-[300px] h-[300px] cursor-none">
              <Image
                src="/images/ouzzan-edited.jpg"
                alt="anotherPic"
                width={390}
                height={300}
                className="block h-[85vh] mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide className="bg-center bg-cover w-[300px] h-[300px] cursor-none">
              <Image
                src="/images/house.jpg"
                alt="anotherPic"
                width={800}
                height={300}
                className="block h-[85vh] mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide className="bg-center bg-cover w-[300px] h-[300px] cursor-none">
              <Image
                src="/images/moshe.jpg"
                alt="anotherPic"
                width={470}
                height={300}
                className="block h-[85vh] mx-auto"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Art;
