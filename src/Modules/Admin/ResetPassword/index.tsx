import React, { useEffect, useState } from "react"
import styles from "./index.module.scss"
import { Form } from "antd"
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router"
import { ITypeResetPassword } from "../../../shared/@types"
import InputCustom from "../../../components/InputCustom"
import { StatusCode, TypeInputCustom, TypeNotification } from "../../../shared/emuns"
import ButtonCustom from "../../../components/ButtonCustom"
import { ruleConfirmPasswordLogin, rulePasswordLogin } from "../../../shared/constants"
import { NotificationCustom } from "../../../shared/function"
import { AuthService } from "../services/api"


const ResetPassword = () => {
    const router = useNavigate()
    const [formReset] = Form.useForm()
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
    const onFinish = async (inputVal: ITypeResetPassword) => {
        try {
            const dataForgotpass = {
                password: inputVal.password,
                token: window.location.search.split('?token=')[1]
            }
          
            const resData =  await AuthService.changePassword(dataForgotpass)
            const { status } = resData
            if (status === StatusCode.created) {
                NotificationCustom({
                    type: TypeNotification.success,
                    message: 'Thay đổi mật khẩu thành công'
                })
                setTimeout(() => {
                    router('/login')
                }, 1000)
            } else {
                NotificationCustom({
                    type: TypeNotification.error,
                    message: 'Lỗi thay đổi mật khẩu'
                })
                formReset.resetFields()
            }
        } catch (error) {
            throw error
        }
    }

    // useEffect(() => {
    //     const callApiValiToken = async () => {
    //         try {
    //             let search = window.location.search
    //             const code = new URLSearchParams(search).get("code")
    //             const inputVal = {
    //                 code,
    //                 type: routerResetPWAdmin
    //                     ? TypeRole.admin
    //                     : TypeRole.contractor
    //             }
    //             const getCode = await ContactService.postCheckCodeValidateToken(
    //                 inputVal
    //             )
    //             const { status, data } = getCode
    //             if (status === StatusCode.bad_request) {
    //                 NotificationCustom({
    //                     type: TypeNotification.error,
    //                     message: data.message
    //                 })
    //                 setTimeout(() => {
    //                     router.push(RouterName.login)
    //                 }, 1000)
    //             }
    //         } catch (error) {
    //             throw error
    //         }
    //     }
    //     callApiValiToken()
    // }, [])
    return (
        <div className={styles.resetPw}>
            <div className={styles.resetForm}>
                <Form
                    form={formReset}
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <h1>Đặt lại mật khẩu</h1>
                    <InputCustom
                        title="Password"
                        name="password"
                        form={formReset}
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
                        title="Xác nhận password"
                        name="confirmPassword"
                        form={formReset}
                        rules={ruleConfirmPasswordLogin}
                        suffix={
                            showPasswordConfirm ? (
                                <EyeOutlined
                                    onClick={() =>
                                        setShowPasswordConfirm(
                                            !showPasswordConfirm
                                        )
                                    }
                                />
                            ) : (
                                <EyeInvisibleOutlined
                                    onClick={() =>
                                        setShowPasswordConfirm(
                                            !showPasswordConfirm
                                        )
                                    }
                                />
                            )
                        }
                        typeInput={
                            showPasswordConfirm
                                ? TypeInputCustom.text
                                : TypeInputCustom.password
                        }
                        required
                    />
                    <ButtonCustom
                        type="submit"
                        title="Đặt lại"
                        bg="#00859D"
                        color="#fff"
                    />
                </Form>
            </div>
        </div>
    )
}

export default ResetPassword
