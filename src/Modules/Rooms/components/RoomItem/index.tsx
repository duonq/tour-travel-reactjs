import React from 'react'
import style from './index.module.scss'
import CarouselItem from '../../../../components/CarouselItem'
import SlideImage from '../../../../components/SlideImage'
import { listsImage } from '../../../HomePage/shared/constants'

const RoomItem = () => {
    return (
        <div className={style.itemPage}>
            <SlideImage backgroundImage={'https://duchuygrandhotel.com/wp-content/uploads/2019/08/hotel-check-out.jpg'}>
                <h1>Junior Suite Room</h1>
            </SlideImage>
            <div className={style.infoItem}>
                <div className={style.leftItemPage}>
                    <div className={style.titlePrice}>
                        <h4>Tên phòng</h4>
                        <h5>Giá: Giá phòng</h5>
                    </div>
                    <CarouselItem>
                        {listsImage && listsImage.length > 0 && listsImage.map((item) => {
                            return (
                                <div key={item.id}>
                                    <img src={item.url} alt={item.alt} />
                                </div>
                            )
                        })}
                    </CarouselItem>

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default RoomItem