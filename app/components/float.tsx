import Image from "next/image";

export default function Float() {
  return (
    <>
      <Image
        width="300"
        height="300"
        className="h-32 w-auto fixed rotate-6 animate-[fly_15s_linear_infinite]"
        src="/images/logos/HtmlLogo.png"
        alt=""
      />
      <Image
        width={80}
        height={200}
        className="h-20 w-auto fixed rotate-6 animate-[fly2_15s_linear_infinite]"
        src="/images/logos/javaScriptLogo-01.png"
        alt=""
      />
      <Image
        width={80}
        height={200}
        className="h-44 w-auto fixed rotate-6 animate-[fly3_15s_linear_infinite]"
        src="/images/logos/react.png"
        alt=""
      />
      {/* <img
        className="h-44 fixed rotate-6 animate-[fly3_15s_linear_infinite]"
        src="/images/logos/react.png"
        alt=""
      /> */}
    </>
  );
}
