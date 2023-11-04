import Image from 'next/image'
import HeaderHome from "./header-home";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center gap-4 flex-col">
      <HeaderHome />
    </main>
  );
}
