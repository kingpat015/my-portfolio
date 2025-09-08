import { Typography, Avatar, Button, Tag } from "antd";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
      <div className="home-content">
        {/* LEFT: Text */}
        <motion.div
          className="home-text"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.div
            variants={{
              hidden: { y: -30, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
            }}
          >
            <Title className="home-title">
              Hi, I'm{" "}
              <span className="gradient-text">Patrick Leimuel Aganos</span>
            </Title>
          </motion.div>

          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
            }}
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

          {/* Tech Stack */}
          <motion.div
            className="tech-stack"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
          >
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.3, y: -5, rotate: 5 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <Tag
                  style={{
                    backgroundColor: tech.color,
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: 13,
                    padding: "6px 14px",
                    borderRadius: "20px",
                    marginBottom: 10,
                    boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
                    cursor: "pointer",
                  }}
                >
                  {tech.name}
                </Tag>
              </motion.div>
            ))}
          </motion.div>

          {/* Button */}
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
            }}
          >
            <Link to="/projects">
              <Button type="primary" size="large" className="home-button">
                🚀 View My Projects
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT: Avatar with floating effect */}
        <motion.div
          className="home-avatar-wrapper"
          initial={{ scale: 0.8, opacity: 0, y: -20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          whileHover={{ scale: 1.08, rotate: 2, y: -5 }}
          transition={{ type: "spring", stiffness: 130, damping: 12 }}
        >
          <motion.div
            className="floating-avatar"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Avatar size={400} src="/avatar.jpg" className="home-avatar" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
