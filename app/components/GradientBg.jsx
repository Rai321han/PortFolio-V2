export default function GradientBg({ children, border }) {
  return (
    <div className="relative bg-gradient-to-l from-black from-20% via-[#9A1616] to-black to-80%  flex items-center justify-center w-screen">
      <div className="absolute h-[2px] w-full top-[100%]  bg-gradient-to-l from-black via-[#CD1212] to-black  "></div>
      {border === "top-bottom" && (
        <div className="absolute h-[2px] w-full top-0  bg-gradient-to-l from-black from-15% via-[#CD1212] to-black to-85% "></div>
      )}
      <div className="bg-gradient-to-l blur-lg  w-[70vw] h-[80%] absolute -z-10 top-1/2"></div>
      {children}
    </div>
  );
}
