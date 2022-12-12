import React, { useEffect, useState } from 'react'
import ButtonCustom from '../../../../../components/ButtonCustom'
import styles from './index.module.scss'
import {
    EditOutlined,
    PlusOutlined,
    SearchOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import { Table } from 'antd';
import InputCustom from '../../../../../components/InputCustom';
import { ApiService } from '../../../services/api';
import Modal from 'antd/lib/modal/Modal';
import ModelConfirm from '../../../../../components/ModalCustom';

const Customer = () => {
    const listColumnStaffs = [
        {
            title: "Id",
            dataIndex: "id",
            width: "5%"
        },
        {
            title: "Tên khách hàng",
            dataIndex: "name",
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
            title: "Thẻ căn cước",
            dataIndex: "idCard",
            width: "10%"
        },
        // {
        //     title: "Tùy chọn",
        //     dataIndex: "id",
        //     width: "10%",
        //     render: (text: any, record: any): any => {
        //         return (
        //             <div className={styles.groupBtn}>
        //                 <ButtonCustom
        //                     // onClick={() => editContractor(record.id)}
        //                     prefix={<EditOutlined />}
        //                     color="#D96B06"
        //                     bg='#fff'
        //                 />
        //                 <ButtonCustom
        //                     onClick={() => getIdCustomer(record.id)}
        //                     prefix={<DeleteOutlined />}
        //                     color="#D96B06"
        //                     bg='#fff'
        //                 />
        //             </div>
        //         )
        //     }
        // },
    ]

    const [dataTable, setDataTable] = useState([])
    const [dataSerach, setInputSearch] = useState('')
    const [skip, setSkip] = useState(0)
    const [id, setId] = useState(0)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        getlistCustomer()
    }, [])

    const getlistCustomer = async () => {
        const resData = await ApiService.getListCustomer(skip, dataSerach)
        const listMember = resData.data.data.data
        for (let idx = 0; idx < listMember.length; idx++) {
            listMember[idx].key = idx + 1
        }
        setDataTable(listMember)
    }
    const handleSearch = async () => {
        getlistCustomer()
    }

    const getIdCustomer = async (id: number) => {
        setId(id)
        setVisible(true)
    }

    const deleteCustomer = async () => {
        setVisible(false)
    }

    return (
        <div className={styles.staffPage}>
            <div className={styles.addStaff}>
                <ButtonCustom title="Thêm nhân viên" color='#fff' bg='#00859D' prefix={<PlusOutlined />} />
                <InputCustom typeInput='search' handleOnChange={(e) => { setInputSearch(e.target.value) }} placeholder='Tìm kiếm theo tên, mã phòng' suffix={<SearchOutlined onClick={handleSearch} />} />
            </div>
            <div className={styles.roomTable}>
                <Table
                    columns={listColumnStaffs}
                    dataSource={dataTable}
                    scroll={{ y: 450 }}
                    locale={{ emptyText: "Không có data" }}
                />
            </div>
            <ModelConfirm
                visible={visible}
                onClosePopup={() => setVisible(false)}
                toggleModel={() => setVisible(false)}
                onOk={deleteCustomer}
                title='Bạn có muốn xóa?'
            />
        </div>
    )
}

export default Customer