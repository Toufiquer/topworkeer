import { Button } from "@/components/ui/button";

/*
|-----------------------------------------
| setting up HeaderHome for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TopWorkeer, November, 2023
|-----------------------------------------
*/
const HeaderHome = () => {
  return (
    <header className="flex items-center justify-center pl-2 min-h-screen w-full h-full bg-black bg-opacity-40">
      <div className=" text-white max-w-7xl w-full">
        <p className="text-[#ff4904] text-uppercase font-extrabold text-xl">
          BUSINESS SOLUTION
        </p>
        <h2 className="text-uppercase font-extrabold lg:text-[120px] md:text-[80px] text-4xl leading-[1] py-8">
          WE ARE DIGITAL <br /> <span className="text-[#ff4904]"> AGENCY.</span>
        </h2>
        <p className="text-uppercase font-extrabold text-xl">
          There are many variations of passages of Lorem Ipsum available, the
          <br />
          majority have suffered alteration in some form by injected humour.
        </p>
        <Button className="bg-[#ff4904] hover:bg-[#f50366] mt-4 px-8 py-6 font-extrabold">
          DISCOVER MORE
        </Button>
      </div>
    </header>
  );
};
export default HeaderHome;
