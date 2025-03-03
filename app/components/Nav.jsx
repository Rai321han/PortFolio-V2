import Link from "next/link";
import GradientBg from "./GradientBg";
import localFont from "next/font/local";

const OldEnglishFont = localFont({
  name: "oldEnglish",
  src: "../fonts/Old English Text MT.woff",
});

export default function Nav() {
  return (
    <div className="fixed z-50">
      <div className="relative bg-gradient-to-l from-background from-[2%] md:from-10% via-primary to-background to-[98%] md:to-90%  flex items-center justify-center w-screen">
        <div className="absolute h-[2px] w-full top-[100%]  bg-gradient-to-l from-background via-primary to-background "></div>
        <nav
          className={`${OldEnglishFont.className} text-black text-lg md:text-2xl w-screen gap-4 md:gap-10 flex flex-row justify-center items-center py-4`}
        >
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#social">Social</Link>
        </nav>
      </div>
    </div>
  );
}
