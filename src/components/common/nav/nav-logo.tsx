/*
|-----------------------------------------
| setting up NavLogo for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TopWorkeer, November, 2023
|-----------------------------------------
*/
import Link from "next/link";
import navData from "./data";

const { baseInfo } = navData || {};

const NavLogo = () => {
  return (
    <Link href="/" className="flex gap-1 items-center justify-start text-2xl">
      <span className="text-orange-500 font-extrabold">
        {baseInfo.firstName}
      </span>{" "}
      {baseInfo.lastName}
    </Link>
  );
};
export default NavLogo;
