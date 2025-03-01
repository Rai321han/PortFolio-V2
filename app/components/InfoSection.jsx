import { Amatic_SC } from "next/font/google";
import Image from "next/image";

const amaticFont = Amatic_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function InfoSection({ children, title, imgSrc, imgAlt }) {
  return (
    <div className="relative border-l-2 border-red-800 pt-5 px-16 pb-10 ">
      <div
        className={`text-headingColor ${amaticFont.className} font-extrabold text-4xl`}
      >
        {title}
      </div>
      <div className="absolute left-0 -translate-x-1/2 top-5 ">
        <Image src={imgSrc} width={50} height={50} alt={imgAlt} />
        <div className="w-[60px] h-[60px] absolute blur-sm  bg-black -top-3 left-0 -z-10  "></div>
        <div className="w-[50px] h-[50px] absolute top-0 -z-10 left-0 blur-xl bg-gradient-to-l from-[#D50C10] to-[#3F0005]"></div>
      </div>
      <div className="mt-5 ">{children}</div>
    </div>
  );
}
