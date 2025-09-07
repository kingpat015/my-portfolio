// src/pages/Projects.jsx
import { Row } from "antd";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <Row justify="center" style={{ padding: 24 }} wrap>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </Row>
  );
};

export default Projects;
