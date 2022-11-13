import { Tag } from 'antd'
import React from 'react'
import style from "./index.module.scss"

const NavBarLeft = () => {
    const listPost = [
        {
            id: 1,
            title: "A Couple Trip",
            href: "",
            date: "March 23, 2020",
            img: "https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/pinterest-blog-img-12.jpg"
        },
        {
            id: 2,
            title: "Plan Every Minute",
            href: "",
            date: "March 23, 2020",
            img: "https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/pinterest-blog-img-10.jpg"
        },
        {
            id: 3,
            title: "Enjoy Your Work Trip",
            href: "",
            date: "March 23, 2020",
            img: "https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/pinterest-blog-img-12.jpg"
        }
    ]
    return (
        <div className={style.navbarLeft}>
            <h5>Các bài viết phổ biến</h5>
            {listPost && listPost.map((item, index) => {
                return (
                    <div key={index} className={style.tripsStyle}>
                        <img src={item.img} alt="" />
                        <div className={style.daysStyle}>
                            <p>{item.title}</p>
                            <p>{item.date}</p>
                        </div>
                    </div>
                )
            })}
            <div className={style.categoriStyle}>
                <h3>Categories</h3>
                <ul>
                    <li>City Guide</li>
                    <li>City Gui     de</li>
                    <li>City Guide</li>
                    <li>City Guide</li>
                    <li>City Guide</li>
                </ul>
            </div>
            <div className={style.categoriStyle}>
                <h3>Tags</h3>
                <div>
                    <Tag>City</Tag>
                    <Tag>Travel</Tag>
                    <Tag>Hotel</Tag>
                </div>
            </div>
            <div className={style.infoStyle}>
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis unde iste rem non delectus, laudantium minus odio eius recusandae labore distinctio impedit minima esse quasi totam explicabo velit hic necessitatibus.</p>
                <img src="https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/blog-sidebar-img-1.png" alt="" />
            </div>
        </div>
    )
}

export default NavBarLeft