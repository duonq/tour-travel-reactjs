import React, { useState } from 'react'
import style from './index.module.scss'
import SlideImage from '../../../../components/SlideImage'
import { listRooms, listsImage } from '../../../HomePage/shared/constants'
import CarouselItem from '../../../../components/CarouselItem'
import TabCustom from '../../../../components/TabsCustom'
import { listEquipment } from '../../../../shared/constants'
import { CheckCircleFilled, CloudOutlined } from '@ant-design/icons';
import { DatePicker, DatePickerProps, Form, Rate, Table } from 'antd'
import InputCustom from '../../../../components/InputCustom'
import ButtomCustom from '../../../../components/ButtonCustom'
import { TypeInputCustom } from '../../../../shared/emuns'
import { ColumnsType } from 'antd/lib/table'
import SelectCustom from '../../../../components/SelectCustom'
import { useNavigate } from 'react-router'
import ButtonCustom from '../../../../components/ButtonCustom'


const RoomItem = () => {
    const router = useNavigate()
    const [form] = Form.useForm()
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    }
    const redirectItem = () => {
        router('/room-item')
    }
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']
    const [value, setValue] = useState(3)
    const options = [
        {
            id: 1,
            value: 1
        },
        {
            id: 2,
            value: 2
        },
        {
            id: 3,
            value: 3
        },
        {
            id: 4,
            value: 4
        }
    ]
    const tab1 = () => {
        return (
            <div className={style.infoTab1}>
                <div className={style.information}>
                    <p>Tổng số phòng: 06 phòng</p>

                    <p>Diện tích phòng: 45m2 chưa bao gồm cả diện tích ban công</p>

                    <p>Hai Giường Đơn: 06 phòng</p>

                    <p>Hướng nhìn: Thành phố</p>

                    <p>Phòng hút thuốc sẵn có</p>

                    <p>Giường phụ theo yêu cầu</p>

                    <p>Các phòng Junior Suite đơn với chiếc giường ngủ cao cấp cùng phòng tắm vách kính tinh xảo là lựa chọn hoàn hảo cho một kỳ nghỉ dưỡng lãng mạn. Mỗi phòng đều được trang bị: điều hòa không khí, Tivi Sony 55inch với các kênh truyền hình vệ tinh và phim, mini-bar, thiết bị pha trà và cà phê, két sắt an toàn, truy cập internet không dây.</p>
                </div>
                <div className={style.tableInfo}>
                    <h5>Thiết bị & Dịch vụ</h5>
                    <ul>
                        {
                            listEquipment && listEquipment.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <CheckCircleFilled />
                                        <span>{item.title}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    const tab2 = () => {
        const onFinish = async (valLogin: any) => {
            try {
                let dataLogin = valLogin
                console.log(55, dataLogin)
            } catch (error) {

            }
        }
        return (
            <div className={style.inforTab2}>
                <h3>Đánh giá</h3>
                <p>Hiện tại có ... lượt đánh giá</p>
                <div className={style.formSubmit}>
                    <Form onFinish={onFinish} form={form}>
                        <h4>Hãy đánh giá phòng</h4>
                        <div className={style.ratingStyle}>
                            <Rate tooltips={desc} onChange={setValue} value={value} />
                            <span>{value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}</span>
                        </div>
                        <div className={style.feebackStyle}>
                            <h4>Viết review</h4>
                            <InputCustom typeInput={TypeInputCustom.textarea} name='text' form={form} />
                        </div>
                        <div className={style.inputStyle}>
                            <h4>Tên *</h4>
                            <InputCustom name='name' form={form} />
                        </div>
                        <div className={style.inputStyle}>
                            <h4>Email *</h4>
                            <InputCustom name='email' form={form} />
                        </div>
                        <ButtomCustom title='submit' type='submit' color='#fff' bg='#C19B76' />
                    </Form>
                </div>
            </div>
        )
    }
    const tab3 = () => {
        type DataType = {
            key: React.Key
            mon: string
            tue: string
            wed: string
            thu: string
            fri: string
            sat: string
            sun: string
        }
        const columns: ColumnsType<DataType> = [
            {
                title: 'Thứ 2',
                dataIndex: 'mon',
            },
            {
                title: 'Thứ 3',
                dataIndex: 'tue',
                width: 150,
            },
            {
                title: 'Thứ 4',
                dataIndex: 'wed',
            },
            {
                title: 'Thứ 5',
                dataIndex: 'thu',
            },
            {
                title: 'Thứ 6',
                dataIndex: 'fri',
            },
            {
                title: 'Thứ 7',
                dataIndex: 'sat',
            },
            {
                title: 'Chủ nhật',
                dataIndex: 'sun',
            },
        ];
        const data: DataType[] = [
            {
                key: '1',
                mon: '29000',
                tue: '29000',
                wed: '29000',
                thu: "29000",
                fri: "29000",
                sat: "29000",
                sun: "29000",
            }
        ]
        return (
            <div className={style.inforTab3}>
                <h1>Regular plan</h1>
                <div>
                    <Table columns={columns} dataSource={data} pagination={false} />
                </div>
            </div>
        )
    }
    return (
        <div className={style.itemPage}>
            <SlideImage backgroundImage={'https://duchuygrandhotel.com/wp-content/uploads/2019/08/hotel-check-out.jpg'}>
                <h1>Junior Suite Room</h1>
            </SlideImage>
            <div className={style.infoItem}>
                <div className={style.leftItemPage}>
                    <div className={style.titlePrice}>
                        <h4>Tên phòng</h4>
                        <h5>Giá: Giá phòng</h5>
                    </div>
                    <CarouselItem >
                        {listsImage && listsImage.length > 0 && listsImage.map((item) => {
                            return (
                                <div key={item.id}>
                                    <img src={item.url} alt={item.alt} />
                                </div>
                            )
                        })}
                    </CarouselItem>
                    <div className={style.tabStyle}>
                        <TabCustom tabLabels={["Mô tả", "Đánh giá", "Kế hoạch"]}
                            tabPanes={[
                                tab1(),
                                tab2(),
                                tab3(),
                            ]}
                        />
                    </div>
                </div>
                <div className={style.rightItemPage}>
                    <div className={style.booksRoom}>
                        <ButtonCustom title="Đặt lịch phòng" color='#000' />
                        {/* <h3>Đặt phòng của bạn</h3>
                        <Form>
                            <DatePicker onChange={onChange} placeholder="Ngày đến" />
                            <DatePicker onChange={onChange} placeholder="Ngày đi" />
                            <SelectCustom options={options} placeholder="Phòng" />
                            <SelectCustom options={options} placeholder="Người lớn" />
                            <SelectCustom options={options} placeholder="trẻ em" />
                            <ButtomCustom title="Đặt lịch" bg='#C19B76' />
                        </Form> */}
                    </div>

                    <div className={style.weatherStyle}>
                        <h3>Thời tiết</h3>
                        <div>
                            <div className={style.temperatureStyle}>
                                <CloudOutlined />
                                <p>10°C</p>
                                <p>Độ ẩm: 73%</p>
                                <p>Gió: 1.55m/s</p>
                            </div>
                            <div className={style.daysStyle}>
                                <p>
                                    Thứ 2
                                    <span><CloudOutlined /></span>
                                    15°C
                                </p>
                                <p>
                                    Thứ 3
                                    <span><CloudOutlined /></span>
                                    15°C
                                </p>
                                <p>
                                    Thứ 4
                                    <span><CloudOutlined /></span>
                                    15°C
                                </p>
                                <p>
                                    Thứ 5
                                    <span><CloudOutlined /></span>
                                    15°C
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.roomOther}>
                <h3>Xem phòng khác</h3>
                <div className={style.roomsList}>
                    {listRooms && listRooms.map((item) => {
                        return (
                            <div key={item.id} className={style.itemRoom}>
                                <div>
                                    <div className={style.imageRoom}>
                                        <img src={item.img} alt="" />
                                        <ButtomCustom bg='#C19B76' color='#fff' title='xem chi tiết' onClick={redirectItem} />
                                    </div>
                                    <div className={style.infoRoom}>
                                        <h3>{item.name}</h3>
                                        <h4>{item.type}</h4>
                                        <p>{item.description}</p>

                                    </div>
                                </div>
                                <div className={style.priceRoom}>
                                    <h5>Price: </h5>
                                    <h4>{item.price}</h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default RoomItem