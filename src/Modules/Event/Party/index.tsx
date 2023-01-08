import React from 'react'
import SlideImage from '../../../components/SlideImage'
import TabCustom from '../../../components/TabsCustom'
import NavBarLeft from '../components/NavbarLeft'
import style from './index.module.scss'

const PartyEvent = () => {
    const tabInfor = () => {
        return (
            <div className={style.informationTab}>
                <h4>KHÔNG GIAN TIỆC CƯỚI SANG TRỌNG</h4>
                <div>
                    <p>Nhà hàng Hoa Hồng – Khách sạn Đức Huy Grand Lào Cai được đầu tư bài bản ngay từ ban đầu đã tạo nên một địa điểm mới lý tưởng cho cặp đôi chuẩn bị tổ chức đám cưới. Nếu bạn mong muốn có một đám cưới tuyệt vời nhất với:</p>
                    <ul>
                        <li> Không gian hiện đại, sang trọng</li>
                        <li> Hệ thống âm thanh, ánh sáng chuyên nghiệp;</li>
                        <li> Đội ngũ nhân viên phục vụ chu đáo, nhiệt tình;</li>
                        <li> Ẩm thực đa dạng trang trí đẹp;</li>
                    </ul>
                    <img src="https://duchuygrandhotel.com/wp-content/uploads/2019/01/Tiec-cuoi-8.jpg" alt="" />
                    <p>* Nhà hàng Hoa Hồng nằm trong khuôn viên khách sạn bốn Sao Đức Huy Grand Lào Cai, được đầu tư bài bản với hệ thống âm thanh ánh sáng chuyên nghiệp. Đặc biệt đội ngũ nhân viên chuyên nghiệp, tận tình, chu đáo.</p>
                    <img src="https://duchuygrandhotel.com/wp-content/uploads/2019/01/Tiec-cuoi-9.jpg" alt="" />
                    <p>? ƯU ĐÃI HẤP DẪN MÙA CƯỚI 2019??
                        * Tặng gói trang trí tiệc cưới trị giá 10.000.000vnd (Màn hình LED, khu vực đón tiếp, trang trí lễ tân, cổng hoa, backdrop, giá để hình CDCR)</p>
                    <img src="https://duchuygrandhotel.com/wp-content/uploads/2019/01/Tiec-cuoi-10.jpg" alt="" />
                    <p>? ƯU ĐÃI CHỈ TỪ 199.000/Xuất/ 1.990.000đ/Mầm 10 khách
                        * Đưc Huy Grand chắc chắn sẽ là sự lựa chọn sáng suốt để giúp bạn có một lê cưới tuyệt vời nhất.</p>
                    <h5>=======================</h5>
                    <ul>
                        <li>Hotline: 0911 164 840 – Phòng kinh doanh</li>
                        <li>Hotline: 0846 880 630 – Phòng kinh doanh</li>
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <div className={style.partyPage}>
            <SlideImage backgroundImage={'https://duchuygrandhotel.com/wp-content/uploads/2019/08/hotel-check-out.jpg'}>
                <h1>Tổ chức tiệc</h1>
            </SlideImage>
            <div className={style.mainInfoEve}>
                <div>
                    <NavBarLeft />
                </div>
                <div>
                    <div className={style.tabStyle}>
                        <TabCustom tabLabels={["Giới thiệu"]}
                            tabPanes={[
                                tabInfor(),
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartyEvent