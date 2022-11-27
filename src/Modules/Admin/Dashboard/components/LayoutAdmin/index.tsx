import React from "react"
import DropdownCustom from "../../../../../components/DropdownCustom"
import NavbarAdmin from "../NavbarAdmin"
import styles from "./index.module.scss"
import { Menu, MenuProps } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

const LayoutAdmin = ({ children }: any) => {
    const handleMenuClick: MenuProps["onClick"] = (e) => {
        console.log("click", e);
    };

    const MenuDropdown = (props: any) => {
        return (
            <Menu
                onClick={handleMenuClick}
                className="menu-dropdown"
                items={[
                    {
                        label: (
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                personal page
                            </a>
                        ),
                        icon: <UserOutlined />,
                        key: "1",
                    },
                    {
                        label: (
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                Logout
                            </a>
                        ),
                        icon: <LogoutOutlined />,
                        key: "2",
                    },
                ]}
            />
        )
    }
    return (
        <div className={styles.layoutAdmin}>
            <div className={styles.layoutMain}>
                <h3>Quản lý khách sạn</h3>
                <NavbarAdmin />
            </div>
            <div className={styles.headerRight}>
                <div className={styles.headerDrop}>
                    <DropdownCustom titleDropdown="mit" menuDropdown={MenuDropdown} />
                </div>
                <div className={styles.titleHeader}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default LayoutAdmin