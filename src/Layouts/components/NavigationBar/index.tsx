import { Menu, MenuProps } from "antd";
import React, { useState } from "react";
import { Link, Router, useNavigate } from "react-router-dom";
import { listsMenu } from "../../../shared/constants";
import style from "./index.module.scss";


const NavigationBar = () => {
  const router = useNavigate()
  const [current, setCurrent] = useState("/")

  const onClick: MenuProps['onClick'] = e => {
    setCurrent(e.key);
    router(e.key)
  }
  return (
    <div className={style.navbarPage}>
      {/* <ul className="navbar">
        {listsMenu.length > 0 &&
          listsMenu.map((itemMenu, index) => {
            return (
              <li key={index}>
                <Link to={itemMenu.href}>{itemMenu.title}</Link>
              </li>
            );
          })}
      </ul> */}
      <Menu className={style.navbar} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={listsMenu} />
    </div>
  );
};

export default NavigationBar;
