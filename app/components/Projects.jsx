import ProjectSlider from "./ProjectSlider";
import SectionHead from "./SectionHead";
import firstImage from "@/public/project1.webp";
import secondImage from "@/public/project2.webp";

const projects = [
  {
    imgSrc: firstImage,
    imgAlt: "project image",
    title: "AI Trip Planner",
    description:
      "TripPlanner is an AI-driven travel platform offering personalized hotel recommendations, day-wise itineraries, and secure trip management with Google authentication.",
  },
  {
    imgSrc: secondImage,
    imgAlt: "project image",
    title: "Expense Tracker",
    description:
      "Expense Tracker is a web app for managing personal finances, allowing users to track expenses, income, and balance.",
  },
];

export default function Projects() {
  return (
    <div
      id="projects"
      className="mt-10 about flex flex-col px-2 gap-6 items-center justify-center"
    >
      <div className="z-[100]">
        <SectionHead>Projects</SectionHead>
      </div>
      <div>
        <div className="md:mt-12 flex flex-col items-center justify-center">
          <ProjectSlider projects={projects} />
        </div>
      </div>
    </div>
  );
}
