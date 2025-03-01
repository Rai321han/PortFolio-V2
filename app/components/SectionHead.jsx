import { Children } from "react";
import GradientBg from "./GradientBg";
import localFont from "next/font/local";

const OldEnglishFont = localFont({
  name: "oldEnglish",
  src: "../fonts/Old English Text MT.woff",
});
export default function SectionHead({ children }) {
  return (
    <GradientBg border="top-bottom">
      <div
        className={`${OldEnglishFont.className} py-4 md:py-6 text-black text-3xl`}
      >
        {children}
      </div>
    </GradientBg>
  );
}
