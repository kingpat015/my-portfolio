// src/pages/ProjectDetails.jsx
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import {
  Typography,
  Carousel,
  Button,
  Space,
  Divider,
  Card,
} from "antd";
import { LeftOutlined, GlobalOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const contentStyle = {
  width: "100%",
  height: "400px",
  objectFit: "contain",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return <Paragraph>Project not found.</Paragraph>;
  }

  return (
    <div style={{ padding: "40px 20px", maxWidth: 1000, margin: "auto" }}>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Title level={2}>{project.title}</Title>
        <Paragraph style={{ fontSize: 16 }}>{project.description}</Paragraph>

        <Carousel autoplay style={{ borderRadius: "8px", overflow: "hidden" }}>
          {project.images.map((img, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <img
                src={img}
                alt={`Screenshot ${index + 1}`}
                style={contentStyle}
              />
            </div>
          ))}
        </Carousel>

        <Space wrap style={{ marginTop: 20 }}>
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
        </Space>

        <Divider />
      </Space>
    </div>
  );
};

export default ProjectDetails;
