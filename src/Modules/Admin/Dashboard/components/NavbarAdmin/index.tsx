// import { listMenus } from "@/shared/constants"
import React, { useEffect, useState } from "react"
import { Link, Router, useLocation, useNavigate } from "react-router-dom"
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
import { AuthService } from "../../../services/api";
import { getDataStorage } from "../../../../../shared/function";
import { KeyStorage } from "../../../../../shared/emuns";

const listMenus = [
    {
        id: 1,
        href: "/admin/dashboard",
        title: "Quản doanh thu",
        icon: "tiền"
    },
    {
        id: 2,
        href: "/admin/quan-ly-phong",
        title: "Quản lý phòng",
        icon: "phòng"
    },
    {
        id: 3,
        href: "/admin/book-room",
        title: "Quản lý đặt phòng",
        icon: "giỏ hàng"
    },
    {
        id: 4,
        href: "/admin/quan-ly-nhan-vien",
        title: "Quản lý nhân viên",
        icon: "nhân viên"
    },
    {
        id: 5,
        href: "/admin/quan-ly-khach-hang",
        title: "Quản lý khách hàng",
        icon: "khách hàng"
    },
    {
        id: 6,
        href: "/admin/blogs",
        title: "Quản lý bài viết",
        icon: "khách hàng"
    },
    {
        id: 7,
        href: "/admin/ma-giam-gia",
        title: "Mã giảm giá",
        icon: "sale"
    },
]

const listMenusUser = [
    {
        id: 1,
        href: "/admin/dashboard",
        title: "Lịch dọn phòng",
        icon: "nhân viên"
    }
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
    const router = useNavigate()
    const location = useLocation()
    console.log(location)

    const [roleUser, setRoleUser] = useState(null)

    useEffect(() => {
        checkLogin()
        getMyProfile()
    }, [])

    const checkLogin = async () => {
        const token = getDataStorage(KeyStorage.token)
        if (!token) {
            router('/login')
        }
    }

    const getMyProfile = async () => {
        const resData = await AuthService.getMyProfile()
        const roleUser = resData.data.data.roles.id
        setRoleUser(roleUser)
    }


    const renderListIcon = (iconName: string) => {
        const icon = listIcon.find((item) => item.key === iconName)
        return icon?.value
    }

    return (
        <ul className={styles.navbarPage}>
            {roleUser === 1 &&
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

            {roleUser === 2 &&
                listMenusUser.map(item => {
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
