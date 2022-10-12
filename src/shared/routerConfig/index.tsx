import React from "react";
import HomePage from "../../Modules/HomePage";
import Login from "../../Modules/Login";
import { ITypeRouter } from "../constants/IConstant";

const RouterLinkDefine: ITypeRouter[] = [
  {
    path: "/",
    exact: true,
    component: <HomePage />,
  },
  {
    path: "/login",
    exact: true,
    component: <Login />,
  },
];

export default RouterLinkDefine;
