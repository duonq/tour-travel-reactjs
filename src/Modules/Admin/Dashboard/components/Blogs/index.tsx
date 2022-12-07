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

const Blogs = () => {
    const listColumnStaffs = [
        {
            title: "Id",
            dataIndex: "blogs_id",
            width: "5%"
        },
        {
            title: "Tiêu đề",
            dataIndex: "blogs_title",
            width: "10%"
        },
        {
            title: "Nội dung",
            dataIndex: "blogs_content",
            width: "10%"
        },
        {
            title: "Tác giả",
            dataIndex: "user_name",
            width: "10%"
        },
        {
            title: "Hình ảnh",
            dataIndex: "blogs_thumbnail",
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
        getListBlogs()
      }, [])
      
      const getListBlogs = async () => {
          const resData = await ApiService.getListBlogs()
            const listBlogs = resData.data.data
           for (let idx = 0; idx < listBlogs.length; idx++) {
            listBlogs[idx].key = idx  + 1
           }
            setDataTable(listBlogs)
      }

    return (
        <div className={styles.staffPage}>
            <div className={styles.addStaff}>
                <ButtonCustom title="Thêm bài viết" color='#fff' bg='#00859D' prefix={<PlusOutlined />} />
                <InputCustom typeInput='search' placeholder='Tìm kiếm' suffix={<SearchOutlined />} />
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

export default Blogs