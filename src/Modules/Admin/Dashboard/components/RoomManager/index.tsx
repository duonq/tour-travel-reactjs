import React, { useState } from 'react'
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

const RoomManager = () => {
    const router = useNavigate()
    const listColumnRoomManager = [
        {
            title: "#No",
            dataIndex: "id",
            width: "5%"
        },
        {
            title: "Mã phòng",
            dataIndex: "id_room",
            width: "10%"
        },
        {
            title: "Tên phòng",
            dataIndex: "name_room",
            width: "10%"
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            width: "10%"
        },
        {
            title: "Loại phòng",
            dataIndex: "type",
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

    // const [dataTable, setDataTable] = useState<any[]>([])
    const dataSource = [
        {
            key: '1',
            'id': 1,
            "id_room": 'P01',
            "name_room": 'P101',
            'status': 'Đã book',
            'type': 'Phòng ở'
        },
        {
            key: '2',
            'id': 2,
            "id_room": 'P02',
            "name_room": 'P102',
            'status': 'Chưa book',
            'type': 'Phòng hội nghị'
        },
    ];
    return (
        <div className={styles.RoomManagerPage}>
            <div className={styles.inputSearch}>
                <ButtonCustom title="Thêm mới" color='#fff' bg='#1679B6' prefix={<PlusOutlined />} onClick={() => router('/admin/quanLyPhong/themMoi')} />
                <InputCustom placeholder='Tìm kiếm theo tên, mã phòng' suffix={<SearchOutlined />} />
            </div>
            <div className={styles.roomTable}>
                <Table
                    columns={listColumnRoomManager}
                    dataSource={dataSource}
                    scroll={{ y: 450 }}
                    locale={{ emptyText: "Không có data" }}
                />
            </div>
        </div>
    )
}

export default RoomManager