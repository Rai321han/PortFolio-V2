import Link from "next/link";

export default function CustomLink({ children, ...rest }) {
  return (
    <Link
      {...rest}
      className="group relative bg-background text-textColor text-center"
    >
      <div className="bg-foreground h-[20px] w-[20px] rotate-45 absolute bottom-0 -z-10 left-1/2 -translate-x-1/2"></div>
      <div>{children}</div>
      <div className="mt-1 bg-gradient-to-l transition duration-300 ease-out from-background from-10% via-foreground to-background to-90% group-hover:via-[#C1ECF8] group-hover:from-0% group-hover:to-100% w-full h-[3px]"></div>
    </Link>
  );
}
