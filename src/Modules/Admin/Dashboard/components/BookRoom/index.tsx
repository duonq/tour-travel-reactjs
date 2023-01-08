import React, { useEffect, useState } from 'react'
import {
    CaretDownOutlined,
    EditOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import InputCustom from '../../../../../components/InputCustom';
import styles from './index.module.scss'
import { Modal, Table, Pagination } from 'antd';
import { useNavigate } from 'react-router';
import { Form } from "antd"
import { TypeInputCustom, TypeNotification } from '../../../../../shared/emuns';
import ButtonCustom from '../../../../../components/ButtonCustom';
import ModelConfirm from '../../../../../components/ModalCustom';
import { ApiService } from '../../../services/api';
import moment from "moment"
import { NotificationCustom } from '../../../../../shared/function';

const BookRoom = () => {
    const router = useNavigate()
    const [formUpdate] = Form.useForm()
    const [form] = Form.useForm()
    const [id, setId] = useState<any>()
    const [email, setEmail] = useState<any>()
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
            title: "Id",
            dataIndex: "id",
            width: "5%"
        },
        {
            title: "Tên phòng",
            dataIndex: "roomName",
            width: "10%"
        },
        {
            title: "Tên khách hàng",
            dataIndex: "customerName",
            width: "12%"
        },
        {
            title: "Email",
            dataIndex: "email",
            width: "15%"
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
            title: "Ngày ở",
            dataIndex: "checkinCheckout",
            width: "20%"
        },
        // {
        //     title: "Ngày checkin",
        //     dataIndex: "checkinDate",
        //     width: "10%"
        // },
        {
            title: "Thời gian đặt phòng",
            dataIndex: "createdAt",
            width: "15%"
        },
        {
            title: "Tùy chọn",
            dataIndex: "id",
            width: "8%",
            render: (text: any, record: any): any => {
                return (
                    <div className={styles.groupBtn}>
                        <ButtonCustom
                            onClick={() => editBooking(record)}
                            prefix={<EditOutlined />}
                            color="#D96B06"
                            bg='#fff'
                        />
                        <ButtonCustom
                            onClick={() => deleteBook(record)}
                            prefix={<DeleteOutlined />}
                            color="#D96B06"
                            bg='#fff'
                        />
                    </div>
                )
            }
        },

    ]
    function editBooking(record: any) {
        const { status, deposit } = record
        const statusRecord = listFilterStatus.find((item: any) => item.label === status)?.value
        setId(record.id)
        formUpdate.setFieldsValue({
            status: statusRecord,
            deposit: (deposit.split(' VND')[0].replace('.', ''))
        })
        setVisibleEdit(true)

    }

    function deleteBook(record: any) {
        setId(record.id)
        setEmail(record.email)
        setVisible(true)
    }

    const [visible, setVisible] = useState(false)
    const [visibleEdit, setVisibleEdit] = useState(false)
    const [dataBooking, setDataBooking] = useState([])
    const [status, setStatus] = useState()
    const [take, setTake] = useState(10)
    const [current, setCurrent] = useState(1);
    const [totalItem, setTotalItem] = useState(0);

    useEffect(() => {
        getListBooking()
    }, [])

    useEffect(() => {
        getListBooking()
    }, [status, current])

    const changeStatusBooking = async (e: any) => {
        setStatus(e)
    }

    const onChange = async (page: number) => {
        setCurrent(page);
    };

    const updateBooking = async (value: any) => {
        value.deposit = Number(value.deposit)
        const resData = await ApiService.updateBooking(id, value)
        const { status, data } = resData
        if (status === 200) {
            NotificationCustom({
                type: TypeNotification.success,
                message: "Cập nhật thông tin booking thành công"
            })
            getListBooking()
            setVisibleEdit(false)
        } else {
            NotificationCustom({
                type: TypeNotification.error,
                message: data.errorMessage
            })
        }
    }

    const getListBooking = async () => {
        const resData = await ApiService.getListBooking(status, take, current)
        const dataBooking = resData.data.data.data
        setTotalItem(resData.data.data.total)
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
            dataBooking[idx].email = dataBooking[idx]?.customer?.email
            dataBooking[idx].price = price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
            dataBooking[idx].deposit = dataBooking[idx]?.deposit.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
            dataBooking[idx].status = listFilterStatus.find((item: any) => item.value === dataBooking[idx].status)?.label
            // dataBooking[idx].checkinDate = moment(dataBooking[idx].checkinDate).format('YYYY-MM-DD HH:mm:ss')
            // dataBooking[idx].checkoutDate = moment(dataBooking[idx].checkoutDate).format('YYYY-MM-DD HH:mm:ss')
            dataBooking[idx].checkinCheckout = moment(dataBooking[idx].checkinDate).format('YYYY/MM/DD HH:mm') + ' - ' + moment(dataBooking[idx].checkoutDate).format('YYYY/MM/DD HH:mm')
            dataBooking[idx].createdAt = moment(dataBooking[idx].createdAt).format('YYYY/MM/DD HH:mm')
        }
        setDataBooking(dataBooking)
    }

    const deleteBooking = async () => {
        const resData = await ApiService.deleteBooking(id, { email })
        const { status, data } = resData
        if (status === 200) {
            NotificationCustom({
                type: TypeNotification.success,
                message: "Xóa booking thành công"
            })
            getListBooking()
            setVisibleEdit(false)
        } else {
            NotificationCustom({
                type: TypeNotification.error,
                message: data.errorMessage
            })
        }
    }


    const chooseTypeBooking = [
        {
            value: 1,
            label: 'Chưa đặt cọc'
        },
        {
            value: 2,
            label: 'Đã đặt cọc'
        },
        {
            value: 3,
            label: 'Đã thanh toán'
        },
    ]
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
                    scroll={{ y: 500 }}
                    locale={{ emptyText: "Không có data" }}
                    pagination={false}
                />
                <Pagination current={current} onChange={onChange} total={totalItem} pageSize={take} />
            </div>
            <ModelConfirm
                visible={visible}
                onClosePopup={() => setVisible(false)}
                toggleModel={() => setVisible(false)}
                onOk={() => deleteBooking()}
                title='Bạn có muốn xóa?'
            />

            <Modal
                visible={visibleEdit}
                onCancel={() => setVisibleEdit(false)}
                onOk={() => setVisibleEdit(false)}
                title='Cập nhật book phòng'
                footer={null}
                className={styles.modalStyle}
            >
                <Form form={formUpdate} onFinish={updateBooking}>
                    <InputCustom
                        form={formUpdate}
                        listOptions={chooseTypeBooking}
                        placeholder="Chọn loại phòng"
                        title='Loại phòng'
                        name="status"
                        typeInput={TypeInputCustom.select}
                    />
                    <InputCustom
                        typeInput="number"
                        form={formUpdate}
                        title='Đặt cọc'
                        placeholder='Nhập giá tiền đặt cọc'
                        name="deposit"
                    />
                    <div className={styles.groupBtn}>
                        <ButtonCustom title="Quay lại" color='#000' bg='#F2F2FA' onClick={() => setVisibleEdit(false)} />
                        <ButtonCustom title="Lưu" bg='#BD5364' color='#fff' type="submit" />
                    </div>
                </Form>
            </Modal>
        </div >
    )
}

export default BookRoom