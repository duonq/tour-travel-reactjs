import { Form } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import ButtonCustom from '../../../../../components/ButtonCustom'
import InputCustom from '../../../../../components/InputCustom'
import InputImage from '../../../../../components/InputImage'
import { StatusCode, TypeInputCustom, TypeNotification } from '../../../../../shared/emuns'
import { NotificationCustom } from '../../../../../shared/function'
import { ApiService } from '../../../services/api'
import styles from './index.module.scss'

const AddRoom = () => {
    const [id, setId] = useState<number>()

    useEffect(() => {
        const routerEdit = '/admin/quan-ly-phong/edit/'
        if (window.location.pathname.includes(routerEdit)) {
            const arr = window.location.pathname.split(routerEdit)
            setId(Number(arr[1]))
            roomDetail(Number(arr[1]))
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

    const createRoom = async (Value: any) => {
        if (!id) {
            Value.price = Number(Value.price)
            const resData = await ApiService.createRoom(Value)
            const { status, data } = resData
            if (status === StatusCode.created) {
                NotificationCustom({
                    type: TypeNotification.success,
                    message: "Tạo mới phòng thành công"
                })
                setTimeout(() => {
                    router('/admin/quan-ly-phong')
                }, 1500);
            } else {
                NotificationCustom({
                    type: TypeNotification.error,
                    message: data.errorMessage
                })
                form.resetFields()
            }
        } else {
            Value.price = Number(Value.price)
            const resData = await ApiService.updateRoom(id, Value)
            const { status, data } = resData
            if (status === 200) {
                NotificationCustom({
                    type: TypeNotification.success,
                    message: "Cập nhật thông tin phòng thành công"
                })
                setTimeout(() => {
                    router('/admin/quan-ly-phong')
                }, 1500);
            } else {
                NotificationCustom({
                    type: TypeNotification.error,
                    message: data.errorMessage
                })
                form.resetFields()
            }
        }
    }

    const changeValueImage = (nameImage: any, urlImage: any) => {
        console.log(12121, nameImage, urlImage)
        // form.setFieldsValue({
        //     [nameImage]: urlImage
        // })
    }
    return (
        <div className={styles.AddRoomStyle}>
            <div>
                <Form form={form} onFinish={createRoom}>
                    <h3>Thêm mới</h3>
                    <InputCustom
                        form={form}
                        title='Tên phòng'
                        placeholder='Nhập tên phòng'
                        name="name"
                    />
                    <InputCustom
                        form={form}
                        listOptions={chooseTypeRoom}
                        placeholder="Chọn loại phòng"
                        title='Loại phòng'
                        name="type"
                        typeInput={TypeInputCustom.select}
                    />
                    <InputCustom
                        typeInput="number"
                        form={form}
                        title='Giá phòng'
                        placeholder='Nhập giá phòng'
                        name="price"
                    />
                    <InputCustom
                        form={form}
                        placeholder="Viết mô tả"
                        title='Mô tả'
                        name="description"
                        typeInput={TypeInputCustom.textarea}
                    />
                    {/* <InputCustom
                        name="file"
                        form={form}
                        typeInput={TypeInputCustom.image}
                    /> */}
                    <div className={styles.groupBtn}>
                        <ButtonCustom title="Quay lại" color='#000' bg='#F2F2FA' onClick={() => router(-1)} />
                        <ButtonCustom title="Lưu" bg='#BD5364' color='#fff' type="submit" />
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default AddRoom