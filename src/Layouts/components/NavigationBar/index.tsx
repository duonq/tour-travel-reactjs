import { Menu, MenuProps } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { listsMenu } from "../../../shared/constants";
import style from "./index.module.scss";

// const items = [
//   { label: 'item 1', key: 'item-1' },
//   { label: 'item 2', key: 'item-2' },
//   {
//     label: 'sub menu',
//     key: 'submenu',
//     children: [{ label: 'item 3', key: 'submenu-item-1' }],
//   },
// ];
const items = [
  {
    key: 1,
    href: "/",
    label: "Trang chủ",
  },
  {
    key: 2,
    href: "/rooms",
    label: "Phòng nghỉ"
  },
  {
    key: 3,
    href: "",
    label: "Sự kiện"
  },
  {
    key: 4,
    href: "",
    label: "Dịch vụ",
    children: [
      {
        label: 'Option 3',
        href: '',
      },
      {
        label: 'Option 4',
        href: '',
      },
    ],
  },
  {
    key: 5,
    href: "/contact",
    label: "Liên hệ"
  }
]


const NavigationBar = () => {
  const [current, setCurrent] = useState("")

  const onClick = (item: any) => {
    console.log(555, item);
    // setCurrent(e.key);
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
      <Menu className={style.navbar} onClick={onClick} mode="horizontal" items={items} />
    </div>
  );
};

export default NavigationBar;
