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
    <div className="flex flex-col items-center">
      <Slide project={projects[projectNo]} key={projectNo} />
      <div>
        <button
          className="text-textColor p-4 bg-headingColor rounded-lg"
          onClick={handlePrevProject}
        >
          Prev
        </button>
        <button
          className="text-textColor p-4 bg-headingColor rounded-lg"
          onClick={handleNextProject}
        >
          Next
        </button>
      </div>
    </div>
  );
}
