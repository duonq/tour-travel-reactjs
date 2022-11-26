import { Menu, MenuProps } from "antd";
import React, { useEffect, useState } from "react";
import { Link, Router, useNavigate } from "react-router-dom";
import { listsMenu } from "../../../shared/constants";
import style from "./index.module.scss";


const NavigationBar = () => {
  const router = useNavigate()
  const [current, setCurrent] = useState("")

  const onClick: MenuProps['onClick'] = e => {
    if (e.key === "") {
      return
    }
    setCurrent(e.key);
    router(e.key)
  }

  useEffect(() => {
    setCurrent(window.location.pathname)
  }, [])
  return (
    <div className={style.navbarPage}>
      <Menu className={style.navbar} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={listsMenu} />
    </div>
  );
};

export default NavigationBar;
