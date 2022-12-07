import React from "react";
import "./index.scss";
import { Menu, MenuProps } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import DropdownCustom from "../../../components/DropdownCustom";
import NavigationBar from "../NavigationBar";
import Logo from "../../../../src/assets/logo.png";

const HeaderPage = () => {
  const linkToHome = () => {};

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    console.log("click", e);
  };

  const MenuDropdown = (props: any) => {
    return (
      <Menu
        onClick={handleMenuClick}
        className="menu-dropdown"
        items={[
          {
            label: (
              <a href="/" target="_blank" rel="noopener noreferrer">
                personal page
              </a>
            ),
            icon: <UserOutlined />,
            key: "1",
          },
          {
            label: (
              <a href="/" target="_blank" rel="noopener noreferrer">
                Logout
              </a>
            ),
            icon: <LogoutOutlined />,
            key: "2",
          },
        ]}
      />
    );
  };

  return (
    <div className="header-page">
      <div className="header-left">
        {/* <img src={Logo} alt="" /> */}
      </div>

      <div className="header-center">
        <NavigationBar />
      </div>
      {/* <div className="header-right">
        <DropdownCustom titleDropdown="mit" menuDropdown={MenuDropdown} />
      </div> */}
    </div>
  );
};

export default HeaderPage;
