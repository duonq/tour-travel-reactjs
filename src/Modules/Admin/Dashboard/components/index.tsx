import React from 'react'
import styles from './index.module.scss'
import { InfoCircleOutlined, UserOutlined, DollarOutlined, ShoppingCartOutlined, HomeOutlined } from '@ant-design/icons';

const Dashboard = () => {
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
                        <h3>25</h3>
                    </div>
                </div>
                <div className={styles.boxInfo}>
                    <div>
                        <p>Tổng số phòng</p>
                        <InfoCircleOutlined />
                    </div>
                    <div>
                        <HomeOutlined />
                        <h3>25</h3>
                    </div>
                </div>
                <div className={styles.boxInfo}>
                    <div>
                        <p>Tổng đặt phòng</p>
                        <InfoCircleOutlined />
                    </div>
                    <div>
                        <ShoppingCartOutlined />
                        <h3>25</h3>
                    </div>
                </div>
                <div className={styles.boxInfo}>
                    <div>
                        <p>Tổng doanh thu</p>
                        <InfoCircleOutlined />
                    </div>
                    <div>
                        <DollarOutlined />
                        <h3>25</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard