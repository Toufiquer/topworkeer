/*
|-----------------------------------------
| setting up Container for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TopWorker, November, 2023
|-----------------------------------------
*/
import { ReactNode } from "react";

const Container = ({
  children,
  className = "",
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <main className={`mx-auto max-w-7xl flex flex-col px-4 ${className}`}>
      {children}
    </main>
  );
};
export default Container;
