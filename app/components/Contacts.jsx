import Link from "next/link";
import SectionHead from "./SectionHead";
import { Amarante } from "next/font/google";
const amaranteFont = Amarante({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Contacts() {
  return (
    <div
      id="contacts"
      className="my-10 about flex flex-col px-2 gap-6 items-center justify-center"
    >
      <div className="z-[100]">
        <SectionHead>Contacts</SectionHead>
      </div>
      <div>
        <div
          className={`md:mt-12 pb-12 flex flex-col text-2xl items-center justify-center ${amaranteFont.className}`}
        >
          <div className="flex flex-row items-center">
            <Link
              className="p-3 md:p-5 bg-headingColor rounded-full hover:bg"
              href="https://www.linkedin.com/in/raihan-uddin-6681411b2"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 5 1036 990"
                id="linkedin"
              >
                <path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"></path>
              </svg>
            </Link>
            <Link
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Please+add+a+subject+line!&to=uddinraihan797@gmail.com"
              target="_blank"
              className="py-3 px-10 md:px-5 md:py-5 text-background bg-headingColor rounded-full hover:bg"
            >
              send an email
            </Link>

            <Link
              href="https://github.com/Rai321han"
              target="_blank"
              className="p-3 md:p-5 bg-headingColor rounded-full hover:bg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="25"
                height="25"
                id="github"
              >
                <path d="M27.106 0s-2.101 0-4.235 3.2c-1.056-1.057-4.267-1.067-5.331-1.067-1.068 0-4.277.01-5.334 1.067C10.072 0 7.976 0 7.976 0c-1.141 2.864-.248 4.807-.033 5.333C6.877 6.4 5.806 7.467 5.806 12.8s3.878 8.008 8.538 8.533c-.599.521-1.067 2.133-1.067 3.2-1.197.533-4.528 1.045-6.4-2.133 0 0-1.067-2.133-3.2-2.133 0 0-2.133-.201 0 1.067 0 0 1.067 1.067 2.133 3.2 0 0 1.629 4.456 7.467 3.2.012 1.735 0 4.267 0 4.267h8.528v-7.467c0-.844-.466-2.68-1.067-3.2 4.66-.525 8.533-3.2 8.533-8.533 0-5.333-1.067-6.4-2.133-7.467.217-.527 1.108-2.47-.032-5.334z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
