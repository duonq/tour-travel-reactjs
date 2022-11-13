import React, { Fragment } from "react";
import LayoutPage from "../../Layouts";
import BlogPage from "../../Modules/Blog";
import Contact from "../../Modules/contact";
import PartyEvent from "../../Modules/Event/Party";
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
        path: "/party-organizing",
        component: PartyEvent,
        layout: LayoutPage,
    },
    {
        path: "/blog",
        component: BlogPage,
        layout: LayoutPage,
    },
    {
        path: "/login",
        component: Login,
        layout: Fragment
    },
    {
        path: "*",
        component: NotFound,
    },
];

export default RouterLinkDefine;
