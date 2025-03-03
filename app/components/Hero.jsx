import { Amatic_SC } from "next/font/google";

const amaticFont = Amatic_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Hero() {
  return (
    <div
      id="home"
      className="flex flex-col gap-5 items-center justify-center h-[100%] w-screen"
    >
      <div
        className={`${amaticFont.className} font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-linkHoverColor to-[#000917] to-70%  text-[120px] sm:text-[150px] md:text-[300px]`}
      >
        Raihan
      </div>
      <div
        className={`text-[#859dab] ${amaticFont.className} font-bold text-center text-2xl sm:text-4xl`}
      >
        Can’t think of any eye catchy intro. <br /> Just me, myself and my care
        for the users
      </div>
    </div>
  );
}
