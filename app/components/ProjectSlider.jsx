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
        className="text-textColor p-4 bg-headingColor rounded-lg absolute top-[30%] md:top-1/2 -translate-y-1/2 left-0 "
        onClick={handlePrevProject}
      >
        Prev
      </button>
      <button
        className="text-textColor p-4 bg-headingColor rounded-lg absolute top-[30%] md:top-1/2 right-0 -translate-y-1/2"
        onClick={handleNextProject}
      >
        Next
      </button>
    </div>
  );
}
