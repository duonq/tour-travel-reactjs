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
import { Pagination, Table } from 'antd';
import { useNavigate } from 'react-router';
import { ApiService } from '../../../services/api';
import ModelConfirm from '../../../../../components/ModalCustom';
import { StatusCode, TypeNotification } from '../../../../../shared/emuns';
import { NotificationCustom } from '../../../../../shared/function';

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
                            onClick={() => getIdRoom(record.id)}
                            prefix={<DeleteOutlined />}
                            color="#BD5364"
                            bg='#fff'
                        />
                    </div>
                )
            }
        },
    ]

    const [dataSearch, setInputSearch] = useState('')

    function editContractor(id: number) {
        console.log(id)
        // router.push(RouterNameAdmin.contractor + "/" + id)
        router(`/admin/quan-ly-phong/edit` + '/' + id)
    }

    const handleSearch = async () => {
        getListRoom()
    }

    const [listRoom, setListRoom] = useState([])
    const [visible, setVisible] = useState(false)
    const [id, setId] = useState(0)
    const [current, setCurrent] = useState(1);
    const [totalItem, setTotalItem] = useState(0);
    const [take, setTake] = useState(10)

    const onChange = async (page: number) => {
        setCurrent(page);
    };

    useEffect(() => {
        getListRoom()
    }, [])

    useEffect(() => {
        getListRoom()
    }, [current])

    const getListRoom = async () => {
        const resData = await ApiService.getListRoom(dataSearch, take, current)
        const listRoom = resData.data.data.data
        setTotalItem(resData.data.data.total)

        for (let idx = 0; idx < listRoom.length; idx++) {
            if (listRoom[idx].type === 1) listRoom[idx].type = "Phòng ở"
            else listRoom[idx].type = "Phòng hội nghị"

            if (listRoom[idx].isBooked === 0) listRoom[idx].isBooked = 'Còn trống'
            else listRoom[idx].isBooked = 'Đã được book'
            listRoom[idx].key = idx + 1
            listRoom[idx].price = listRoom[idx].price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
        }
        setListRoom(listRoom)
    }
    const getIdRoom = async (id: number) => {
        setId(id)
        setVisible(true)
    }

    const deleteRoom = async () => {
        const resData = await ApiService.deleteRoom(id)
        const { status, data } = resData
        setVisible(false)
        if (status === StatusCode.ok) {
            NotificationCustom({
                type: TypeNotification.success,
                message: "Xóa phòng thành công"
            })
            getListRoom()
        } else {
            NotificationCustom({
                type: TypeNotification.error,
                message: 'Xóa phòng thất bại'
            })
        }
    }

    return (
        <div className={styles.RoomManagerPage}>
            <div className={styles.inputSearch}>
                <ButtonCustom title="Thêm mới" color='#fff' bg='#00859D' prefix={<PlusOutlined />} onClick={() => router('/admin/quan-ly-phong/them-moi')} />
                <InputCustom placeholder='Tìm kiếm theo tên, mã phòng' handleOnChange={(e) => { setInputSearch(e.target.value) }} suffix={<SearchOutlined onClick={handleSearch} />} />
            </div>
            <div className={styles.roomTable}>
                <Table
                    columns={listColumnRoomManager}
                    dataSource={listRoom}
                    scroll={{ y: 450 }}
                    pagination={false}
                    locale={{ emptyText: "Không có data" }}
                />
                <Pagination current={current} onChange={onChange} total={totalItem} pageSize={take} />

            </div>

            <ModelConfirm
                visible={visible}
                onClosePopup={() => setVisible(false)}
                toggleModel={() => setVisible(false)}
                onOk={deleteRoom}
                title='Bạn có muốn xóa?'
            />
        </div>
    )
}

export default RoomManager