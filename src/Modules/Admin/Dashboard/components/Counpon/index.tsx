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
import moment from "moment"

const Counpon = () => {
    const listColumnStaffs = [
        {
            title: "Id",
            dataIndex: "id",
            width: "5%"
        },
        {
            title: "Mã giảm giá",
            dataIndex: "code",
            width: "10%"
        },
        {
            title: "Hạn sử dụng",
            dataIndex: "expriedAt",
            width: "10%"
        },
        {
            title: "Phần trăm giảm giá",
            dataIndex: "couponPersent",
            width: "10%"
        },
        {
            title: "Trạng thái",
            dataIndex: "canUse",
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
                            // onClick={() => editContractor(record.id)}
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

    useEffect(() => {
        getlistCoupon()
      }, [])
      
      const getlistCoupon = async () => {
          const resData = await ApiService.getListCounpon()
            const listcoupon = resData.data.data
           for (let idx = 0; idx < listcoupon.length; idx++) {
            listcoupon[idx].expriedAt = moment(listcoupon[idx].expriedAt).format('YYYY-MM-DD HH:mm:ss')
            listcoupon[idx].couponPersent = listcoupon[idx].couponPersent + '%'
            listcoupon[idx].key = idx  + 1
            if (listcoupon[idx].canUse === 1) listcoupon[idx].canUse = 'còn hạn sử dụng'
            else listcoupon[idx].canUse = 'hết hạn sử dụng'
           }
            setDataTable(listcoupon)
      }

    return (
        <div className={styles.staffPage}>
            <div className={styles.addStaff}>
                <ButtonCustom title="Thêm nhân viên" color='#fff' bg='#00859D' prefix={<PlusOutlined />} />
                <InputCustom typeInput='search' placeholder='Tìm kiếm theo tên, mã phòng' suffix={<SearchOutlined />} />
            </div>
            <div className={styles.roomTable}>
                <Table
                    columns={listColumnStaffs}
                    dataSource={dataTable}
                    scroll={{ y: 450 }}
                    locale={{ emptyText: "Không có data" }}
                />
            </div>
        </div>
    )
}

export default Counpon