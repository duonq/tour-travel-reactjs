import { DatePicker, DatePickerProps, Form } from 'antd'
import React, { useState } from 'react'
import ButtonCustom from '../../components/ButtonCustom'
import InputCustom from '../../components/InputCustom'
import { ruleRequired, ruleValidateEmail } from '../../shared/constants'
import { StatusCode, TypeInputCustom, TypeNotification } from '../../shared/emuns'
import { NotificationCustom } from '../../shared/function'
import { ApiService } from '../Admin/services/api'
import styles from './index.module.scss'

const BookingPage = () => {
    const [checkinDate, setCheckinDate] = useState("")
    const [checkoutDate, setCheckoutDate] = useState("")

    const [form] = Form.useForm()
    const onChangeCheckinDate: DatePickerProps['onChange'] = (date, dateString) => {
        setCheckinDate(dateString)
    }

    const onChangeCheckoutDate: DatePickerProps['onChange'] = (date, dateString) => {
        setCheckoutDate(dateString)
    }

    const onFinish = async (payload: any) => {
        payload.status = 1
        payload.checkinDate = checkinDate
        payload.checkoutDate = checkoutDate
        const resData = await ApiService.createBooking(payload)
        const { status, data } = resData
        if (status === StatusCode.created) {
            NotificationCustom({
                type: TypeNotification.success,
                message: data.data.message,
            })
        } else {
            NotificationCustom({
                type: TypeNotification.error,
                message: data.errorMessage
            })
        }
        form.resetFields()
    }

    const config = {
        rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }],
    };

    return (
        <div className={styles.bookingPage}>
            <div className={styles.formBook}>
                <Form form={form} onFinish={onFinish}>
                    <h3>Đặt phòng</h3>
                    <div className={styles.formInfor}>
                        <div className={styles.inputStyle}>
                            <div>
                                <label>Ngày đến <span className={styles.required}>(*)</span></label>
                                <DatePicker onChange={onChangeCheckinDate} showTime placeholder="Ngày đến" />
                            </div>
                            <InputCustom title='Người lớn' name='adult' rules={ruleRequired} classCustomLabel={styles.inputInfor} required />
                        </div>
                        <div className={styles.inputStyle}>
                            <div>
                                <label>Ngày đi <span className={styles.required}>(*)</span></label>
                                <DatePicker onChange={onChangeCheckoutDate} showTime placeholder="Ngày đi" />
                            </div>
                            <InputCustom title='Trẻ em' name='child' rules={ruleRequired} classCustomLabel={styles.inputInfor} required />
                        </div>
                        <div className={styles.infoStyle}>
                            <div>
                                <h4>Thông tin của bạn</h4>
                                <InputCustom title='Họ và Tên' name="name" placeholder='Nhập họ và tên' rules={ruleRequired} classCustomLabel={styles.inputInfor} required />
                                <InputCustom title='Email' name='email' placeholder='Nhập email' rules={ruleValidateEmail} classCustomLabel={styles.inputInfor} required />
                                <InputCustom title='SĐT' name='phoneNumber' placeholder='Nhập sđt' rules={ruleRequired} classCustomLabel={styles.inputInfor} required />
                                <InputCustom title='CMND/CCCD' name='idCard' placeholder='Nhập CMND/CCCD' rules={ruleRequired} classCustomLabel={styles.inputInfor} required />
                            </div>
                            <div >
                                <InputCustom title='Mã giảm giá' name='code' classCustomLabel={styles.inputInfor} />
                            </div>
                        </div>
                        <ButtonCustom title="Đặt phòng" color='#fff' bg='#b56953' type="submit" />
                    </div>
                </Form>
                <div className={styles.boderStyle}></div>
            </div>
        </div>
    )
}

export default BookingPage