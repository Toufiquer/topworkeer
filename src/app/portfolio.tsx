/*
|-----------------------------------------
| setting up Portfolio for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TopWorkeer, November, 2023
|-----------------------------------------
*/

"use client";

import Container from "@/components/common/container";
import SingleItemPortfolio from "./single-item-portfolio";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

const Portfolio = () => {
  const [toggle, setToggle] = useState({
    isOpen: false,
    imgUrl: "",
    id: 1,
    other: {},
  });
  return (
    <main className="w-full flex items-center justify-center bg-white py-12">
      <Container>
        <p className="text-[#ff4904] text-uppercase font-extrabold text-5xl text-center mb-8">
          OUR RECENT PROJECTS
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((curr) => (
            <SingleItemPortfolio setToggle={setToggle} key={curr} id={curr} />
          ))}
          {toggle.isOpen && (
            <div className="fixed w-full h-screen bg-blue-500 top-0 left-0 bg-opacity-60 z-50">
              <div className="w-full h-screen flex items-center justify-center">
                <div className="border h-auto min-w-[300px] max-w-[600px]  w-full bg-slate-50">
                  <div className="w-full flex h-full flex-col p-4">
                    <div className="h-full w-full flex items-center justify-center">
                      <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2">
                        <Image
                          src="/project.png"
                          alt="Logo for the website"
                          width={100}
                          height={100}
                          className="w-[400px] h-auto transition ease-in-out group-hover:scale-150 duration-700"
                        />
                        <div className=" w-full h-auto">
                          <div className="w-full border-b border-black pb-1 flex items-center justify-between">
                            <h2 className="text-2xl w-full">
                              Project {toggle.id}
                            </h2>
                            <div className="w-full flex justify-end">
                              <span
                                className="w-auto justify-end cursor-pointer"
                                onClick={() =>
                                  setToggle({
                                    isOpen: false,
                                    imgUrl: "",
                                    id: 1,
                                    other: {},
                                  })
                                }
                              >
                                <X />
                              </span>
                            </div>
                          </div>

                          <p className="text-sm mt-2 text-justify">
                            Description of the project. Description of the
                            project . Description of the project . Description
                            of the project . Description of the project
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
};
export default Portfolio;
