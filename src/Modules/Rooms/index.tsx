import React from 'react'
import { useNavigate } from 'react-router'
import ButtomCustom from '../../components/ButtonCustom'
import SlideImage from '../../components/SlideImage'
import { listRooms } from '../HomePage/shared/constants'
import style from './index.module.scss'

const Rooms = () => {
    const router = useNavigate()
    const redirectItem = () => {
        router('/room-item')
    }
    return (
        <div className={style.roomsPage}>
            <SlideImage backgroundImage={'https://duchuygrandhotel.com/wp-content/uploads/2019/08/hotel-check-out.jpg'}>
                <h1>Hotel Room</h1>
            </SlideImage>
            <div className={style.roomsList}>
                {listRooms && listRooms.map((item) => {
                    return (
                        <div key={item.id}>
                            <div className={style.imageRoom}>
                                <img src={item.img} alt="" />
                            </div>
                            <div className={style.infoRoom}>
                                <h3>{item.name}</h3>
                                <h4>{item.type}</h4>
                                <p>{item.description}</p>

                            </div>
                            <div className={style.priceRoom}>
                                <h5>Price</h5>
                                <h2>{item.price}</h2>
                                <ButtomCustom bg='#C19B76' color='#fff' title='xem chi tiết' onClick={redirectItem} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Rooms