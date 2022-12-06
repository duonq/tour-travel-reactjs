import React, { useEffect, useState } from 'react'
import ButtonCustom from '../../../../../components/ButtonCustom'
import {
    PlusOutlined,
    SearchOutlined,
    EditOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import InputCustom from '../../../../../components/InputCustom';
import styles from './index.module.scss'
import { Table } from 'antd';
import { useNavigate } from 'react-router';
import { ApiService } from '../../../services/api';

const RoomManager = () => {
    const router = useNavigate()
    const listColumnRoomManager = [
        {
            title: "Mã phòng",
            dataIndex: "id",
            width: "10%"
        },
        {
            title: "Tên phòng",
            dataIndex: "name",
            width: "10%"
        },
        {
            title: "Đơn giá",
            dataIndex: "price",
            width: "10%"
        },
        {
            title: "Loại phòng",
            dataIndex: "type",
            width: "10%"
        },
        {
            title: "Trạng thái",
            dataIndex: "isBooked",
            width: "10%"
        },
        {
            title: "Mô tả",
            dataIndex: "description",
            width: "10%"
        },
        {
            title: "Ngày checkin tiếp theo",
            dataIndex: "nextCheckinDate",
            width: "10%"
        },
        {
            title: "Ngày checkout tiếp theo",
            dataIndex: "nextCheckoutDate",
            width: "10%"
        },
        {
            title: "Tùy chọn",
            dataIndex: "id",
            width: "10%",
            render: (text: any, record: any): any => {
                return (
                    <div className={styles.groupBtn}>
                        <ButtonCustom
                            onClick={() => editContractor(record.id)}
                            prefix={<EditOutlined />}
                            color="#D96B06"
                            bg='#fff'

                        />
                        <ButtonCustom
                            onClick={() => editContractor(record.id)}
                            prefix={<DeleteOutlined />}
                            color="#BD5364"
                            bg='#fff'
                        />
                    </div>
                )
            }
        },
    ]

    function editContractor(id: number) {
        router(`admin/edit/${id}`)
    }

    const [listRoom, setListRoom] = useState([])

    useEffect(() => {
        getListRoom()
      }, [])
      
      const getListRoom = async () => {
            const resData = await ApiService.getListRoom()
            const listRoom = resData.data.data
           for (let idx = 0; idx < listRoom.length; idx++) {
            if (listRoom[idx].type === 1) listRoom[idx].type = "Phòng ở"
            else listRoom[idx].type = "Phòng hội nghị"

            if (listRoom[idx].isBooked === 0) listRoom[idx].isBooked = 'Còn trống'
            else listRoom[idx].isBooked = 'Đã được book'
            listRoom[idx].key = idx  + 1
           }
            setListRoom(listRoom)
      }
      
    return (
        <div className={styles.RoomManagerPage}>
            <div className={styles.inputSearch}>
                <ButtonCustom title="Thêm mới" color='#fff' bg='#00859D' prefix={<PlusOutlined />} onClick={() => router('/admin/quan-ly-phong/them-moi')} />
                <InputCustom placeholder='Tìm kiếm theo tên, mã phòng' suffix={<SearchOutlined />} />
            </div>
            <div className={styles.roomTable}>
                <Table
                    columns={listColumnRoomManager}
                    dataSource={listRoom}
                    scroll={{ y: 450 }}
                    locale={{ emptyText: "Không có data" }}
                />
            </div>
        </div>
    )
}

export default RoomManager