import Art from "./components/art";
import Clock from "./components/clock";
import Float from "./components/float";
import Resume from "./components/resume";
import Websites from "./components/websites";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center bg-[url('/images/meshgrad.png')] bg-cover">
      {/* <Image
        ref=""
        height="100px"
        width="100px"
        loading=""
        alt=""
        src=""
        srcSet=""
      /> */}
      <Float />
      <div className="z-10  flex-col font-mono text-sm lg:flex">
        <div className="flex">
          <div className="text-gray-300 text-2xl pt-10 ">Yehudah Davidson</div>
          <div className="mx-auto pt-10 ">
            <Clock />
          </div>
          <div className="text-amber-300 text-2xl p-10 ">
            Web <span className="text-pink-600">Developer</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-10 bg-[url('/images/glass4.png')] bg-cover bg-center border border-gray-400 border-opacity-30 shadow-lg place-content-between items-center rounded-2xl bg-opacity-30 backdrop-blur-sm">
          <Art />

          <Resume />

          <Websites />
        </div>
      </div>
    </main>
  );
}
