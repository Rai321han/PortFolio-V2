export default function GradientBg({ children, border }) {
  return (
    <div className="relative bg-gradient-to-l from-background from-10% md:from-20% via-primary to-background to-90% md:to-80%  flex items-center justify-center w-screen">
      <div className="absolute h-[2px] w-full top-[100%]  bg-gradient-to-l from-background via-primary to-background "></div>
      {border === "top-bottom" && (
        <div className="absolute h-[2px] w-full top-0  bg-gradient-to-l from-background from-15% via-primary to-background to-85% "></div>
      )}
      {/* <div className="bg-gradient-to-l blur-3xl  w-[70vw] h-[80%] absolute -z-10 top-1/2"></div> */}
      {children}
    </div>
  );
}
