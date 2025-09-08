import { Typography, Divider, Row, Col, Tag, Card } from "antd";
import "../styles/About.css";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

const techStack = {
  "Frameworks & Libraries": ["React", "Angular", "Laravel"],
  "UI Libraries": [
    "Ant Design",
    "Material UI",
    "Chakra UI",
    "Mantine Core",
    "Tailwind CSS",
    "Bootstrap",
  ],
  "Tools & Essentials": ["Vite", "JavaScript", "HTML5", "CSS3", "Font Awesome"],
};

const About = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Title level={2} className="about-title">
        About Me
      </Title>

      <Paragraph className="about-paragraph">
        I'm <strong>Patrick Leimuel Aganos</strong>, a highly motivated
        front-end developer experienced in crafting interactive, accessible, and
        performant web interfaces. I focus on turning complex requirements into
        elegant solutions using clean, modular code.
      </Paragraph>

      <Paragraph className="about-paragraph">
        I specialize in modern front-end technologies such as{" "}
        <Tag color="blue">React</Tag>, <Tag color="magenta">Angular</Tag>, and{" "}
        <Tag color="volcano">Laravel</Tag>. I love working with component
        libraries and frameworks like <Tag color="cyan">Ant Design</Tag>,{" "}
        <Tag color="gold">Material UI</Tag>, and{" "}
        <Tag color="green">Tailwind CSS</Tag> to accelerate UI development while
        keeping design consistent and beautiful.
      </Paragraph>

      <Divider orientation="left">Tech Stack</Divider>

      {Object.entries(techStack).map(([group, tools]) => (
        <div key={group} className="about-tech-group">
          <Title level={5} className="about-tech-group-title">
            {group}
          </Title>
          <Row gutter={[12, 12]}>
            {tools.map((tech, i) => (
              <Col key={tech}>
                <motion.div whileHover={{ scale: 1.1, y: -3 }}>
                  <Tag className="about-tag">{tech}</Tag>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      ))}

      <Divider orientation="left">What I Focus On</Divider>

      <Row gutter={16}>
        {[
          {
            title: "Responsive Design",
            desc: "Building mobile-first layouts using Tailwind, Bootstrap, and CSS3 — optimized for all screen sizes.",
          },
          {
            title: "UI/UX Excellence",
            desc: "Designing clean, user-focused interfaces with modern design systems like AntD and Material UI.",
          },
          {
            title: "Reusable Components",
            desc: "Writing modular and maintainable components using React + Ant Design + Chakra UI.",
          },
        ].map((item, index) => (
          <Col xs={24} md={8} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="about-card" bordered={false} hoverable>
                <Title level={4}>{item.title}</Title>
                <Paragraph>{item.desc}</Paragraph>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
};

export default About;
