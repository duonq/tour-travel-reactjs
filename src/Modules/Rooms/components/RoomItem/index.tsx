import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import SlideImage from '../../../../components/SlideImage'
import { listRooms, listsImage } from '../../../HomePage/shared/constants'
import CarouselItem from '../../../../components/CarouselItem'
import TabCustom from '../../../../components/TabsCustom'
import { listEquipment, ruleRequired } from '../../../../shared/constants'
import { CheckCircleFilled, CloudOutlined } from '@ant-design/icons';
import { DatePicker, DatePickerProps, Form, Rate, Table } from 'antd'
import InputCustom from '../../../../components/InputCustom'
import ButtomCustom from '../../../../components/ButtonCustom'
import { StatusCode, TypeInputCustom, TypeNotification } from '../../../../shared/emuns'
import { ColumnsType } from 'antd/lib/table'
import SelectCustom from '../../../../components/SelectCustom'
import { useNavigate } from 'react-router'
import ButtonCustom from '../../../../components/ButtonCustom'
import { ApiService } from '../../../Admin/services/api'
import { NotificationCustom } from '../../../../shared/function'
import Avata from "../../../../assets/avata.svg";


const RoomItem = () => {
    const router = useNavigate()
    const [form] = Form.useForm()
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    }
    const redirectItem = () => {
        router('/room-item')
    }
    const [dataRoom, setDataRoom] = useState() as any
    const [dataComment, setDataComment] = useState([]) as any
    const [id, setId] = useState() as any

    useEffect(() => {
        const roomId = window.location.pathname.split('/').pop()
        setId(Number(roomId))
        getListRoom(Number(roomId))
        getListComment(Number(roomId))
    }, [])

    const getListRoom = async (roomId: number) => {
        const resData = await ApiService.getRoomDetail(roomId)
        setDataRoom(resData.data.data)
    }

    const getListComment = async (roomId: number) => {
        const resData = await ApiService.getListComment(roomId)
        setDataComment(resData.data.data)
    }

    const createComment = async (dataLogin: any) => {
        const resData = await ApiService.createComment(dataLogin)
        const { data, status } = resData
        if (status === StatusCode.created) {
            getListComment(id)
            form.resetFields()
        } else {
            NotificationCustom({
                type: TypeNotification.error,
                message: data.errorMessage
            })
        }
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
                    <p>T???ng s??? ph??ng: 06 ph??ng</p>

                    <p>Di???n t??ch ph??ng: 45m2 ch??a bao g???m c??? di???n t??ch ban c??ng</p>

                    <p>Hai Gi?????ng ????n: 06 ph??ng</p>

                    <p>H?????ng nh??n: Th??nh ph???</p>

                    <p>Ph??ng h??t thu???c s???n c??</p>

                    <p>Gi?????ng ph??? theo y??u c???u</p>

                    <p>C??c ph??ng Junior Suite ????n v???i chi???c gi?????ng ng??? cao c???p c??ng ph??ng t???m v??ch k??nh tinh x???o l?? l???a ch???n ho??n h???o cho m???t k??? ngh??? d?????ng l??ng m???n. M???i ph??ng ?????u ???????c trang b???: ??i???u h??a kh??ng kh??, Tivi Sony 55inch v???i c??c k??nh truy???n h??nh v??? tinh v?? phim, mini-bar, thi???t b??? pha tr?? v?? c?? ph??, k??t s???t an to??n, truy c???p internet kh??ng d??y.</p>
                </div>
                <div className={style.tableInfo}>
                    <h5>Thi???t b??? & D???ch v???</h5>
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
        const onFinish = async (dataInsert: any) => {
            try {
                let dataLogin = { ...dataInsert, rate: value, roomId: id }
                createComment(dataLogin)
            } catch (error) {

            }
        }
        return (
            <div className={style.inforTab2}>
                <div className={style.feebback}>
                    <h5>Hi???n t???i c?? {dataComment.length} l?????t ????nh gi??</h5>
                    <div className={style.secFB}>
                        {
                            dataComment.length > 0 && dataComment.map((item: any) => {
                                return (
                                    <div key={item.id} className={style.numberFB}>
                                        <div>
                                            <img src={Avata} alt="" />
                                            <span>{item.name} </span>
                                        </div>
                                        <Rate tooltips={desc} onChange={setValue} value={item.rate} />
                                        <p>M?? t???: {item.description} </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={style.boderStyle}></div>
                <h3> ????nh gi?? d???ch v???</h3>
                <div className={style.formSubmit}>
                    <Form onFinish={onFinish} form={form}>
                        <h4>H??y ????nh gi?? ph??ng</h4>
                        <div className={style.ratingStyle}>
                            <Rate tooltips={desc} onChange={setValue} value={value} />
                            <span>{value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}</span>
                        </div>
                        <div className={style.feebackStyle}>
                            <h4>Vi???t review</h4>
                            <InputCustom typeInput={TypeInputCustom.textarea} name='description' form={form} rules={ruleRequired} required />
                        </div>
                        <div className={style.inputStyle}>
                            <h4>T??n</h4>
                            <InputCustom name='name' form={form} rules={ruleRequired} required />
                        </div>
                        <div className={style.inputStyle}>
                            <h4>Email</h4>
                            <InputCustom name='email' form={form} rules={ruleRequired} required />
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
                title: 'Th??? 2',
                dataIndex: 'mon',
            },
            {
                title: 'Th??? 3',
                dataIndex: 'tue',
                width: 150,
            },
            {
                title: 'Th??? 4',
                dataIndex: 'wed',
            },
            {
                title: 'Th??? 5',
                dataIndex: 'thu',
            },
            {
                title: 'Th??? 6',
                dataIndex: 'fri',
            },
            {
                title: 'Th??? 7',
                dataIndex: 'sat',
            },
            {
                title: 'Ch??? nh???t',
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
            <SlideImage backgroundImage={`http://localhost:4000/uploads/` + dataRoom?.thumbnail}>
                <h1>Junior Suite Room</h1>
            </SlideImage>
            <div className={style.infoItem}>
                <div className={style.leftItemPage}>
                    <div className={style.titlePrice}>
                        <h4>Ph??ng: {dataRoom?.name}</h4>
                        <h5>Gi??: {dataRoom?.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</h5>
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
                        <TabCustom tabLabels={["M?? t???", "????nh gi??", "K??? ho???ch"]}
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
                        <ButtonCustom title="?????t l???ch ph??ng" color='#000' onClick={() => router('/booking')} />
                        {/* <h3>?????t ph??ng c???a b???n</h3>
                        <Form>
                            <DatePicker onChange={onChange} placeholder="Ng??y ?????n" />
                            <DatePicker onChange={onChange} placeholder="Ng??y ??i" />
                            <SelectCustom options={options} placeholder="Ph??ng" />
                            <SelectCustom options={options} placeholder="Ng?????i l???n" />
                            <SelectCustom options={options} placeholder="tr??? em" />
                            <ButtomCustom title="?????t l???ch" bg='#C19B76' />
                        </Form> */}
                    </div>

                    <div className={style.weatherStyle}>
                        <h3>Th???i ti???t</h3>
                        <div>
                            <div className={style.temperatureStyle}>
                                <CloudOutlined />
                                <p>10??C</p>
                                <p>????? ???m: 73%</p>
                                <p>Gi??: 1.55m/s</p>
                            </div>
                            <div className={style.daysStyle}>
                                <p>
                                    Th??? 2
                                    <span><CloudOutlined /></span>
                                    15??C
                                </p>
                                <p>
                                    Th??? 3
                                    <span><CloudOutlined /></span>
                                    15??C
                                </p>
                                <p>
                                    Th??? 4
                                    <span><CloudOutlined /></span>
                                    15??C
                                </p>
                                <p>
                                    Th??? 5
                                    <span><CloudOutlined /></span>
                                    15??C
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.roomOther}>
                <h3>Xem ph??ng kh??c</h3>
                <div className={style.roomsList}>
                    {listRooms && listRooms.map((item) => {
                        return (
                            <div key={item.id} className={style.itemRoom}>
                                <div>
                                    <div className={style.imageRoom}>
                                        <img src={item.img} alt="" />
                                        <ButtomCustom bg='#C19B76' color='#fff' title='xem chi ti???t' onClick={redirectItem} />
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