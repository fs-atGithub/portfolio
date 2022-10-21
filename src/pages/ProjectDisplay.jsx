import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <a href={project.link} target="_blank">
        <img src={project.image} />
      </a>
      <p>
        <strong>Skills:</strong> <br />
        {project.skills}
        <br />
        <br />
        <strong>Description:</strong> <br />
        {project.description}
      </p>

      <a href={project.repo} target="_blank">
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;
