// src/components/Header.jsx
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const location = useLocation();

  return (
    <div className="custom-header">
      <div className="logo">
        <Link to="/">P.<span>Aganos</span></Link>
      </div>

      <Menu
        mode="horizontal"
        selectedKeys={[location.pathname]}
        className="custom-menu"
      >
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/projects">
          <Link to="/projects">Projects</Link>
        </Menu.Item>
        <Menu.Item key="/about">
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
