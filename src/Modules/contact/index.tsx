import React from 'react'
import style from "./index.module.scss"
import {
    EnvironmentOutlined, ClockCircleOutlined, SkypeOutlined,
    PhoneOutlined,
    MailOutlined,
    InstagramOutlined
} from '@ant-design/icons';
import { Form } from 'antd';
import InputCustom from '../../components/InputCustom';
import { TypeInputCustom } from '../../shared/emuns';
import ButtonCustom from '../../components/ButtonCustom';
import SlideImage from '../../components/SlideImage';
import { listsContact } from '../../shared/constants';
import { Link } from 'react-router-dom';
import { ITypeIcon } from '../../shared/constants/IConstant';

const listIcon: ITypeIcon[] = [
    { key: "map", value: <EnvironmentOutlined />, href: "/" },
    { key: "phone", value: <PhoneOutlined />, href: "/" },
    { key: "mail", value: <MailOutlined />, href: "/" },
    { key: "skypee", value: <SkypeOutlined />, href: "/" },
    { key: "instagram", value: <InstagramOutlined />, href: "/" },
];

const Contact = () => {
    const [form] = Form.useForm()
    const renderListIcon = (iconName: string) => {
        const icon = listIcon.find((item) => item.key === iconName)
        return icon?.value
    }
    return (
        <div className={style.contactPage}>
            <SlideImage backgroundImage={'https://duchuygrandhotel.com/wp-content/uploads/2019/08/hotel-check-out.jpg'}>
                <h1>Liên hệ với chúng tôi</h1>
            </SlideImage>
            <div className={style.contacInfo}>
                <div className={style.inforContact}>
                    <h3>Liên hệ</h3>
                    <p>Chúng tôi có địa chỉ và sử dụng các mạng xã hội, Quý khách có thể tìm thấy chúng tôi ở các địa chỉ dưới đây: (We are also active in social media. You can find us
                        on below address.)</p>
                    <div>
                        <EnvironmentOutlined />
                        <p>số 59 Giải Phóng, Hai Bà Trưng, Hà Nội.</p>
                    </div>
                    <div>
                        <ClockCircleOutlined />
                        <p><label>Thời gian 8:00 AM - 10:00 PM</label>
                            <label>Thứ Hai - Chủ Nhật</label></p>
                    </div>
                    <p>Call: <span>0846 880 633</span></p>
                    <p>Email: <span>tue255961@nuce.edu.vn</span></p>
                    <ul>
                        {listsContact.length > 0 &&
                            listsContact.map((itemContact, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={itemContact.href}>
                                            {renderListIcon(itemContact.icon || " ")}
                                        </Link>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
                <div className={style.formContact}>
                    <h3>Gửi tin nhắn</h3>
                    <h5>Quý khách có bất cứ điều gì để nói với chúng tôi? Xin đừng ngần ngại liên lạc với chúng tôi thông qua hình thức liên lạc này.</h5>
                    <Form form={form}>
                        <div>
                            <InputCustom placeholder='Họ tên*' name='name' form={form} />
                            <InputCustom placeholder='Email*' name='email' form={form} />
                        </div>
                        <InputCustom placeholder='Tiêu đề ' name='title' />
                        <InputCustom placeholder='Nội dung' typeInput={TypeInputCustom.textarea} name='text' form={form} />
                        <ButtonCustom title="Gửi" bg='#C19B76' type="submit" />
                    </Form>
                </div>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.533518304391!2d105.79796941540259!3d21.0513431923819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad3fd2785ca9%3A0xadc44cfc0d73d528!2zNnRoIEVsZW1lbnQgVMOieSBI4buTIFTDonk!5e0!3m2!1svi!2s!4v1666628041039!5m2!1svi!2s" width="100%" height="450" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default Contact