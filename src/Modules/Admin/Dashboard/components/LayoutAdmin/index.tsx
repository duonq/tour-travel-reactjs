import React, { useEffect, useState } from "react"
import DropdownCustom from "../../../../../components/DropdownCustom"
import NavbarAdmin from "../NavbarAdmin"
import styles from "./index.module.scss"
import { Menu, MenuProps } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { AuthService } from "../../../services/api";
import { clearStorage } from "../../../../../shared/function";
import { useNavigate } from "react-router";

const LayoutAdmin = ({ children }: any) => {
    const router = useNavigate()
    const handleMenuClick: MenuProps["onClick"] = (e) => {
        console.log("click", e);
    };

    const [username, setUsername] = useState('')

    useEffect(() => {
        getMyProfile()
      }, [])
      
      
      const getMyProfile = async () => {
          const resData = await AuthService.getMyProfile()
          const username = resData.data.data.name
          setUsername(username)
      }

    const MenuDropdown = (props: any) => {
        return (
            <Menu
                onClick={handleMenuClick}
                className="menu-dropdown"
                items={[
                    // {
                    //     label: (
                    //         <a href="/" target="_blank" rel="noopener noreferrer">
                    //             personal page
                    //         </a>
                    //     ),
                    //     icon: <UserOutlined />,
                    //     key: "1",
                    // },
                    {
                        label: (
                            <a onClick={() => handleLogout()}>
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


    const handleLogout = () => {
        clearStorage()
        router('/')
    }
    return (
        <div className={styles.layoutAdmin}>
            <div className={styles.layoutMain}>
                <h3>Quản lý khách sạn</h3>
                <NavbarAdmin />
            </div>
            <div className={styles.headerRight}>
                <div className={styles.headerDrop}>
                    <DropdownCustom titleDropdown={username} menuDropdown={MenuDropdown} />
                </div>
                <div className={styles.titleHeader}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default LayoutAdmin
