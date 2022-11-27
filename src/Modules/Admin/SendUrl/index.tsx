import { Form } from "antd"
import React from "react"
import ButtonCustom from "../../../components/ButtonCustom"
import InputCustom from "../../../components/InputCustom"
import { ruleValidateEmail } from "../../../shared/constants"
import styles from "./index.module.scss"


const SendUrl = () => {
    const [formUrl] = Form.useForm()
    const onFinish = async (inputVal: any) => {
        // try {
        //     let dataSendEmail: any = inputVal
        //     const resData = routerSendUrlAdmin
        //         ? await ContactService.postSendAdminEmail(dataSendEmail)
        //         : await ContactService.postSendContractorEmail(dataSendEmail)
        //     const { status, data } = resData
        //     if (status === StatusCode.created) {
        //         NotificationCustom({
        //             type: TypeNotification.success,
        //             message: data.message
        //         })
        //         formUrl.resetFields()
        //     } else {
        //         NotificationCustom({
        //             type: TypeNotification.error,
        //             message: data.message
        //         })
        //     }
        // } catch (error) {
        //     throw error
        // }
    }
    return (
        <div className={styles.sendUrlPage}>
            <div className={styles.formUrl}>
                <h1>Nếu bạn quên mật khẩu</h1>
                <div className={styles.formInput}>
                    <Form
                        form={formUrl}
                        layout="vertical"
                        onFinish={onFinish}
                    >
                        <InputCustom
                            form={formUrl}
                            title="Nhập email gửi"
                            name="email"
                            rules={ruleValidateEmail}
                            classCustomInput={styles.inputEmail}
                        />
                        <ButtonCustom
                            type="submit"
                            bg="#00859D"
                            title="Gửi email"
                        />
                        <div
                            className={styles.linkTab}
                            onClick={() => {
                                window.history.back()
                            }}
                        >
                            Quay lại đăng nhập!
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default SendUrl
