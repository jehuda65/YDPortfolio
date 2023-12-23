import * as Dialog from "@radix-ui/react-dialog";
import Art from "./art";

import About from "./about";
import Websites from "./websites";

export default function Options() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 my-10 md:gap-8 bg-[url('/images/glass4.png')] bg-cover bg-center bg-opacity-30 backdrop-blur-sm border border-gray-400 border-opacity-30 shadow-lg place-content-between items-center justify-center rounded-2xl px-[3.5vw]">
      <Art />
      <About />
      <Websites />

      {/* <Ripple /> */}
    </div>
  );
}
