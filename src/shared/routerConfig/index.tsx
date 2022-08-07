import React from "react";
import HomeTour from "../../Modules/HomeTour";
import Login from "../../Modules/Login";
import { ITypeRouter } from "../constants/IConstant";

const RouterLinkDefine: ITypeRouter[] = [
  {
    path: "/",
    exact: true,
    component: <HomeTour />,
  },
  {
    path: "/login",
    exact: true,
    component: <Login />,
  },
];

export default RouterLinkDefine;
