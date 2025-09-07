// src/pages/About.jsx
import { Typography, Divider, Row, Col, Tag, Card } from "antd";
import "../styles/About.css";

const { Title, Paragraph } = Typography;

const techStack = {
  "Frameworks & Libraries": [
    "React",
    "Angular",
    "Laravel",
  ],
  "UI Libraries": [
    "Ant Design",
    "Material UI",
    "Chakra UI",
    "Mantine Core",
    "Tailwind CSS",
    "Bootstrap",
  ],
  "Tools & Essentials": [
    "Vite",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Font Awesome",
  ],
};

const About = () => {
  return (
    <div className="about-container">
      <Title level={2} className="about-title">About Me</Title>
      
      <Paragraph className="about-paragraph">
        I'm <strong>Patrick Leimuel Aganos</strong>, a highly motivated front-end developer experienced in crafting interactive, accessible, and performant web interfaces.
        I focus on turning complex requirements into elegant solutions using clean, modular code.
      </Paragraph>

      <Paragraph className="about-paragraph">
        I specialize in modern front-end technologies such as <Tag color="blue">React</Tag>, <Tag color="magenta">Angular</Tag>, and <Tag color="volcano">Laravel</Tag>. I love working with component libraries and frameworks like <Tag color="cyan">Ant Design</Tag>, <Tag color="gold">Material UI</Tag>, and <Tag color="green">Tailwind CSS</Tag> to accelerate UI development while keeping design consistent and beautiful.
      </Paragraph>

      <Divider orientation="left">Tech Stack</Divider>

      {Object.entries(techStack).map(([group, tools]) => (
        <div key={group} className="about-tech-group">
          <Title level={5}>{group}</Title>
          <Row gutter={[12, 12]}>
            {tools.map((tech) => (
              <Col key={tech}>
                <Tag className="about-tag">{tech}</Tag>
              </Col>
            ))}
          </Row>
        </div>
      ))}

      <Divider orientation="left">What I Focus On</Divider>

      <Row gutter={16}>
        <Col xs={24} md={8}>
          <Card className="about-card" bordered={false} hoverable>
            <Title level={4}>Responsive Design</Title>
            <Paragraph>
              Building mobile-first layouts using Tailwind, Bootstrap, and CSS3 — optimized for all screen sizes.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="about-card" bordered={false} hoverable>
            <Title level={4}>UI/UX Excellence</Title>
            <Paragraph>
              Designing clean, user-focused interfaces with modern design systems like AntD and Material UI.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="about-card" bordered={false} hoverable>
            <Title level={4}>Reusable Components</Title>
            <Paragraph>
              Writing modular and maintainable components using React + Ant Design + Chakra UI.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default About;
