import React from 'react'
import ButtonCustom from '../../../../../components/ButtonCustom'
import styles from './index.module.scss'
import {
    EditOutlined,
    PlusOutlined,
    SearchOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import { Table } from 'antd';
import InputCustom from '../../../../../components/InputCustom';

const Staff = () => {
    const listColumnStaffs = [
        {
            title: "#No",
            dataIndex: "id",
            width: "5%"
        },
        {
            title: "Mã nhân viên",
            dataIndex: "id_staff",
            width: "10%"
        },
        {
            title: "Tên nhân viên",
            dataIndex: "name_staff",
            width: "10%"
        },
        {
            title: "Giới tính",
            dataIndex: "sex",
            width: "10%"
        },
        {
            title: "Số điện thoại",
            dataIndex: "sdt",
            width: "10%"
        },
        {
            title: "Email",
            dataIndex: "email",
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
                            // onClick={() => editContractor(record.id)}
                            prefix={<EditOutlined />}
                            color="#D96B06"
                            bg='#fff'
                        />
                        <ButtonCustom
                            // onClick={() => editContractor(record.id)}
                            prefix={<DeleteOutlined />}
                            color="#D96B06"
                            bg='#fff'
                        />
                    </div>
                )
            }
        },
    ]

    const dataSource = [
        {
            key: '1',
            'id': 1,
            "id_staff": 'P01',
            "name_staff": 'P101',
            'status': 'Đã book',
            'email': 'Phòng ở',
            'description': '2020',
            'sex': 'nam',
            'sdt': '033 706 7403'
        },
        {
            key: '2',
            'id': 2,
            "id_staff": 'P02',
            "name_staff": 'P102',
            'email': 'Chưa book',
            'description': 'Phòng hội nghị',
            'sex': 'nữ',
            'sdt': '033 706 7403'
        },
    ];
    return (
        <div className={styles.staffPage}>
            <div className={styles.addStaff}>
                <ButtonCustom title="Thêm nhân viên" color='#fff' bg='#00859D' prefix={<PlusOutlined />} />
                <InputCustom placeholder='Tìm kiếm theo tên, mã phòng' suffix={<SearchOutlined />} />
            </div>
            <div className={styles.roomTable}>
                <Table
                    columns={listColumnStaffs}
                    dataSource={dataSource}
                    scroll={{ y: 450 }}
                    locale={{ emptyText: "Không có data" }}
                />
            </div>
        </div>
    )
}

export default Staff