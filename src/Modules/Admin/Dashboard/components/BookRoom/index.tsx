import React, { useEffect, useState } from 'react'
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
import ModelConfirm from '../../../../../components/ModalCustom';
import { ApiService } from '../../../services/api';
import moment from "moment"

const BookRoom = () => {
    const router = useNavigate()
    const [form] = Form.useForm()
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
    const listColumnRoomManager = [
        {
            title: "Mã phòng",
            dataIndex: "id",
            width: "10%"
        },
        {
            title: "Tên phòng",
            dataIndex: "roomName",
            width: "10%"
        },
        {
            title: "Tên khách hàng",
            dataIndex: "customerName",
            width: "10%"
        },
        {
            title: "Thành tiền",
            dataIndex: "price",
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
            title: "Ngày checkin",
            dataIndex: "checkinDate",
            width: "10%"
        },
        {
            title: "Ngày checkout",
            dataIndex: "checkoutDate",
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
        setVisible(true)
        // router(`admin/edit/${id}`)
    }
    const [visible, setVisible] = useState(false)
    const [dataBooking, setDataBooking] = useState([])
    const [status, setStatus] = useState()

    useEffect(() => {
        getListBooking()
    }, [])

    useEffect(() => {
        getListBooking()
    }, [status])

    const changeStatusBooking = async (e: any) => {
        setStatus(e)
    }

    const getListBooking = async () => {
        const resData = await ApiService.getListBooking(status)
        const dataBooking = resData.data.data.data
        for (let idx = 0; idx < dataBooking.length; idx++) {
            let arrRoomName = [] as any
            let price = 0
            dataBooking[idx].key = idx + 1
            dataBooking[idx].bookingRooms.map((item: any) => {
                arrRoomName.push(item?.room?.name)
                price = price + item?.room?.price
            })
            dataBooking[idx].roomName = arrRoomName.toString()
            dataBooking[idx].customerName = dataBooking[idx]?.customer?.name
            dataBooking[idx].price = price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
            dataBooking[idx].status = listFilterStatus.find((item: any) => item.value === dataBooking[idx].status)?.label
            dataBooking[idx].checkinDate = moment(dataBooking[idx].checkinDate).format('YYYY-MM-DD HH:mm:ss')
            dataBooking[idx].checkoutDate = moment(dataBooking[idx].checkoutDate).format('YYYY-MM-DD HH:mm:ss')
        }

        setDataBooking(dataBooking)

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
                        listOptions={listFilterStatus}
                        handleOnChange={(e) => changeStatusBooking(e)}
                        placeholder="Bộ lọc trạng thái"
                        name="contractAttribute"
                        typeInput={TypeInputCustom.select}
                    />
                </div>
                {/* <div className={styles.inputSearch}>
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
                </div> */}
            </Form>
            <div className={styles.roomTable}>
                <Table
                    columns={listColumnRoomManager}
                    dataSource={dataBooking}
                    scroll={{ y: 450 }}
                    locale={{ emptyText: "Không có data" }}
                />
            </div>
            <ModelConfirm
                visible={visible}
                onClosePopup={() => setVisible(false)}
                toggleModel={() => setVisible(false)}
                // onOk={deleteRoom}
                title='Bạn có muốn xóa?'
            />
        </div>
    )
}

export default BookRoom