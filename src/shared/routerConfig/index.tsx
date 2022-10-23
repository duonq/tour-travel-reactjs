import React from "react";
import LayoutPage from "../../Layouts";
import HomePage from "../../Modules/HomePage";
import Login from "../../Modules/Login";
import { ITypeRouter } from "../constants/IConstant";

const RouterLinkDefine: ITypeRouter[] = [
  {
    path: "/",
    component: HomePage,
    layout: LayoutPage,
  },
  {
    path: "/login",
    component: Login,
  },
];

export default RouterLinkDefine;
