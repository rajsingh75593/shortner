import InputBox from "@/components/InputBox";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <div className="flex flex-col w-10/12 min-h-full m-auto mt-4 my-2">
        <div className="flex items-center justify-center py-2 ">
          <p className="text-zinc-700 text-5xl font-semibold h-16 m-auto p-2 rounded ">Create Short URLs</p>
        </div>
        <div className="flex items-center justify-center py-2 ">
          <p className="font-light text-lg m-auto p-2 bg-none text-black rounded text-center "><span className="text-green-400">SHORTNER</span> is the World's Shortest Link Shortener service to track,<br />brand, and share short URLs.</p>
        </div>
        <div className=" flex items-center justify-center my-3 text-white">
          <button className='list-none mx-4 px-4 py-2.5 rounded-md bg-orange-600 hover:bg-orange-700 text-xl font-bold focus:outline-none delay-100'>Get Started</button>
        </div>
        <div className=" flex items-center justify-center my-3">
          <InputBox/>
        </div>
      </div>
    </>
  );
}
