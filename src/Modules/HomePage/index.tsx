import { Modal } from "antd"
import { useState } from "react"
import ButtomCustom from "../../components/ButtonCustom"
import CarouselItem from "../../components/CarouselItem"
import BannerPage from "./components/BannerHomePage"
import style from './index.module.scss'
import { listFeeback, listRooms, listServices, listTours } from "./shared/constants"


const HomePage = () => {
    const [visible, setState] = useState<Boolean>(false)
    const btnClick = () => {
        setState(true)
    }
    const hideModal = () => {
        setState(false)
    }
    return (
        <div className={style.homePage}>
            <BannerPage />
            <div className={style.infoContact}>
                <div className={style.imageContact}>
                    <div className={style.zoomImage}>
                        <div>
                            <img src="https://duchuygrandhotel.com/wp-content/uploads/2019/01/Sanh-452-325-2.jpg" alt="" />
                        </div>
                        <div>
                            <img src="https://duchuygrandhotel.com/wp-content/uploads/2019/01/Sanh-452-325.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className={style.info}>
                    <h4>Giới thiệu</h4>
                    <h2>Hãy trải nghiệm những dịch vụ tuyệt vời nhất</h2>
                    <p>Cùng tổ hợp Trung tâm thương mại Đức Huy Plaza, tọa lạc tại vị trí tọa độ trung tâm mới của Thành phố Lào Cai, Đức Huy Grand Hotel & Spa Lào Cai là khách sạn đạt tiêu chuẩn 4 sao với 87 phòng nghỉ hiện đai, thiết kế linh hoạt đáp ứng những nhu cầu khác nhau của quý khách.</p>
                    <ButtomCustom classCustom={style.btnView} bg="#C19B76" color="#fff" title="xem chi tiết" />
                </div>
            </div>
            <div className={style.roomsStyle}>
                <h2>Phòng & Thiết bị</h2>
                <ButtomCustom classCustom={style.btnView} bg="#C19B76" color="#fff" title="xem tất cả các phòng" />
            </div>
            <div>
                <CarouselItem>
                    {listRooms && listRooms.map((item) => {
                        return (
                            <div key={item.id} className={style.slideRooms}>
                                <div className={style.boxRoom}>
                                    <h3>{item.price}</h3>
                                    <h4>{item.name}</h4>
                                    <h5>{item.description}</h5>
                                </div>
                                <div>
                                    <img src={item.img} alt="" />
                                </div>
                            </div>
                        )
                    })}
                </CarouselItem>
            </div>
            <div className={style.serviceStyle}>
                <div className="w-60 m-auto">
                    <h4>DỊCH VỤ TỐT NHẤT</h4>
                    <h2>CÓ THỂ QUÝ KHÁCH QUAN TÂM</h2>
                    <h5>Hãy mang đến cho bạn một niềm cảm hứng mới bằng các trải nghiệm dịch vụ tuyệt vời của chúng tôi
                        "Đức Huy Grand Khơi nguồn sáng tạo cho cuộc sống"</h5>
                </div>
                <div className={style.videoIllust}>
                    <CarouselItem>
                        {listServices && listServices.map((item) => {
                            return (
                                <div className={style.illustration} key={item.id}>
                                    <img src={item.img} alt="" />
                                    <div className={style.price}>
                                        <p>{item.price}</p>
                                    </div>
                                    <div className={style.titleService}>
                                        <h5>{item.name}</h5>
                                        <a>{item.extraService}</a>
                                    </div>
                                </div>
                            )
                        })}
                    </CarouselItem>
                    <div>
                        <img src="https://duchuygrandhotel.com/wp-content/uploads/2019/01/Tiec-cuoi-1920-1253.jpg" alt="" />
                        <ButtomCustom title="video clip" onClick={btnClick} />
                        <Modal
                            title="Product name"
                            open={visible}
                            footer={null}
                            onCancel={hideModal}
                            bodyStyle={{ padding: 0 }}
                            width={1000}
                        >
                            <video width="1000" controls>
                            </video>
                        </Modal>
                        <div>
                            <hr />
                            <p>Chúng tôi có những dịch vụ tuyệt vời nhất dành cho bạn</p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.newStyle}>
                <div>
                    <h4>TIN TỨC KHÁCH SẠN</h4>
                    <h2>Tin tức & Sự kiện</h2>
                    <h5>Những sự kiện & các chương trình khuyến mại chúng tôi sẽ luôn cập nhật.</h5>
                </div>
                <div className={style.tourStyle}>
                    {listTours && listTours.map((item) => {
                        return (

                            <div className={style.cardStyle} key={item.id}>
                                <div>
                                    <h4>{item.name}</h4>
                                    <h3>{item.address}</h3>
                                    <h4>{item.description}</h4>
                                    <ButtomCustom bg='#fff' title="view" color="#c19b76" />
                                </div>
                                <div>
                                    <img src={item.img} alt="" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={style.feebackStyle}>
                <h3>Những dịch vụ tuyệt từ cảm nhận của bạn</h3>
                <div className={style.listFB}>
                    <div>
                        <img src="https://duchuygrandhotel.com/wp-content/uploads/2018/07/testimonial.jpg" alt="" />
                    </div>
                    <CarouselItem>
                        {listFeeback && listFeeback.map((item) => {
                            return (
                                <div key={item.id} className='p-5'>
                                    <h4>{item.name}</h4>
                                    <h5>{item.from}</h5>
                                    <p>{item.description}</p>
                                </div>
                            )
                        })}
                    </CarouselItem>
                </div>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.533518304391!2d105.79796941540259!3d21.0513431923819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad3fd2785ca9%3A0xadc44cfc0d73d528!2zNnRoIEVsZW1lbnQgVMOieSBI4buTIFTDonk!5e0!3m2!1svi!2s!4v1666628041039!5m2!1svi!2s" width="100%" height="450" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default HomePage
