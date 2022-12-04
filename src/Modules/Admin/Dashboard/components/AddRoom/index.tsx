import { Form } from 'antd'
import React from 'react'
import InputCustom from '../../../../../components/InputCustom'
import { TypeInputCustom } from '../../../../../shared/emuns'
import styles from './index.module.scss'

const AddRoom = () => {
    const [form] = Form.useForm()
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
    return (
        <div className={styles.AddRoomStyle}>
            <div>
                <h3>Thêm mới</h3>
                <Form form={form}>
                    <InputCustom
                        form={form}
                        title='Tên phòng'
                        placeholder='Nhập tên phòng'
                        name="name_room"
                    />
                    <InputCustom
                        form={form}
                        listOptions={chooseTypeRoom}
                        placeholder="Chọn loại phòng"
                        title='Loại phòng'
                        name="type_room"
                        typeInput={TypeInputCustom.select}
                    />
                    <InputCustom
                        form={form}
                        title='Giá phòng'
                        placeholder='Nhập giá phòng'
                        name="price_room"
                    />
                    <InputCustom
                        form={form}
                        title='Mã giảm giá'
                        placeholder='Nhập mã giảm giá'
                        name="price_sale"
                    />
                    <InputCustom
                        form={form}
                        placeholder="Viết mô tả"
                        title='Mô tả'
                        name="description"
                        typeInput={TypeInputCustom.textarea}
                    />
                    <InputCustom
                        form={form}
                        placeholder="Ghi chú"
                        title='Ghi chú'
                        name="note"
                        typeInput={TypeInputCustom.textarea}
                    />
                </Form>
            </div>
        </div>
    )
}

export default AddRoom