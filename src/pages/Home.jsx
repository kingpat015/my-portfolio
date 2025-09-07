// src/pages/Home.jsx
import { Typography, Avatar, Button, Tag } from "antd";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const { Title, Paragraph } = Typography;

const techStack = [
  { name: "React", color: "#61dafb" },
  { name: "Angular", color: "#dd0031" },
  { name: "Vite", color: "#646cff" },
  { name: "Ant Design", color: "#1890ff" },
  { name: "Material UI", color: "#007fff" },
  { name: "Chakra UI", color: "#319795" },
  { name: "Bootstrap", color: "#7952b3" },
  { name: "Tailwind CSS", color: "#38bdf8" },
  { name: "Laravel", color: "#f55247" },
];

const Home = () => {
  return (
    <div className="home-container">
      <Avatar
        size={120}
        src="/avatar.jpg"
        className="home-avatar"
      />
      <Title className="home-title">Hi, I'm Patrick Leimuel Aganos</Title>
      <Paragraph className="home-subtitle">
        I'm a passionate <strong>Front End developer</strong> focused on building performant, user-friendly, and visually stunning web applications using modern technologies like React, Angular, and Laravel.
      </Paragraph>

      <div className="tech-stack">
        {techStack.map((tech) => (
          <Tag
            key={tech.name}
            color=""
            style={{
              backgroundColor: tech.color,
              color: "#fff",
              fontWeight: "500",
              fontSize: 13,
              padding: "4px 12px",
              borderRadius: "16px",
              marginBottom: 8,
            }}
          >
            {tech.name}
          </Tag>
        ))}
      </div>

      <Link to="/projects">
        <Button type="primary" size="large" className="home-button">
          View My Projects
        </Button>
      </Link>
    </div>
  );
};

export default Home;
