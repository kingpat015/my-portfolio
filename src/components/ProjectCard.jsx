// src/components/ProjectCard.jsx
import { Card, Tag, Tooltip } from "antd";
import { Link } from "react-router-dom";
import "../styles/ProjectCard.css";

const { Meta } = Card;

const ProjectCard = ({ id, title, description, images, tags = [] }) => (
  <Link to={`/projects/${id}`} className="project-card-link">
    <Card
      hoverable
      className="project-card"
      cover={
        <div className="project-card-image-wrapper">
          <img
            alt={title}
            src={images[0]}
            className="project-card-image"
          />
          <div className="project-card-overlay" />
        </div>
      }
    >
      <Meta
        title={<span className="project-meta-title">{title}</span>}
        description={<span className="project-meta-description">{description}</span>}
      />
      <div className="project-tags">
        {tags.map((tag) => (
          <Tooltip title={tag} key={tag}>
            <Tag className="tech-tag">{tag}</Tag>
          </Tooltip>
        ))}
      </div>
    </Card>
  </Link>
);
export default ProjectCard;
