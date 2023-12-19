import { Cross2Icon } from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";

export default function WebsitesOpen() {
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
          <div className="bg-zinc-800 bg-opacity-80 h-full rounded-md flex items-center justify-center"></div>
        </div>
      </div>
    </>
  );
}
