"use client";

import SectionHead from "./SectionHead";
import { Amarante } from "next/font/google";
import InfoSection from "./InfoSection";
import SkillIcon from "./SkillIcon";
import CustomLink from "./CustomLink";
import Link from "next/link";
import { animate, delay, motion } from "framer-motion";

const amaranteFont = Amarante({
  subsets: ["latin"],
  weight: ["400"],
});

// export const fadeInAnimationWhileView = {
//   initial: {
//     opacity: 0,
//     y: -50,
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.5,
//     },
//   },
// };

export const fadeInAnimationWhileView = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: (customDelay) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: customDelay, // Use custom delay for staggered effect
    },
  }),
};

export default function About() {
  return (
    <div
      id="about"
      className=" flex flex-col mt-10 px-2 gap-6 items-center justify-center"
    >
      <div className="z-[100]">
        <SectionHead>About</SectionHead>
      </div>
      <div
        className={`${amaranteFont.className} mx-auto mt-12 md:my-24 max-w-[600px] text-center text-textColor text-lg md:text-2xl px-4`}
      >
        I build intuitive, high-performance applications with seamless user
        experiences. Always exploring new tech to craft innovative digital
        solutions.
      </div>
      {/* <motion.div
        className="max-w-[800px] px-8 md:px-5"
        variants={fadeInAnimationWhileView}
        initial="initial"
        whileInView="animate"
      >
        <InfoSection
          title="Education"
          imgSrc="/images/education.png"
          imgAlt="education icon"
        >
          <div
            className={` text-textColor text-lg md:text-2xl ${amaranteFont.className}`}
          >
            <p>B.Sc in Information & Communication Engineering,</p>
            <p>Noakhali Science & Technology University</p>
            <p>Dec 2018 - Apr 2024</p>
          </div>
        </InfoSection>
        <InfoSection
          title="Technologies"
          imgSrc="/images/education.png"
          imgAlt="technology icon"
        >
          <div
            className={`mt-4 text-black flex gap-5 flex-row flex-wrap max-w-[400px] ${amaranteFont.className}`}
          >
            <SkillIcon>JS</SkillIcon>
            <SkillIcon>HTML</SkillIcon>
            <SkillIcon>CSS</SkillIcon>
            <SkillIcon>React</SkillIcon>
            <SkillIcon>NextJS</SkillIcon>
            <SkillIcon>Tailwind CSS</SkillIcon>
          </div>
        </InfoSection>
        <InfoSection
          title="Problem Solving"
          imgSrc="/images/education.png"
          imgAlt="technology icon"
        >
          <div
            className={`flex flex-row gap-10 ${amaranteFont.className} text-textColor text-lg md:text-2xl`}
          >
            <CustomLink
              href="https://leetcode.com/u/Raihan_321/"
              target="_blank"
            >
              Leetcode
            </CustomLink>
            <CustomLink
              href="https://www.codewars.com/users/Rai321han"
              target="_blank"
            >
              Codewars
            </CustomLink>
          </div>
        </InfoSection>
        <InfoSection
          title="Resume"
          imgSrc="/images/education.png"
          imgAlt="resume icon"
        >
          <div
            className={`flex flex-row gap-10 ${amaranteFont.className} text-textColor text-lg md:text-2xl`}
          >
            <CustomLink href="/Raihan_Uddin_Resume.pdf" download>
              Download
            </CustomLink>
          </div>
        </InfoSection>
        <InfoSection
          title="Others"
          imgSrc="/images/education.png"
          imgAlt="resume icon"
        >
          <div
            className={` text-textColor text-lg md:text-2xl ${amaranteFont.className}`}
          >
            <p>
              Passed GitHub Foundation Exam by{" "}
              <span className="text-headingColor">GitHub</span>
              <span className="text-headingColor">
                {" "}
                <Link
                  className="underline underline-offset-4 hover:text-[#FF0000]"
                  target="_blank"
                  href="https://www.credly.com/badges/476c0452-9185-49f6-873f-eb4292c4d77f/public_url"
                >
                  (certificate)
                </Link>
              </span>
            </p>
            <p>
              2 x Champion of Logo Design Contest in{" "}
              <span className="text-headingColor">Designhill</span>
            </p>
          </div>
        </InfoSection>
      </motion.div> */}
      <motion.div className="max-w-[800px] pl-8 md:px-5">
        {[
          {
            title: "Education",
            imgSrc: "/images/education.png",
            content: (
              <div
                className={`text-textColor text-lg md:text-2xl ${amaranteFont.className}`}
              >
                <p>B.Sc in Information & Communication Engineering,</p>
                <p>Noakhali Science & Technology University</p>
                <p>Dec 2018 - Apr 2024</p>
              </div>
            ),
          },
          {
            title: "Technologies",
            imgSrc: "/images/education.png",
            content: (
              <div
                className={`mt-4 text-black flex gap-5 flex-row flex-wrap max-w-[400px] ${amaranteFont.className}`}
              >
                <SkillIcon>JS</SkillIcon>
                <SkillIcon>HTML</SkillIcon>
                <SkillIcon>CSS</SkillIcon>
                <SkillIcon>React</SkillIcon>
                <SkillIcon>NextJS</SkillIcon>
                <SkillIcon>Tailwind CSS</SkillIcon>
              </div>
            ),
          },
          {
            title: "Problem Solving",
            imgSrc: "/images/education.png",
            content: (
              <div
                className={`flex flex-row gap-10 ${amaranteFont.className} text-textColor text-lg md:text-2xl`}
              >
                <CustomLink
                  href="https://leetcode.com/u/Raihan_321/"
                  target="_blank"
                >
                  Leetcode
                </CustomLink>
                <CustomLink
                  href="https://www.codewars.com/users/Rai321han"
                  target="_blank"
                >
                  Codewars
                </CustomLink>
              </div>
            ),
          },
          {
            title: "Resume",
            imgSrc: "/images/education.png",
            content: (
              <div
                className={`flex flex-row gap-10 ${amaranteFont.className} text-textColor text-lg md:text-2xl`}
              >
                <CustomLink href="/Raihan_Uddin_Resume.pdf" download>
                  Download
                </CustomLink>
              </div>
            ),
          },
          {
            title: "Others",
            imgSrc: "/images/education.png",
            content: (
              <div
                className={`text-textColor text-lg md:text-2xl ${amaranteFont.className}`}
              >
                <p>
                  Passed GitHub Foundation Exam by{" "}
                  <span className="text-headingColor">GitHub</span>
                  <span className="text-headingColor">
                    {" "}
                    <Link
                      className="underline underline-offset-4 hover:text-linkHoverColor"
                      target="_blank"
                      href="https://www.credly.com/badges/476c0452-9185-49f6-873f-eb4292c4d77f/public_url"
                    >
                      (certificate)
                    </Link>
                  </span>
                </p>
                <p>
                  2 x Champion of Logo Design Contest in{" "}
                  <span className="text-headingColor">Designhill</span>
                </p>
              </div>
            ),
          },
        ].map((section, index) => (
          <motion.div
            key={section.title}
            variants={fadeInAnimationWhileView}
            initial="initial"
            whileInView="animate"
            custom={0.05 * index} // Custom delay based on index
            viewport={{ once: true, amount: 0.8 }}
          >
            <InfoSection
              title={section.title}
              imgSrc={section.imgSrc}
              imgAlt={`${section.title} icon`}
            >
              {section.content}
            </InfoSection>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
