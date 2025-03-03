import { Amatic_SC } from "next/font/google";
import Image from "next/image";

const amaticFont = Amatic_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function InfoSection({ children, title, imgSrc, imgAlt }) {
  return (
    <div className="relative border-l-2 border-foreground pt-5 px-8 pr-2 sm:px-16 pb-10 ">
      <div
        className={`text-headingColor ${amaticFont.className} font-extrabold text-4xl`}
      >
        {title}
      </div>
      <div className="absolute left-0 -translate-x-1/2 top-5 w-10 h-10">
        <Image
          src={imgSrc}
          // width={50}
          // height={50}
          fill
          // className="object-cover"
          alt={imgAlt}
          sizes="(max-width: 768px) 33vw, (max-width: 1200px) 70vw, 100vw"
        />
        <div className="w-[30px] h-[60px] absolute blur-sm  bg-background -top-3 left-0 -z-10  "></div>
        <div className="w-[50px] h-[50px] absolute top-0 -z-10 left-0 blur-xl bg-gradient-to-l from-foreground to-background"></div>
      </div>
      <div className="mt-5 ">{children}</div>
    </div>
  );
}
