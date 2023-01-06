import { Form } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import ButtonCustom from '../../../../../components/ButtonCustom'
import InputCustom from '../../../../../components/InputCustom'
import { ruleName, rulePasswordLogin, ruleValidateEmail } from '../../../../../shared/constants'
import { StatusCode, TypeInputCustom, TypeNotification } from '../../../../../shared/emuns'
import { NotificationCustom } from '../../../../../shared/function'
import { ApiService } from '../../../services/api'
import styles from './index.module.scss'
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons"

const AddUser = () => {
    const [form] = Form.useForm()
    const router = useNavigate()
    const chooseGender = [
        {
            value: 1,
            label: "Nam"
        },
        {
            value: 2,
            label: "Nữ"
        },
        {
            value: 3,
            label: "Khác"
        }
    ]

    const [showPassword, setShowPassword] = useState(false)
    const createUSer = async (value: any) => {
        const resData = await ApiService.createUser(value)
        const { status, data } = resData
        if (status === StatusCode.created) {
            NotificationCustom({
                type: TypeNotification.success,
                message: data.data.message,
            })
            setTimeout(() => {
                router('/admin/quan-ly-nhan-vien')
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
                <Form form={form} onFinish={createUSer}>
                    <h3>Thêm mới</h3>
                    <InputCustom
                        form={form}
                        title='Email'
                        rules={ruleValidateEmail}
                        placeholder='Nhập email'
                        name='email'
                        required
                    />
                    <InputCustom
                        title="Password"
                        name="password"
                        placeholder='Nhập password'
                        form={form}
                        rules={rulePasswordLogin}
                        classCustomLabel={styles.inputFirst}
                        suffix={
                            showPassword ? (
                                <EyeOutlined
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                />
                            ) : (
                                <EyeInvisibleOutlined
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                />
                            )
                        }
                        typeInput={
                            showPassword
                                ? TypeInputCustom.text
                                : TypeInputCustom.password
                        }
                        required
                    />
                    <InputCustom
                        form={form}
                        title='Tên'
                        rules={ruleName}
                        placeholder='Nhập tên'
                        name='name'
                        required
                    />
                    <InputCustom
                        form={form}
                        listOptions={chooseGender}
                        placeholder="Chọn giới tính"
                        title='Giới tính'
                        name="gender"
                        typeInput={TypeInputCustom.select}
                    />
                    <InputCustom
                        typeInput={TypeInputCustom.text}
                        form={form}
                        title=' Số điện thoại'
                        placeholder='Nhập số điện thoại'
                        name="phoneNumber"
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

export default AddUser