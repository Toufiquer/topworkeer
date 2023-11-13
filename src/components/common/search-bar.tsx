/*|-----------------------------------------| setting up search bar for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/

"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RxCross2 } from "react-icons/rx";
import { GoSearch } from "react-icons/go";

const SearchBar = ({
  className = "",
  parentWidth = "",
}: {
  className?: string | null;
  parentWidth?: string | null;
}) => {
  const [text, setText] = useState("");
  const handleText = (e: any) => {
    setText(e.target.value);
  };

  return (
    <div
      className={`flex items-center space-x-2 text-[.85rem] ${
        parentWidth ?? "w-full max-w-sm "
      } `}
    >
      <div className="relative w-full">
        <span className="absolute left-[10px] top-[12px]">
          {" "}
          <GoSearch />{" "}
        </span>
        {text !== "" && (
          <span
            onClick={() => setText("")}
            className="absolute right-[10px] top-[12px] cursor-pointer"
          >
            <RxCross2 />
          </span>
        )}
        <Input
          onChange={handleText}
          type="text"
          value={text || ""}
          placeholder="Search"
          className={` min-w-[500px] pl-[38px] ${className}`}
        />
      </div>
      {text !== "" && (
        <Button variant="outline" type="submit">
          Search
        </Button>
      )}
    </div>
  );
};
export default SearchBar;
