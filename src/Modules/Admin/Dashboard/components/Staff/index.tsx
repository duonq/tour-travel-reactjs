import React, { useEffect, useState } from 'react'
import ButtonCustom from '../../../../../components/ButtonCustom'
import styles from './index.module.scss'
import {
    EditOutlined,
    PlusOutlined,
    SearchOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import { Modal, Table } from 'antd';
import InputCustom from '../../../../../components/InputCustom';
import { ApiService } from '../../../services/api';
import { useNavigate } from 'react-router';
import { StatusCode, TypeNotification } from '../../../../../shared/emuns';
import { NotificationCustom } from '../../../../../shared/function';

const Staff = () => {
    const router = useNavigate()
    const listColumnStaffs = [
        {
            title: "Id",
            dataIndex: "id",
            width: "5%"
        },
        {
            title: "Tên nhân viên",
            dataIndex: "name",
            width: "10%"
        },
        {
            title: "Giới tính",
            dataIndex: "gender",
            width: "10%"
        },
        {
            title: "Số điện thoại",
            dataIndex: "phoneNumber",
            width: "10%"
        },
        {
            title: "Email",
            dataIndex: "email",
            width: "10%"
        },
        {
            title: "Mô tả",
            dataIndex: "description",
            width: "10%"
        },
        {
            title: "Tùy chọn",
            dataIndex: "id",
            width: "10%",
            render: (text: any, record: any): any => {
                return (
                    <div className={styles.groupBtn}>
                        <ButtonCustom
                            // onClick={() => editContractor(record.id)}
                            prefix={<EditOutlined />}
                            color="#D96B06"
                            bg='#fff'
                        />
                        <ButtonCustom
                            onClick={() => getIdUser(record.id)}
                            prefix={<DeleteOutlined />}
                            color="#D96B06"
                            bg='#fff'
                        />
                    </div>
                )
            }
        },
    ]

    const [dataTable, setDataTable] = useState([])
    const [dataSerach, setInputSearch] = useState('')
    const [visible, setVisible] = useState(false)
    const [id, setId] = useState(0)

    useEffect(() => {
        getlistMember()
      }, [])

      useEffect(() => {
        getlistMember()
      }, [dataSerach])
      
      const getlistMember = async () => {
          const resData = await ApiService.getListMember(dataSerach)
            const {data} = resData
            const listMember = resData.data.data
           for (let idx = 0; idx < listMember.length; idx++) {
            if (listMember[idx].gender === 1) listMember[idx].gender = "nam"
            else listMember[idx].gender = "nữ"
            listMember[idx].key = idx  + 1
           }
            setDataTable(listMember)
      }
      const getIdUser = async (id: number) => {
        setId(id)
        setVisible(true)
      }
      const deleteUser = async () => {
        const resData = await ApiService.deleteUser(id)
        const { status, data } = resData
        setVisible(false)
      if (status === StatusCode.ok) {
        NotificationCustom({
          type: TypeNotification.success,
          message: "Xóa User thành công"
        })
        getlistMember()
      } else {
        NotificationCustom({
          type: TypeNotification.error,
          message: 'Xóa User thất bại'
        })
      }
    }
    return (
        <div className={styles.staffPage}>
            <div className={styles.addStaff}>
                <ButtonCustom title="Thêm" color='#fff' bg='#00859D' prefix={<PlusOutlined />} onClick={() => router('/admin/quan-ly-nhan-vien/them-moi')} />
                <InputCustom typeInput='search' handleOnChange={(e) => {setInputSearch(e.target.value)}} placeholder='Tìm kiếm theo tên, mã phòng' suffix={<SearchOutlined />} />
            </div>
            <div className={styles.roomTable}>
                <Table
                    columns={listColumnStaffs}
                    dataSource={dataTable}
                    scroll={{ y: 450 }}
                    locale={{ emptyText: "Không có data" }}
                />
            </div>
            <Modal
                title="Bạn có chắc chắn xóa không?"
                visible={visible}
                footer={null}
                onCancel={() => setVisible(false)}
                bodyStyle={{ padding: 0 }}
                width={300}
            >
                <ButtonCustom title="Xóa" color='#fff' bg='red' onClick={deleteUser} />
                <ButtonCustom title="Hủy bỏ" color='#fff' bg='#00859D' onClick={() => setVisible(false)}/>
            </Modal>
        </div>
    )
}

export default Staff