import { DatePicker, DatePickerProps, Form } from 'antd'
import React from 'react'
import ButtonCustom from '../../components/ButtonCustom'
import InputCustom from '../../components/InputCustom'
import { TypeInputCustom } from '../../shared/emuns'
import styles from './index.module.scss'

const BookingPage = () => {
    const [form] = Form.useForm()
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    }
    return (
        <div className={styles.bookingPage}>
            <div className={styles.formBook}>
                <Form form={form}>
                    <h3>Đặt phòng</h3>
                    <div className={styles.formInfor}>
                        <div className={styles.inputStyle}>
                            <div>
                                <label>Ngày đến *</label>
                                <DatePicker onChange={onChange} placeholder="Ngày đến" />
                            </div>
                            <InputCustom title='Người lớn *' classCustomLabel={styles.inputInfor} />
                        </div>
                        <div className={styles.inputStyle}>
                            <div>
                                <label>Ngày đi *</label>
                                <DatePicker onChange={onChange} placeholder="Ngày đi" />
                            </div>
                            <InputCustom title='Trẻ em *' classCustomLabel={styles.inputInfor} />
                        </div>
                        <div className={styles.infoStyle}>
                            <div>
                                <h4>Thông tin của bạn</h4>
                                <InputCustom title='Họ và Tên *' placeholder='Nhập họ và tên' classCustomLabel={styles.inputInfor} />
                                <InputCustom title='Email *' placeholder='Nhập email' classCustomLabel={styles.inputInfor} />
                                <InputCustom title='SĐT *' placeholder='Nhập sđt' classCustomLabel={styles.inputInfor} />
                            </div>
                            <div >
                                <h4>Yêu cầu của bạn</h4>
                                <InputCustom title='Thông điệp / Câu hỏi của bạn' typeInput={TypeInputCustom.textarea} classCustomLabel={styles.inputInfor} />
                            </div>
                        </div>
                        <ButtonCustom title="Đặt phòng" color='#fff' bg='#b56953' />
                    </div>
                </Form>
                <div className={styles.boderStyle}></div>
            </div>
        </div>
    )
}

export default BookingPage