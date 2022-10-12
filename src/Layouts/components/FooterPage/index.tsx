import React from "react";
import Logo from "../../../../src/assets/logo.svg";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  SkypeOutlined,
  InstagramOutlined,
  FacebookFilled,
  TwitterCircleFilled,
  GoogleCircleFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import "./index.scss";
import { Link } from "react-router-dom";
import { Image } from "antd";
import { ITypeIcon } from "../../../shared/constants/IConstant";
import { listImgs, listsContact } from "../../../shared/constants";
import NavigationBar from "../NavigationBar";

const listIcon: ITypeIcon[] = [
  { key: "map", value: <EnvironmentOutlined />, href: "/" },
  { key: "phone", value: <PhoneOutlined />, href: "/" },
  { key: "mail", value: <MailOutlined />, href: "/" },
  { key: "skypee", value: <SkypeOutlined />, href: "/" },
  { key: "instagram", value: <InstagramOutlined />, href: "/" },
];

const listIconContact: ITypeIcon[] = [
  {
    key: "facebook",
    value: <FacebookFilled />,
    href: "/",
  },
  {
    key: "twitter",
    value: <TwitterCircleFilled />,
    href: "/",
  },
  {
    key: "google",
    value: <GoogleCircleFilled />,
    href: "/",
  },
  {
    key: "skypee",
    value: <SkypeOutlined />,
    href: "/",
  },
  {
    key: "linkedin",
    value: <LinkedinFilled />,
    href: "/about",
  },
];

const FooterPage = () => {
  const renderListIcon = (iconName: string) => {
    const icon = listIcon.find((item) => item.key === iconName);
    return icon?.value;
  };

  const renderListIconContact = (iconname: string) => {
    const icon = listIconContact.find((item) => item.key === iconname);
    return icon?.value;
  };

  return (
    <div className="footer-tour">
      <div className="footer-tour-left">
        <img src={Logo} alt="" />
        <p>
          always bring you great experiences with your loved ones please share
          and enjoy it
        </p>
        <NavigationBar />
      </div>
      <div className="footer-tour-center">
        <h1>contact us</h1>
        <ul>
          {listsContact.length > 0 &&
            listsContact.map((itemContact, index) => {
              return (
                <li key={index}>
                  <Link to={itemContact.href}>
                    {renderListIcon(itemContact.icon || " ")}
                    {itemContact.title}
                  </Link>
                </li>
              );
            })}
        </ul>
        <ul>
          {listIconContact.length > 0 &&
            listIconContact.map((itemIcon, index) => {
              return (
                <li key={index}>
                  <a href={itemIcon.href} target="_blank">
                    {renderListIconContact(itemIcon.key)}
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="footer-tour-right">
        <h1>Instagram</h1>
        <div>
          {listImgs.length > 0 &&
            listImgs.map(({ id, src }) => <img key={id} src={src} />)}
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
