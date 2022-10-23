import { Modal } from "antd"
import { useState } from "react"
import ButtomCustom from "../../components/ButtonCustom"
import CarouselItem from "../../components/CarouselItem"
import BannerPage from "./components/BannerHomePage"
import style from './index.module.scss'
import { listRooms, listServices } from "./shared/constants"

const HomePage = () => {
  const [visible, setState] = useState(false)
  const btnClick = () => {

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
          <h3>Hãy trải nghiệm những dịch vụ tuyệt vời nhất</h3>
          <p>Cùng tổ hợp Trung tâm thương mại Đức Huy Plaza, tọa lạc tại vị trí tọa độ trung tâm mới của Thành phố Lào Cai, Đức Huy Grand Hotel & Spa Lào Cai là khách sạn đạt tiêu chuẩn 4 sao với 87 phòng nghỉ hiện đai, thiết kế linh hoạt đáp ứng những nhu cầu khác nhau của quý khách.</p>
          <ButtomCustom classCustom={style.btnView} bg="#C19B76" color="#fff" title="xem chi tiết" />
        </div>
      </div>
      <div className={style.roomsStyle}>
        <h3>Phòng & Thiết bị</h3>
        <ButtomCustom classCustom={style.btnView} bg="#C19B76" color="#fff" title="xem tất cả các phòng" />
      </div>
      <div>
        <CarouselItem>
          {listRooms && listRooms.map((item) => {
            return (
              <div key={item.id} className={style.slideRooms}>
                <div className={style.boxRoom}>
                  <h1>{item.price}</h1>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
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
          <h3>CÓ THỂ QUÝ KHÁCH QUAN TÂM</h3>
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
            <ButtomCustom title="video clip" onAction={btnClick} />
            {/* <Modal
          title="Product name"
          visible={visible}
          footer={null}
          onCancel={hideModal}
          afterClose={pause}
          bodyStyle={{ padding: 0 }}
        >
          <Player
            autoPlay
            ref={ref => {
              this.player = ref;
            }}
          >
            <source
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              type="video/mp4"
            />
          </Player>
        </Modal> */}
            <div>
              <hr />
              <p>Chúng tôi có những dịch vụ tuyệt vời nhất dành cho bạn</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default HomePage
