import { Carousel } from "antd"
import style from "./index.module.scss"

const CarouselItem = (props: any) => {
    return (
        <div
            className={style.carouselPage}
            style={{ backgroundImage: `url(${props?.backgroundImage})` }}
        >
            <Carousel autoplay>{props.children}</Carousel>
        </div>
    )
}

export default CarouselItem
