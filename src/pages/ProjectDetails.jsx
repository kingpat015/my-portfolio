import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import "../styles/ProjectDetails.css";
import { Typography, Carousel, Button, Space, Divider } from "antd";
import { LeftOutlined, GlobalOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  if (!project) return <Paragraph>Project not found.</Paragraph>;

  return (
    <motion.div
      className="project-details-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {/* Title */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 120 }}
        >
          <Title level={2} className="project-title">
            {project.title}
          </Title>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Paragraph className="project-description">
            {project.description.split(" ").map((word, i) => (
              <span
                key={i}
                className={
                  ["React", "Angular", "Laravel"].includes(word)
                    ? "highlight-word"
                    : ""
                }
              >
                {word}{" "}
              </span>
            ))}
          </Paragraph>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Carousel autoplay className="project-carousel">
            {project.images.map((img, index) => (
              <motion.div
                key={index}
                className="project-carousel-slide"
                whileHover={{ scale: 1.1, y: -5, rotate: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <img src={img} alt={`Screenshot ${index + 1}`} />
              </motion.div>
            ))}
          </Carousel>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="project-details-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              type="primary"
              icon={<GlobalOutlined />}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient"
            >
              Visit Live Site
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/projects">
              <Button icon={<LeftOutlined />} className="btn-back">
                Back to Projects
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <Divider />
      </Space>
    </motion.div>
  );
};

export default ProjectDetails;
