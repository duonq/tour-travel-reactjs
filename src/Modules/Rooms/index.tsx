import { Form } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import ButtonCustom from '../../components/ButtonCustom'
import ButtomCustom from '../../components/ButtonCustom'
import InputCustom from '../../components/InputCustom'
import SlideImage from '../../components/SlideImage'
import { ApiService } from '../Admin/services/api'
import { listRooms } from '../HomePage/shared/constants'
import style from './index.module.scss'
import moment from "moment"

const Rooms = () => {
    const router = useNavigate()
    const redirectItem = () => {
        router('/room-item')
    }
    const listFilterStatus = [
        {
            value: 1,
            label: "Chưa đặt cọc"
        },
        {
            value: 2,
            label: "Đã đặt cọc"
        },
        {
            value: 3,
            label: "Đã thanh toán"
        }
    ]

    const [dataSearch, setInputSearch] = useState('')
    const [listRoom, setListRoom] = useState([])

    useEffect(() => {
        getListRoom()
    }, [])

    const getListRoom = async () => {
        const resData = await ApiService.getListRoom(dataSearch)
        const listRoom = resData.data.data
        for (let idx = 0; idx < listRoom.length; idx++) {
            if (listRoom[idx].type === 1) listRoom[idx].type = "Phòng ở"
            else listRoom[idx].type = "Phòng hội nghị"

            if (listRoom[idx].isBooked === 0) listRoom[idx].isBooked = 'Còn trống'
            else listRoom[idx].isBooked = 'Đã được book'
            listRoom[idx].key = idx + 1
        }
        console.log(121212, listRoom)
        setListRoom(listRoom)
    }

    return (
        <div className={style.roomsPage}>
            <SlideImage backgroundImage={'https://duchuygrandhotel.com/wp-content/uploads/2019/08/hotel-check-out.jpg'}>
                <h1>Hotel Room</h1>
            </SlideImage>
            <div className={style.searchKey}>
                <Form>
                    <InputCustom placeholder='Tìm kiếm từ ...' handleOnChange={(e) => { setInputSearch(e.target.value) }} />
                    <ButtonCustom title="Search" bg='#C19B76' color='#fff' onClick={getListRoom} />
                </Form>
            </div>
            <div className={style.roomsList}>
                {listRoom && listRoom.map((item: any) => {
                    return (
                        <div key={item.id}>
                            <div className={style.imageRoom}>
                                {/* <img src={`http://localhost:8000/uploads/` + item.thumbnail} alt="" /> */}
                                <img src={'https://duchuygrandhotel.com/wp-content/uploads/2015/10/Senior-Suite-Room-600.jpg'} alt="" />
                            </div>
                            <div className={style.infoRoom}>
                                <h3>{item.name}</h3>
                                <h4>{item.type}</h4>
                                <p>{item.description}</p>

                            </div>
                            <div className={style.priceRoom}>
                                <h5>Giá/1 ngày đêm</h5>
                                <h2>{item.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</h2>
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