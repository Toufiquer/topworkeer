import Image from 'next/image'
import HeaderHome from "./header-home";
import SlackHome from "./slack-home";
import Experience from "./experience";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-start justify-center flex-col">
      <HeaderHome />
      <SlackHome />
      <Experience />
    </main>
  );
}
