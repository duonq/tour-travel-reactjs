
import { Button, Form } from "antd"
import React, { useEffect, useState } from "react"
import styles from "./index.module.scss"

import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons"
import InputCustom from "../../../components/InputCustom"
import { useNavigate } from "react-router"
import { clearStorage } from "../../../shared/function"
import { ILogin } from "../../../shared/@types"
import { TypeInputCustom } from "../../../shared/emuns"
import ButtonCustom from "../../../components/ButtonCustom"
import { rulePasswordLogin, ruleValidateEmail } from "../../../shared/constants"

const Login = () => {
  const [form] = Form.useForm()
  const router = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    clearStorage()
  }, [])

  const onFinish = async (inputVal: ILogin) => {
    try {
      let dataLogin: ILogin = inputVal
      console.log('dataLogin', dataLogin)
      // const resData = await ContactService.postLogin(url, dataLogin)

      // const { status, data } = resData

      // if (status === StatusCode.created) {
      //   setDataStorage(KeyStorage.accessToken, data.access_token)
      //   if (!routerAdmin) {
      //     setDataStorage(
      //       KeyStorage.profile,
      //       JSON.stringify({
      //         identifier: dataLogin.identifier,
      //         username: dataLogin.username,
      //         role: TypeRole.contractor
      //       })
      //     )
      //   } else {
      //     setDataStorage(
      //       KeyStorage.profile,
      //       JSON.stringify({
      //         username: dataLogin.username,
      //         role: TypeRole.admin
      //       })
      //     )

      //     //use local storage set type
      //     setDataStorage(KeyStorage.typeAdmin, data.type)
      //   }
      //   NotificationCustom({
      //     type: TypeNotification.success,
      //     message: data.message
      //   })
      //   router.push(RouterName.topPage)
      // } else {
      //   NotificationCustom({
      //     type: TypeNotification.error,
      //     message: data.message
      //   })
      //   form.resetFields()
      // }
    } catch (error) {
      throw error
    }
  }

  return (
    <div className={styles.login}>
      <div className={styles.loginBody}>
        <h3>Đăng nhập</h3>
        <Form
          onFinish={onFinish}
          form={form}
          layout="vertical"
          scrollToFirstError
          preserve
        >
          <InputCustom
            title="Đăng nhập bằng email"
            name="email"
            form={form}
            rules={ruleValidateEmail}
          />

          <InputCustom
            form={form}
            title="password"
            name="password"
            rules={rulePasswordLogin}
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
          />

          <ButtonCustom
            type="submit"
            title="Đăng nhập"
            color="#fff"
            bg="#00859D"
          />
        </Form>
        <div
          className={styles.linkTab}
          onClick={() => router("/send-url")}
        >
          Quên mật khẩu
        </div>
      </div>
    </div>
  )
}

export default Login
