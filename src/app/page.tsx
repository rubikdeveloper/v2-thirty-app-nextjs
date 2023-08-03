import Image from "next/image";
import { Button } from "@/components/ui/button";
import Messages from "@/components/messages";
import Bubbles from "@/components/bubbles";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <div
        id="baseDiv"
        className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex"
      >
        <Messages />
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 bg-red-500 rounded-lg mb-4"></div>
          <div className="w-48 h-48 bg-blue-500 rounded-lg mb-4"></div>
          <div className="w-48 h-48 bg-green-500 rounded-lg"></div>
        </div>
      </div>

      {/* <div id="fooTer" className="md:flex">
        <div className="md:flex-shrink-0"></div>
        <div className="mt-4 md:mt-0 md:ml-6">
          <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
            Marketing
          </div>
          <a
            href="/get-started"
            className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
          >
            Finding customers for your new business
          </a>
          <p className="mt-2 text-gray-600">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </p>
        </div>
      </div> */}
    </main>
  );
}
