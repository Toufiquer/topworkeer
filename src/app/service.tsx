/*
|-----------------------------------------
| setting up Service for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TopWorkeer, November, 2023
|-----------------------------------------
*/
import Container from "@/components/common/container";
import { PencilRuler } from "lucide-react";

const Item = () => (
  <div className="group relative mt-4 w-full  text-white rounded-lg bg-slate-900 bg-opacity-50 px-2">
    <div className="w-full flex items-center justify-center">
      <div className="flex gap-4 items-center">
        <PencilRuler className="h-16 w-16 rounded-full p-4 text-4xl group-hover:bg-[#ff4904] cursor-pointer hover:text-white" />
        <div className="w-full py-4">
          <h2 className="text-xl font-semibold hover:text-[#ff4904] cursor-pointer">
            CREATE CONTENT WRITING
          </h2>
          <p className="text-sm mt-1 text-slate-200">
            There are many variations of passages.by injected humour. randomised
            words which don&apos;t look even slightly believable.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Service = () => {
  return (
    <main className="w-full py-12 backdrop-blur">
      <Container>
        <div className="py-12">
          <main className="w-full py-12 gap-x-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </main>
        </div>
      </Container>
    </main>
  );
};
export default Service;
