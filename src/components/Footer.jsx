// src/components/Footer.jsx
import { Layout } from "antd";
import "../styles/Footer.css";

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter className="custom-footer">
      © {new Date().getFullYear()} <span>PAT-PORT</span>. 
      Built with <a href="https://react.dev" target="_blank" rel="noreferrer">React</a> + 
      <a href="https://ant.design" target="_blank" rel="noreferrer"> Ant Design</a>.
    </AntFooter>
  );
};

export default Footer;
