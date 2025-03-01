"use client";
import Image from "next/image";
import { Amarante } from "next/font/google";
import CustomLink from "./CustomLink";
import { motion } from "framer-motion";

const amaranteFont = Amarante({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Slide({ project }) {
  return (
    <div
      className={`p-5  ${amaranteFont.className} grid grid-cols-[1fr_2fr] gap-10 text-textColor`}
    >
      <motion.div
        className="-shadow-2xl grid-cols-[1/2] relative "
        initial={{ x: 150, opacity: 0, rotate: 0, scale: 0.5 }}
        // animate={{ x: 0, opacity: 1, rotate: -6 }}
        whileInView={{ x: 0, opacity: 1, rotate: -6, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="-z-20">
          <div className="w-[250px]  overflow-hidden rounded-lg relative group">
            <Image
              className="w-[250px] h-[280px] object-cover group-hover:scale-125 transition-transform ease-in duration-150"
              alt="project image"
              src={project.imgSrc}
            />
            <div className="absolute w-full h-full bg-gradient-to-b from-black from-20% to-[#9a16166c] top-0"></div>
            <div className=" mt-8 absolute top-0 left-1/2 -translate-x-1/2">
              <h2 className="drop-shadow-[2_5px_10px_rgb(0, 0, 0)] text-3xl  text-center text-headingColor font-extrabold">
                {project.title}
              </h2>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="relative bg-black grid-cols-[2/3]">
        <div className="absolute w-1  left-0 -translate-x-1/2 bg-gradient-to-b  from-black from-10% via-[#9A1616] to-black to-90% group-hover:via-[#FF0000] h-full"></div>
        <div className="absolute -bottom-10 -left-5 -translate-x-1/2 bg-[#FF0000] -translate-y-1/2 -z-10 w-[10px] h-[50%] blur-xl"></div>
        <div className="p-5 pl-10 flex flex-col  md:grid gap-10 md:grid-rows-[minmax(150px,2.5fr)_1fr] md:grid-cols-[1fr_2fr]">
          <div className="md:grid-rows-[1/2] md:grid-cols-[1/2]">
            <div className="text-headingColor mb-2">Title</div>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {project.title}
            </motion.div>
          </div>
          <div className=" md:grid-rows-[1/2] md:grid-cols-[2/3]">
            <div className="text-headingColor mb-2">Description</div>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="max-w-[350px]"
            >
              {project.description}
            </motion.div>
          </div>
          <div className="md:grid-cols-[1/2] md:grid-rows-[2/3]">
            <CustomLink href="#" target="_blank">
              Details
            </CustomLink>
          </div>
        </div>
      </div>
    </div>
  );
}
