/*
|-----------------------------------------
| setting up SingleItemPortfolio for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TopWorkeer, November, 2023
|-----------------------------------------
*/

import Image from "next/image";

const SingleItemPortfolio = ({
  id,
  setToggle,
}: {
  setToggle: any;
  id: number;
}) => {
  return (
    <main>
      <div
        className="mb-4 md:mb-0 cursor-pointer"
        onClick={() =>
          setToggle({
            isOpen: true,
            imgUrl: "",
            id,
            other: {},
          })
        }
      >
        <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <div className="parent-div relative group max-w-xs overflow-hidden bg-cover bg-no-repeat ">
            <Image
              src="/project.png"
              alt="Logo for the website"
              width={100}
              height={100}
              className="w-[400px] h-auto transition ease-in-out group-hover:scale-150 duration-700"
            />
            <div className="content-div absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-blue-400 bg-fixed opacity-0 transition duration-700 ease-in-out hover:opacity-60">
              <div className="w-full h-full flex items-center justify-center font-extrabold text-4xl">
                Project {id}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default SingleItemPortfolio;
