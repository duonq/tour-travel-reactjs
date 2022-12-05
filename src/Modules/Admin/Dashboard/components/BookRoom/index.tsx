import React, { useState } from 'react'
import {
    CaretDownOutlined,
    SearchOutlined,
    EditOutlined
} from '@ant-design/icons';
import InputCustom from '../../../../../components/InputCustom';
import styles from './index.module.scss'
import { Table } from 'antd';
import { useNavigate } from 'react-router';
import { Form } from "antd"
import { TypeInputCustom } from '../../../../../shared/emuns';
import ButtonCustom from '../../../../../components/ButtonCustom';

const BookRoom = () => {
    const router = useNavigate()
    const [form] = Form.useForm()
    const listFilter = [
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
    const listColumnRoomManager = [
        {
            title: "#No",
            dataIndex: "id",
            width: "5%"
        },
        {
            title: "Mã đặt phòng",
            dataIndex: "id_room",
            width: "10%"
        },
        {
            title: "Tên phòng",
            dataIndex: "name_room",
            width: "10%"
        },
        {
            title: "Tên khách hàng",
            dataIndex: "name_customer",
            width: "10%"
        },
        {
            title: "Thành tiền",
            dataIndex: "dola",
            width: "10%"
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            width: "10%"
        },
        {
            title: "Đặt cọc",
            dataIndex: "deposit",
            width: "10%"
        },
        {
            title: "",
            dataIndex: "deposit",
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
            'type': 'Phòng ở',
            'deposit': '2020'
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
            <Form
                form={form}
                className={styles.groupInput}
            >
                <div className={styles.filterStyle}>
                    <InputCustom
                        form={form}
                        suffix={<CaretDownOutlined />}
                        listOptions={listFilter}
                        placeholder="Bộ lọc trạng thái"
                        name="contractAttribute"
                        typeInput={TypeInputCustom.select}
                    />
                </div>
                <div className={styles.inputSearch}>
                    <InputCustom
                        form={form}
                        name="search"
                        placeholder='Tìm kiếm key'
                        suffix={
                            <SearchOutlined
                            // onClick={() => handleSearchForm()}
                            />
                        }
                    />
                </div>
            </Form>
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

export default BookRoom