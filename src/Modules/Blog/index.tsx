import React from 'react'
import SlideImage from '../../components/SlideImage'
import NavBarLeft from '../Event/components/NavbarLeft'
import style from './index.module.scss'

const BlogPage = () => {
    return (
        <div className={style.blogStyle}>
            <SlideImage backgroundImage={'https://alloggio.qodeinteractive.com/wp-content/uploads/2020/04/p6-title-img-02.jpg'}>
                <h1>Blogs</h1>
            </SlideImage>
            <div className={style.mainBlog}>
                <div>
                    <img src="https://alloggio.qodeinteractive.com/wp-content/uploads/2020/03/blog-featured-img-1.jpg" alt="" />
                    <p>March 19, 2020 Amy Burton</p>
                    <h4>Top 5 Restaurants in a Quiet Malmo Street</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit hendrerit faucibus. Suspendisse hendrerit turpis dui, eget ultricies erat consequat ut. Sed ac velit iaculis, condimentum neque eu, maximus urna. Maecenas vitae nunc sit amet risus aliquet facilisis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In facilisis mi sit amet metus sagittis</p>
                </div>
                <div>
                    <NavBarLeft />
                </div>
            </div>
        </div>
    )
}

export default BlogPage