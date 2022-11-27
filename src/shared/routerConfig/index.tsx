import React, { Fragment } from "react";
import LayoutPage from "../../Layouts";
import BlogPage from "../../Modules/Blog";
import Contact from "../../Modules/contact";
import PartyEvent from "../../Modules/Event/Party";
import HomePage from "../../Modules/HomePage";
import Login from "../../Modules/Admin/Login";
import NotFound from "../../Modules/NotFound";
import Rooms from "../../Modules/Rooms";
import RoomItem from "../../Modules/Rooms/components/RoomItem";
import { ITypeRouter } from "../constants/IConstant";
import SendUrl from "../../Modules/Admin/SendUrl";
import ResetPassword from "../../Modules/Admin/ResetPassword";
import Dashboard from "../../Modules/Admin/Dashboard/components";
import LayoutAdmin from "../../Modules/Admin/Dashboard/components/LayoutAdmin";

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
        path: "/send-url",
        component: SendUrl,
        layout: Fragment
    },
    {
        path: "/reset-password",
        component: ResetPassword,
        layout: Fragment
    },
    {
        path: "/admin/dashboard",
        component: Dashboard,
        layout: LayoutAdmin
    },
    {
        path: "*",
        component: NotFound,
    },
];

export default RouterLinkDefine;
