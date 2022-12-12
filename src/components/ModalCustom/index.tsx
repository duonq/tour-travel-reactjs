import { Modal } from "antd"
import React from "react"
import ButtonCustom from "../ButtonCustom"
import styles from './index.module.scss'

const ModelConfirm = (props: any) => {
    const { visible, toggleModel, onOk, title, content, onClosePopup } = props
    return (
        <Modal visible={visible} footer={null} onCancel={onClosePopup} className={styles.headerModal}>
            <h4>
                {title}
            </h4>
            <h5>{content}</h5>
            <div className={styles.btnGroup}>
                <ButtonCustom
                    title='Hủy'
                    color='#fff' bg='#00859D'
                    onClick={toggleModel}
                />
                <ButtonCustom
                    title='Xóa'
                    color='#fff' bg='#BD5364'
                    onClick={() => {
                        onOk()
                        toggleModel()
                    }}
                />
            </div>
        </Modal>
    )
}

export default ModelConfirm
