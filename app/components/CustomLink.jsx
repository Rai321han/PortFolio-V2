import Link from "next/link";

export default function CustomLink({ children, ...rest }) {
  return (
    <Link
      {...rest}
      className="group relative bg-black text-textColor text-center"
    >
      <div className="bg-[#9A1616] h-[20px] w-[20px] rotate-45 absolute bottom-0 -z-10 left-1/2 -translate-x-1/2"></div>
      <div>{children}</div>
      <div className="mt-1 bg-gradient-to-l transition duration-300 ease-out from-black from-10% via-[#9A1616] to-black to-90% group-hover:via-[#FF0000] group-hover:from-0% group-hover:to-100% w-full h-[3px]"></div>
    </Link>
  );
}
