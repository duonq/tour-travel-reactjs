import styles from './index.module.scss'
import { InfoCircleOutlined, UserOutlined, DollarOutlined, ShoppingCartOutlined, HomeOutlined, SearchOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { ApiService } from '../../services/api';
import { Table } from 'antd';
import ButtonCustom from '../../../../components/ButtonCustom';
import InputCustom from '../../../../components/InputCustom';


const Dashboard = () => {
    useEffect(() => {
        getDashboard()
    }, [])

    const [data, setData] = useState<any>()
    const [dataTableConstant, setDataTableConstant] = useState<any>()
    const [dataTable, setDataTable] = useState<any>()
    const [dataSearch, setDataSearch] = useState<any>()

    const getDashboard = async () => {
        const resData = await ApiService.getDashboard()
        const data = resData.data.data
        setData(data)
        const arr = [] as any
        data.listRate.length > 0 && data.listRate.map((item: any, index: number) => {
            arr.push({
                key: index + 1,
                month: item?.month,
                totalMoney: item?.totalMoney?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
            })
        })
        setDataTable(arr)
        setDataTableConstant(arr)
    }

    const handleSearch = async () => {
        const arraySearch = [] as any
        dataTableConstant.map((item: any) => {
            if (item.month.includes(dataSearch)) {
                arraySearch.push(item)
            }
        })
        setDataTable(arraySearch)
    }

    const setInputSearch = async (val: string) => {
        setDataSearch(val)
    }

    const listData = [
        {
            title: "Số thứ tự",
            dataIndex: "key",
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
                        <h3>{data?.totalMoney.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) || 0}</h3>
                    </div>
                </div>
            </div>
            <div className={styles.search}>
                <InputCustom typeInput='search' handleOnChange={(e) => { setInputSearch(e.target.value) }} placeholder='Tìm kiếm theo tháng' suffix={<SearchOutlined onClick={handleSearch} />} />
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