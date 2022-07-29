import React from "react";
import { useHistory } from "react-router";
import Logo from "../../../../assets/logo.svg";
import DropdownCustom from "../../../DropdownCustom";
import NavigationBar from "../NavigationBar";
import "./index.scss";
import { Menu, MenuProps } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons"

const HeaderTour = () => {
  const history = useHistory();

  const linkToHome = () => {
    history.push("/");
  };

  const handleMenuClick: MenuProps['onClick'] = e => {
    console.log('click', e);
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
            key: "1"
          },
          {
            label: (
              <a href="/" target="_blank" rel="noopener noreferrer">
                Logout
              </a>
            ),
            icon: <LogoutOutlined />,
            key: "2"
          },
        ]}
      />
    );
  };

  return (
    <div className="header-page">
      <div className="header-left">
        <img onClick={linkToHome} src={Logo} alt="" />
      </div>

      <div className="header-center">
        <NavigationBar />
      </div>
      <div className="header-right">
        <DropdownCustom
          titleDropdown="mit"
          menuDropdown={MenuDropdown}
        />
      </div>
    </div>
  );
};

export default HeaderTour;
