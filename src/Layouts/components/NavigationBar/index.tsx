import React from "react";
import { Link } from "react-router-dom";
import { listsMenu } from "../../../shared/constants";
import "./index.scss";

const NavigationBar = () => {
  return (
    <ul className="navbar">
      {listsMenu.length > 0 &&
        listsMenu.map((itemMenu, index) => {
          return (
            <li key={index}>
              <Link to={itemMenu.href}>{itemMenu.title}</Link>
            </li>
          );
        })}
    </ul>
  );
};

export default NavigationBar;
