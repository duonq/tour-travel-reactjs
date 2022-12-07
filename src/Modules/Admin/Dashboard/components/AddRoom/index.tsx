import { Form } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import ButtonCustom from '../../../../../components/ButtonCustom'
import InputCustom from '../../../../../components/InputCustom'
import { StatusCode, TypeInputCustom, TypeNotification } from '../../../../../shared/emuns'
import { NotificationCustom } from '../../../../../shared/function'
import { ApiService } from '../../../services/api'
import styles from './index.module.scss'

const AddRoom = () => {
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

      const createRoom = async (Value: any) => {
        Value.price = Number(Value.price)
        const resData = await ApiService.createRoom(Value)
        const {status, data} = resData
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
           
      }
    return (
        <div className={styles.AddRoomStyle}>
            <div>
                <h3>Thêm mới</h3>
                <Form form={form} onFinish={createRoom}>
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