/*
|-----------------------------------------
| setting up Experience for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TopWorkeer, November, 2023
|-----------------------------------------
*/

"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Experience = () => {
  return (
    <main className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 gap-12 py-12 bg-green-50 border-t">
      <div className="w-full flex items-center justify-center">
        <Image
          fill
          alt="Design and Development Images"
          src="/design-development.jpg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <div className=" text-slate-900 max-w-7xl w-full">
          <p className="text-[#ff4904] text-uppercase font-extrabold text-xl">
            ABOUT COMPANY
          </p>
          <h2 className="text-uppercase font-extrabold lg:text-4xl md:text-2xl text-xl leading-[1] py-8">
            5+ YEARS WORKING <span className="text-[#ff4904]">EXPERIENCE.</span>
          </h2>
          <p className="text-uppercase font-normal text-xl pr-8">
            There are many variations of passages of Lorem Ipsum available, the
            majority have suffered alteration in some form, by injected humour.
            randomised words which don&apos;t look even slightly believable. It
            uses a dictionary of over 200 Latin words, combined with.
          </p>
          <div className="w-full grid grid-cols-1 md:grid-cols-2">
            <div className="flex w-full items-center gap-1 font-bold mt-4">
              <CheckCircle className="w-8 text-[#ff4904]" />
              <p className="text-extrabold"> Creative Conceptions</p>
            </div>
            <div className="flex w-full items-center gap-1 font-bold mt-4">
              <CheckCircle className="w-8 text-[#ff4904]" />
              <p className="text-extrabold"> Corporate Relationship</p>
            </div>
            <div className="flex w-full items-center gap-1 font-bold mt-4">
              <CheckCircle className="w-8 text-[#ff4904]" />
              <p className="text-extrabold"> Business Solutions</p>
            </div>
            <div className="flex w-full items-center gap-1 font-bold mt-4">
              <CheckCircle className="w-8 text-[#ff4904]" />
              <p className="text-extrabold">Mission & Vission</p>
            </div>
          </div>
          <Button className="bg-[#ff4904] hover:bg-[#f50366] mt-8 px-8 py-6 font-extrabold">
            READ MORE
          </Button>
        </div>
      </div>
    </main>
  );
};
export default Experience;
