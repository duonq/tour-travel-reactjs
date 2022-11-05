import React from "react";
import LayoutPage from "../../Layouts";
import Contact from "../../Modules/contact";
import HomePage from "../../Modules/HomePage";
import Login from "../../Modules/Login";
import NotFound from "../../Modules/NotFound";
import Rooms from "../../Modules/Rooms";
import RoomItem from "../../Modules/Rooms/components/RoomItem";
import { ITypeRouter } from "../constants/IConstant";

const RouterLinkDefine: ITypeRouter[] = [
    {
        path: "/",
        component: HomePage,
        layout: LayoutPage,
    },
    {
        path: "/rooms",
        component: Rooms,
        layout: LayoutPage,
    },
    {
        path: "/room-item",
        component: RoomItem,
        layout: LayoutPage,
    },
    {
        path: "/contact",
        component: Contact,
        layout: LayoutPage,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "*",
        component: NotFound,
    },
];

export default RouterLinkDefine;
