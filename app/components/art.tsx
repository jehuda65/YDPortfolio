export default function Art() {
  return (
    <>
      <div className="group bg-[url('/images/finkel.jpg')] bg-cover shadow-inner hover:bg-gray-700 duration-300 shadow-black bg-center bg-blend-soft-light h-[38vh] rounded-3xl m-10 border-0 border-amber-500 border-opacity-90 min-w-[300px] cursor-pointer active:bg-gray-800">
        <div className="bg-gradient-to-b from-gray-800 rounded-t-3xl group-hover:bg-none">
          <div className=" to-white px-10 py-6 rounded-3xl  ">
            <p className="font-extrabold text-2xl text-white font-['arial'] group-hover:translate-y-[14vh]  duration-300">
              Art
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
