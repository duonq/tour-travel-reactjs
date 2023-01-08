import { Form } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import ButtonCustom from '../../../../../components/ButtonCustom'
import InputCustom from '../../../../../components/InputCustom'
import InputImage from '../../../../../components/InputImage'
import { ruleRequired } from '../../../../../shared/constants'
import { KeyStorage, StatusCode, TypeInputCustom, TypeNotification } from '../../../../../shared/emuns'
import { getDataStorage, NotificationCustom } from '../../../../../shared/function'
import { ApiService } from '../../../services/api'
import styles from './index.module.scss'
import moment from 'moment'

const AddCounpon = () => {
    const token = getDataStorage(KeyStorage.token)
    const [id, setId] = useState<number>()

    useEffect(() => {
        const routerEdit = '/admin/quan-ly-phong/edit/'
        if (window.location.pathname.includes(routerEdit)) {
            const arr = window.location.pathname.split(routerEdit)
            setId(Number(arr[1]))
        }
    }, [])
    const [form] = Form.useForm()
    const router = useNavigate()
    const chooseTypeRoom = [
        {
            value: 1,
            label: "Phòng ở"
        },
        {
            value: 2,
            label: "Phòng hội nghị"
        }
    ]

    const roomDetail = async (id: any) => {
        const resData = await ApiService.roomDetail(id)
        const { status, data } = resData
        const { name, price, type, description } = data.data
        form.setFieldsValue({
            name: name,
            price: price,
            type: type,
            description: description
        })
    }

    const onFinish = async (Value: any) => {
        Value.couponPersent = Number(Value.couponPersent)
        Value.expriedAt = moment(Value.expriedAt).format('YYYY-MM-DD HH:mm:ss')
        const resData = await ApiService.createCounpon(Value)
        const { status, data } = resData
        if (status === 201) {
            NotificationCustom({
                type: TypeNotification.success,
                message: "Tạo mới mã giảm giá thành công"
            })
            setTimeout(() => {
                router('/admin/ma-giam-gia')
            }, 1500);
        } else {
            NotificationCustom({
                type: TypeNotification.error,
                message: data.errorMessage
            })
            form.resetFields()
        }
    }

    return (
        <div className={styles.AddRoomStyle}>
            <div>
                <Form form={form} onFinish={onFinish}>
                    <h3>Thêm mới</h3>
                    <InputCustom
                        required
                        rules={ruleRequired}
                        form={form}
                        title='Mã giảm giá'
                        placeholder='Nhập mã giảm giá'
                        name="code"
                    />

                    <InputCustom
                        required
                        rules={ruleRequired}
                        typeInput="number"
                        form={form}
                        title='Phần trăm giảm giá'
                        placeholder='Nhập phần trăm giảm giá'
                        name="couponPersent"
                    />
                    <InputCustom
                        required
                        rules={ruleRequired}
                        form={form}
                        placeholder="nhập ngày hết hạn"
                        title='Ngày hết hạn'
                        name="expriedAt"
                        typeInput={TypeInputCustom.date}
                    />
                    <div className={styles.groupBtn}>
                        <ButtonCustom title="Quay lại" color='#000' bg='#F2F2FA' onClick={() => router(-1)} />
                        <ButtonCustom title="Lưu" bg='#BD5364' color='#fff' type="submit" />
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default AddCounpon