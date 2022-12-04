// import { listMenus } from "@/shared/constants"
import React from "react"
import { Link, useLocation } from "react-router-dom"
import styles from "./index.module.scss"
import {
    ShoppingCartOutlined,
    HomeOutlined,
    UserAddOutlined,
    UsergroupAddOutlined,
    CodeSandboxOutlined,
    DollarOutlined
} from '@ant-design/icons';
import { ITypeIcon } from "../../../../../shared/constants/IConstant";

const listMenus = [
    {
        id: 1,
        href: "/admin/dashboard",
        title: "Quản doanh thu",
        icon: "tiền"
    },
    {
        id: 2,
        href: "/admin/quanLyPhong",
        title: "Quản lý phòng",
        icon: "phòng"
    },
    {
        id: 3,
        href: "/admin/bookRoom",
        title: "Quản lý đặt phòng",
        icon: "giỏ hàng"
    },
    {
        id: 4,
        href: "",
        title: "Quản lý nhân viên",
        icon: "nhân viên"
    },
    {
        id: 5,
        href: "",
        title: "Quản lý khách hàng",
        icon: "khách hàng"
    },
    {
        id: 6,
        href: "",
        title: "Mã giảm giá",
        icon: "sale"
    },
]

const listIcon: ITypeIcon[] = [
    { key: "tiền", value: <DollarOutlined />, href: "/" },
    { key: "phòng", value: <HomeOutlined />, href: "/" },
    { key: "giỏ hàng", value: <ShoppingCartOutlined />, href: "/" },
    { key: "nhân viên", value: <UserAddOutlined />, href: "/" },
    { key: "khách hàng", value: <UsergroupAddOutlined />, href: "/" },
    { key: "sale", value: <CodeSandboxOutlined />, href: "/" },
];

const NavbarAdmin = () => {
    const location = useLocation()
    console.log(location)

    const renderListIcon = (iconName: string) => {
        const icon = listIcon.find((item) => item.key === iconName)
        return icon?.value
    }

    return (
        <ul className={styles.navbarPage}>
            {listMenus &&
                listMenus.map(item => {
                    return (
                        <li
                            key={item.id}
                            className={[
                                item.href === location.pathname &&
                                styles.actionLink
                            ].join(" ")}
                        >
                            <Link to={item.href}>
                                <span>
                                    {renderListIcon(item.icon || " ")}
                                </span>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
        </ul>
    )
}

export default NavbarAdmin
