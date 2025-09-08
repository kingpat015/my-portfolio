// src/pages/Home.jsx
import { Typography, Avatar, Button, Tag } from "antd";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Home.css";

const { Title, Paragraph } = Typography;

const techStack = [
  { name: "React", color: "#000c10ff" },
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
      {/* Avatar with glow + animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="avatar-wrapper"
      >
        <Avatar size={140} src="/avatar.jpg" className="home-avatar" />
      </motion.div>

      {/* Gradient Title */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <Title className="home-title">
          Hi, I'm <span className="gradient-text">Patrick Leimuel Aganos</span>
        </Title>
      </motion.div>

      {/* Subtitle */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Paragraph className="home-subtitle">
          I'm a passionate <strong>Front End Developer</strong> focused on
          building performant, user-friendly, and visually stunning web
          applications using modern technologies like{" "}
          <span className="highlight">React</span>,{" "}
          <span className="highlight">Angular</span>, and{" "}
          <span className="highlight">Laravel</span>.
        </Paragraph>
      </motion.div>

      {/* Tech stack */}
      <motion.div
        className="tech-stack"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        {techStack.map((tech) => (
          <Tag
            key={tech.name}
            style={{
              backgroundColor: tech.color,
              color: "#0f0e0eff",
              fontWeight: "500",
              fontSize: 13,
              padding: "6px 14px",
              borderRadius: "20px",
              marginBottom: 10,
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              cursor: "default",
              transition: "transform 0.2s ease",
            }}
            className="tech-tag"
          >
            {tech.name}
          </Tag>
        ))}
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.7 }}
      >
        <Link to="/projects">
          <Button type="primary" size="large" className="home-button">
            🚀 View My Projects
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
