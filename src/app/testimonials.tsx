/*
|-----------------------------------------
| setting up Testimonials for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TopWorkeer, November, 2023
|-----------------------------------------
*/
import Container from "@/components/common/container";
import { Circle, Minus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  return (
    <main className="py-12 w-full bg-white min-h-screen flex items-center justify-center">
      <Container>
        <div className="w-full flex flex-col">
          <div className="w-full py-12 flex items-center justify-center flex-col">
            <div className="w-full text-center relative">
              <div
                className="absolute w-[300px] top-0 left-[-130px] h-[300px] bg-no-repeat"
                style={{ backgroundImage: `url("/quote-l.png")` }}
              />
              <div
                className="absolute top-0 right-[-230px] w-[300px] h-[300px] bg-no-repeat"
                style={{ backgroundImage: `url("/quote-r.png")` }}
              />
              <div className=" text-slate-900 max-w-7xl w-full">
                <p className="text-[#ff4904] text-uppercase font-extrabold text-xl">
                  TESTIMONIALS
                </p>
                <p className=" text-uppercase font-extrabold text-6xl my-4">
                  CUSTOMER&apos;S AWESOME
                </p>
                <p className="text-[#ff4904] text-uppercase font-extrabold text-5xl">
                  FEEDBACK.
                </p>
              </div>
            </div>
            <Avatar className="w-[140px] h-[140px] mt-12 mb-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-justify max-w-[700px] mt-4">
              There are many variations of passages of Lorem Ipsum available,
              the majority have suffered alteration in some form, by injected
              humour. randomised words which look even slightly believable. It
              uses a dictionary of over 200 Latin words,{" "}
            </p>
            <h2 className="text-2xl mt-4 font-bold">Nirob Aronno</h2>
            <p className="mb-4">Marketing Manager</p>
            <div className="flex text-slate-600 items-center justify-center w-full">
              <Circle className=" cursor-pointer hover:text-[#ff4904] rounded-full" />
              <Minus />

              <Circle className=" hover:text-[#ff4904] rounded-full cursor-pointer" />
              <Minus />
              <Circle className="text-[#ff4904]  rounded-full cursor-pointer" />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};
export default Testimonials;
