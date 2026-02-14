import React, { useState } from "react";
import "./OurProjects.css";

const projects = [
  {
    id: 1,
    title: "API Plant",
    description:
      "Chemical plant requires specialized equipment, units, and technology in the manufacturing process. We are a leading chemical equipment manufacturer (API) based in Pune and offer our quality manufacturing services at the Pan India level.",
    image: "/Images/API Plant.png",
    link: "#api-plant",
  },
  {
    id: 2,
    title: "Distillery / Brewery / Winery Plant",
    description:
      "India is becoming a lucrative destination for winery industries. Padmatech is a well-known manufacturer of brewery and distillery equipment in India.",
    image: "/Images/Winery Plant.png",
    link: "#distillery-plant",
  },
  {
    id: 3,
    title: "MEE Plant",
    description:
      "Perfect solutions for multiple-effect evaporators (MEE) across chemical, pharmaceutical, food, brewery, and oil & gas industries.",
    image: "/Images/MEE Plant.png",
    link: "#mee-plant",
  },
  {
    id: 4,
    title: "Material Handling Systems",
    description:
      "Mechanical equipment for moving, storing, controlling, and protecting materials throughout the manufacturing process.",
    image: "/Images/Material Handling Systems.png",
    link: "#material-handling",
  },
  {
    id: 5,
    title: "Microbrewery Plant",
    description:
      "India’s craft beer industry is growing rapidly, creating demand for high-quality microbrewery equipment manufacturers.",
    image: "/Images/Microbrewery Plant.png",
    link: "#microbrewery",
  },
  {
    id: 6,
    title: "Powder Granulation Solutions",
    description:
      "High-quality granulation equipment for converting fine powders into uniform granules for multiple industries.",
    image: "/Images/Power Granulation Solutions.png",
    link: "#powder-granulation",
  },
];

const OurProjects = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Our Projects</h2>

      <div className="projects-container">
        {/* LEFT SIDE */}
        <ul className="projects-left">
          {projects.map((project) => (
            <li key={project.id}>
              <button
                className={
                  activeProject.id === project.id ? "active" : ""
                }
                onClick={() => setActiveProject(project)}
              >
                {project.title}
              </button>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="projects-right">
          <img
            src={activeProject.image}
            alt={activeProject.title}
          />
          <h3>{activeProject.title}</h3>
          <p>{activeProject.description}</p>
          <a href={activeProject.link} className="view-details">
            View Details →
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
