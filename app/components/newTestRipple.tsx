export default function Ripple() {
  return (
    <>
      <div>
        <h3 className="text-center">
          See what happens when you press the buttons!
        </h3>

        <div className="flex place-content-around ">
          <a
            className="inline-block px-9 py-3 text-white overflow-hidden bg-gradient-to-r from-red-500 to-rose-900 border-rose-200 rounded-[40px] tracking-[2px] hover:mix-blend-exclusion"
            href="/"
          >
            Button
          </a>
          <a
            className="inline-block px-9 py-3 text-white overflow-hidden bg-gradient-to-r from-red-500 to-rose-900 border-rose-200 rounded-[40px] tracking-[2px] "
            href="/"
          >
            Button
          </a>
        </div>
      </div>
    </>
  );
}
