import { Card, Tag, Tooltip } from "antd";
import { Link } from "react-router-dom";
import "../styles/ProjectCard.css";
import { motion } from "framer-motion";

const { Meta } = Card;

const ProjectCard = ({ id, title, description, images, tags = [] }) => (
  <Link to={`/projects/${id}`} className="project-card-link">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
      whileHover={{ scale: 1.03, y: -5 }}
    >
      <Card
        hoverable
        className="project-card"
        cover={
          <div className="project-card-image-wrapper">
            <img alt={title} src={images[0]} className="project-card-image" />
            <div className="project-card-overlay" />
          </div>
        }
      >
        <Meta
          title={<span className="project-meta-title">{title}</span>}
          description={
            <span className="project-meta-description">{description}</span>
          }
        />
        <div className="project-tags">
          {tags.map((tag, i) => (
            <Tooltip title={tag} key={i}>
              <motion.div whileHover={{ scale: 1.1, y: -3 }}>
                <Tag className="tech-tag">{tag}</Tag>
              </motion.div>
            </Tooltip>
          ))}
        </div>
      </Card>
    </motion.div>
  </Link>
);

export default ProjectCard;
