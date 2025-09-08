import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import "../styles/ProjectDetails.css";
import {
  Typography,
  Carousel,
  Button,
  Space,
  Divider,
} from "antd";
import { LeftOutlined, GlobalOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return <Paragraph>Project not found.</Paragraph>;
  }

  return (
    <div className="project-details-container">
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Title level={2}>{project.title}</Title>
        <Paragraph>{project.description}</Paragraph>

        <Carousel autoplay className="project-carousel">
          {project.images.map((img, index) => (
            <div key={index} className="project-carousel-slide">
              <img
                src={img}
                alt={`Screenshot ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>

        <div className="project-details-buttons">
          <Button
            type="primary"
            icon={<GlobalOutlined />}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Live Site
          </Button>

          <Link to="/projects">
            <Button icon={<LeftOutlined />}>Back to Projects</Button>
          </Link>
        </div>

        <Divider />
      </Space>
    </div>
  );
};

export default ProjectDetails;
