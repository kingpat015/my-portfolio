import { Layout } from "antd";
import "../styles/Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaEnvelope,
} from "react-icons/fa";

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter className="custom-footer">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} <span className="brand">PAT-PORT</span>.
          Built with
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            {" "}
            React
          </a>{" "}
          +
          <a href="https://ant.design" target="_blank" rel="noreferrer">
            {" "}
            Ant Design
          </a>
          .
        </p>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="mailto:youremail@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://t.me/yourusername" target="_blank" rel="noreferrer">
            <FaTelegramPlane />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;
