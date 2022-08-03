import React from "react";
import Logo from "../../../../assets/logo.svg";
import NavigationBar from "../NavigationBar";
import { EnvironmentOutlined, PhoneOutlined, MailOutlined, SkypeOutlined, InstagramOutlined } from "@ant-design/icons"
import "./index.scss";
import { listsContact } from "../../../../shared/constants";
import { Link } from "react-router-dom";

const listIcon = [
  { key: 'map', value: <EnvironmentOutlined /> },
  { key: 'phone', value: <PhoneOutlined /> },
  { key: 'mail', value: <MailOutlined /> },
  { key: 'skypee', value: <SkypeOutlined /> },
  { key: 'instagram', value: <InstagramOutlined /> }
]
const FooterTour = () => {

  const renderListIcon = (iconName: string) => {
    const icon = listIcon.find(item => item.key === iconName)
    return icon?.value
  }

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
          {listsContact.length > 0 && listsContact.map((itemContact, index) => {
            return (
              <li key={index}>
                <Link to={itemContact.href}>
                  {renderListIcon(itemContact.icon || " ")}
                  {itemContact.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default FooterTour;
