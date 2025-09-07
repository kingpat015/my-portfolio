// src/components/Footer.jsx
import { Layout } from "antd";

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter style={{ textAlign: "center" }}>
      © {new Date().getFullYear()} Your Name. Built with React + Ant Design.
    </AntFooter>
  );
};

export default Footer;
