// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

export default function ArtOpen() {
  return (
    <>
      <div className="absolute left-0 top-0 bg-gray-800 bg-opacity-40 backdrop-blur-sm z-50  h-full w-full">
        <Dialog.Close asChild>
          <button
            className="rounded-full h-20 w-20 inline-flex items-center justify-center text-amber-400 hover:text-zinc-200 duration-300 absolute top-2.5 right-6"
            aria-label="Close"
          >
            <Cross2Icon height={40} width={40} />
          </button>
        </Dialog.Close>
        <div className="absolute top-[10%] left-[10%] h-[80vh] w-[80vw] rounded-lg  bg-gradient-to-tr from-amber-400 to-zinc-400 p-1 backdrop-blur-lg">
          <div className="bg-zinc-800 bg-opacity-80 h-full rounded-md flex items-center justify-center">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className=" w-[100%] py-[50px] overflow-hidden"
              //   flex justify-center items-center space-x-14 overflow-hidden
            >
              <SwiperSlide className="bg-center bg-cover w-[300px] h-[300px]">
                <Image
                  src="/images/finkel.jpg"
                  alt="Rabbi Finkel"
                  width={400}
                  height={300}
                  className="block h-[79vh] mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="bg-center bg-cover w-[300px] h-[300px]">
                <Image
                  src="/images/buch.jpg"
                  alt="anotherPic"
                  width={400}
                  height={300}
                  className="block h-[79vh] mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="bg-center bg-cover w-[300px] h-[300px]">
                <Image
                  src="/images/ouzzan-edited.jpg"
                  alt="anotherPic"
                  width={370}
                  height={300}
                  className="block h-[79vh] mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="bg-center bg-cover w-[300px] h-[300px]">
                <Image
                  src="/images/house.jpg"
                  alt="anotherPic"
                  width={800}
                  height={300}
                  className="block h-[79vh] mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="bg-center bg-cover w-[300px] h-[300px]">
                <Image
                  src="/images/moshe.jpg"
                  alt="anotherPic"
                  width={430}
                  height={300}
                  className="block h-[79vh] mx-auto"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
