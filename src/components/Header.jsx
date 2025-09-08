import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { FaReact } from "react-icons/fa"; // optional mini logo icon
import "../styles/Header.css";

const Header = () => {
  const location = useLocation();

  return (
    <div className="custom-header">
      {/* LOGO */}
      <div className="logo">
        <Link to="/">
          <span className="logo-icon">
            <FaReact />
          </span>
          P.<span>Aganos</span>
        </Link>
      </div>

      {/* NAV MENU */}
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
