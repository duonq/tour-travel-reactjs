import styles from './index.module.scss'
import { InfoCircleOutlined, UserOutlined, DollarOutlined, ShoppingCartOutlined, HomeOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { ApiService } from '../../services/api';
import { Table } from 'antd';


const Dashboard = () => {
    useEffect(() => {
        getDashboard()
    }, [])

    const [data, setData] = useState<any>()
    const [dataTable, setDataTable] = useState<any>()

    const getDashboard = async () => {
        const resData = await ApiService.getDashboard()
        const data = resData.data.data
        setData(data)
        const arr = [] as any
        data.listRate.map((item: any, index: number) => {
            arr.push({
                key: index,
                month: item.month,
                totalMoney: item.totalMoney.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
            })
        })
        setDataTable(arr)
    }

    const listData = [
        {
            title: "Số thứ tự",
            dataIndex: "id",
            width: "10%"
        },
        {
            title: "Tháng",
            dataIndex: "month",
            width: "40%"
        },
        {
            title: "Tổng số tiền",
            dataIndex: "totalMoney",
            width: "50%"
        },
    ]
    return (
        <div className={styles.DashboardPage}>
            <div className={styles.total}>
                <div className={styles.boxInfo}>
                    <div>
                        <p>Tổng khách hàng</p>
                        <InfoCircleOutlined />
                    </div>
                    <div>
                        <UserOutlined />
                        <h3>{data?.totalCustomer || 0}</h3>
                    </div>
                </div>
                <div className={styles.boxInfo}>
                    <div>
                        <p>Tổng số phòng</p>
                        <InfoCircleOutlined />
                    </div>
                    <div>
                        <HomeOutlined />
                        <h3>{data?.totalRoom || 0}</h3>
                    </div>
                </div>
                <div className={styles.boxInfo}>
                    <div>
                        <p>Tổng đặt phòng</p>
                        <InfoCircleOutlined />
                    </div>
                    <div>
                        <ShoppingCartOutlined />
                        <h3>{data?.totalBooked || 0}</h3>
                    </div>
                </div>
                <div className={styles.boxInfo}>
                    <div>
                        <p>Tổng doanh thu</p>
                        <InfoCircleOutlined />
                    </div>
                    <div>
                        <DollarOutlined />
                        <h3>{data?.totalMoney.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}|| 0</h3>
                    </div>
                </div>
            </div>

            <div className={styles.roomTable}>
                <Table
                    columns={listData}
                    dataSource={dataTable || []}
                    scroll={{ y: 450 }}
                    locale={{ emptyText: "Không có data" }}
                />
            </div>
        </div>
    )
}

export default Dashboard