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
      <GradientBg>
        <nav
          className={`${OldEnglishFont.className} text-black text-lg md:text-2xl w-screen gap-10 flex flex-row justify-center items-center py-4`}
        >
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#social">Social</Link>
        </nav>
      </GradientBg>
    </div>
  );
}
