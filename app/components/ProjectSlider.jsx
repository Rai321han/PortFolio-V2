"use client";

import { useState } from "react";
import Slide from "./Slide";

export default function ProjectSlider({ projects }) {
  const [projectNo, setProjectNo] = useState(0);

  function handleNextProject() {
    let totalProjects = projects.length;
    let nextNo = projectNo + 1 > totalProjects - 1 ? 0 : projectNo + 1;
    setProjectNo(nextNo);
  }

  function handlePrevProject() {
    let totalProjects = projects.length;
    let prevNo = projectNo - 1 < 0 ? totalProjects - 1 : projectNo - 1;
    setProjectNo(prevNo);
  }
  return (
    <div className="relative flex flex-col items-center">
      <Slide project={projects[projectNo]} key={projectNo} />

      <button
        className="text-textColor p-1 opacity-25 rounded-lg absolute top-[30%] md:top-1/2 -translate-y-1/2 left-5 "
        onClick={handlePrevProject}
      >
        <svg
          width="40"
          height="55"
          viewBox="0 0 40 55"
          fill="none"
          className="fill-primary"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M29.814 17.9849C35.069 17.9849 39.3291 22.245 39.3291 27.5C39.3291 32.7551 35.069 37.0151 29.814 37.0151C24.5589 37.0151 20.2989 32.7551 20.2989 27.5C20.2989 22.245 24.559 17.9849 29.814 17.9849Z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M38.392 27.5C38.392 22.7625 34.5515 18.922 29.814 18.922C25.0765 18.922 21.236 22.7625 21.236 27.5C21.236 32.2375 25.0765 36.078 29.814 36.078C34.5515 36.078 38.392 32.2375 38.392 27.5ZM39.3291 27.5C39.3291 22.245 35.069 17.9849 29.814 17.9849C24.559 17.9849 20.2989 22.245 20.2989 27.5C20.2989 32.7551 24.559 37.0151 29.814 37.0151C35.069 37.0151 39.3291 32.7551 39.3291 27.5Z"
            // fill="url(#paint0_linear_118_18)"
          />
          <path d="M30.4482 14.7766L30.4482 2.49318C30.4482 0.475013 27.9329 -0.535687 26.4619 0.891375L0.683863 25.8982C-0.228077 26.7828 -0.228077 28.2171 0.683863 29.1018L26.4619 54.1086C27.9329 55.5356 30.4482 54.5249 30.4482 52.5068L30.4482 40.2989C23.201 40.2785 17.3324 34.573 17.3324 27.5377C17.3324 20.5025 23.201 14.7969 30.4482 14.7766Z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.4411 52.9916C27.4255 53.9663 29.1088 53.276 29.1088 51.8977L29.1088 40.6319C22.122 40.2681 16.5699 34.5444 16.5699 27.5368C16.5699 20.5292 22.122 14.8055 29.1088 14.4417L29.1088 3.10226C29.1088 1.72396 27.4255 1.0337 26.4411 2.00831L1.79708 26.406C1.1868 27.0102 1.1868 27.9898 1.79708 28.5939L26.4411 52.9916ZM30.4482 51.8977C30.4482 54.4574 27.3222 55.7393 25.4939 53.9293L0.849934 29.5316C-0.283437 28.4096 -0.283437 26.5904 0.849934 25.4683L25.4939 1.07063C27.3222 -0.739362 30.4482 0.542543 30.4482 3.10226L30.4482 15.7476L29.7805 15.7495C23.221 15.7683 17.9094 21.0385 17.9094 27.5368C17.9094 34.0352 23.221 39.3053 29.7805 39.3241L30.4482 39.326L30.4482 51.8977Z"
            // fill="url(#paint1_radial_118_18)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_118_18"
              x1="29.814"
              y1="37.0151"
              x2="29.814"
              y2="17.9849"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0631818" />
              <stop offset="0.498182" />
              <stop offset="0.948182" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_118_18"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(15.2227 27.526) rotate(-180) scale(13.0805 86.6124)"
            >
              <stop />
              <stop offset="1" />
            </radialGradient>
          </defs>
        </svg>
      </button>
      <button
        className="text-textColor p-1 opacity-25 rounded-lg absolute top-[30%] md:top-1/2 right-5 -translate-y-1/2"
        onClick={handleNextProject}
      >
        <svg
          width="40"
          height="55"
          viewBox="0 0 40 55"
          fill="none"
          className="fill-primary"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.186 37.0151C4.93096 37.0151 0.670898 32.755 0.670898 27.5C0.670899 22.2449 4.93096 17.9849 10.186 17.9849C15.4411 17.9849 19.7011 22.2449 19.7011 27.5C19.7011 32.755 15.4411 37.0151 10.186 37.0151Z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.60799 27.5C1.60799 32.2375 5.4485 36.078 10.186 36.078C14.9235 36.078 18.764 32.2375 18.764 27.5C18.764 22.7625 14.9235 18.922 10.186 18.922C5.4485 18.922 1.60799 22.7625 1.60799 27.5ZM0.670898 27.5C0.670898 32.755 4.93096 37.0151 10.186 37.0151C15.441 37.0151 19.7011 32.755 19.7011 27.5C19.7011 22.2449 15.441 17.9849 10.186 17.9849C4.93096 17.9849 0.670899 22.2449 0.670898 27.5Z"
            fill="url(#paint0_linear_118_17)"
          />
          <path d="M9.55176 40.2234L9.55176 52.5068C9.55176 54.525 12.0671 55.5357 13.5381 54.1086L39.3161 29.1018C40.2281 28.2172 40.2281 26.7829 39.3161 25.8982L13.5381 0.891421C12.0671 -0.535642 9.55176 0.475068 9.55176 2.49324L9.55176 14.7011C16.799 14.7215 22.6676 20.427 22.6676 27.4623C22.6676 34.4975 16.799 40.2031 9.55176 40.2234Z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5589 2.00836C12.5745 1.03375 10.8912 1.72401 10.8912 3.10232L10.8912 14.3681C17.878 14.7319 23.4301 20.4556 23.4301 27.4632C23.4301 34.4708 17.878 40.1945 10.8912 40.5583L10.8912 51.8977C10.8912 53.276 12.5745 53.9663 13.5589 52.9917L38.2029 28.594C38.8132 27.9898 38.8132 27.0102 38.2029 26.4061L13.5589 2.00836ZM9.55176 3.10232C9.55176 0.542606 12.6778 -0.739319 14.5061 1.07068L39.1501 25.4684C40.2834 26.5904 40.2834 28.4096 39.1501 29.5317L14.5061 53.9294C12.6778 55.7394 9.55176 54.4575 9.55176 51.8977L9.55176 39.2524L10.2196 39.2505C16.779 39.2317 22.0906 33.9615 22.0906 27.4632C22.0906 20.9648 16.779 15.6947 10.2196 15.6759L9.55176 15.674L9.55176 3.10232Z"
          />
          <defs>
            <linearGradient
              id="paint0_linear_118_17"
              x1="10.186"
              y1="17.9849"
              x2="10.186"
              y2="37.0151"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0631818" />
              <stop offset="0.498182" />
              <stop offset="0.948182" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_118_17"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(24.7773 27.474) scale(13.0805 86.6124)"
            >
              <stop />
              <stop offset="1" />
            </radialGradient>
          </defs>
        </svg>
      </button>
    </div>
  );
}
