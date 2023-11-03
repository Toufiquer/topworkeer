/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, November, 2023
|-----------------------------------------
*/

"use client";

import { useState } from "react";

const Page = () => {
  const [count, setCount] = useState(0);
  return (
    <main className="flex w-full h-screen items-center justify-center flex-col gap-8 text-6xl">
      <h2>Count Page</h2>
      <div className="flex justify-center gap-8 items-center w-full">
        <button onClick={() => setCount(count - 1)}>-</button>({count})
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </main>
  );
};
export default Page;
