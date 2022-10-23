import { ITypeListBanner, ITypeListService } from "../typings"
import room from '../../../../assets/room1.jpg'
import room2 from '../../../../assets/room2.png'
import room3 from '../../../../assets/room3.jpg'

const listsImage: ITypeListBanner[] = [
    {
        id: 1,
        url: room,
        alt: 'slide-hompage1'
    },
    {
        id: 2,
        url: room2,
        alt: 'slide-hompage2'
    },
    {
        id: 3,
        url: room3,
        alt: 'slide-hompage3'
    }
]

const listRooms: ITypeListService[] = [
    {
      id: 1, 
      price: '2 000 000',
      name: 'Phòng đơn 01',
      description: 'Phòng có 1 giường đôi hoặc 2 giường đơn, thiết kế tông trắng, hiện đại',
      img: 'https://duchuygrandhotel.com/wp-content/uploads/2015/10/Senior-Suite-Room-600.jpg'
    },
    {
      id: 2, 
      price: '2 400 000',
      name: 'Phòng đôi 01',
      description: 'Phòng có 1 giường đôi hoặc 2 giường đơn, thiết kế tông trắng, hiện đại',
      img: 'https://duchuygrandhotel.com/wp-content/uploads/2015/10/Junior-Suite-Room-600-x-600-2.jpg'
    },
    {
      id: 3, 
      price: '1 000 000',
      name: 'Phòng đơn 02',
      description: 'Phòng có 1 giường đôi hoặc 2 giường đơn, thiết kế tông trắng, hiện đại',
      img: 'https://duchuygrandhotel.com/wp-content/uploads/2015/10/Senior-Suite-Room-600.jpg'
    }
]

const listServices: ITypeListService[] = [
    {
        id: 1,
        price: '99 000',
        name: 'Xông hơi hàn quốc',
        extraService: 'Tặng vé miễn phí',
        img: 'https://duchuygrandhotel.com/wp-content/uploads/2020/01/1-4.jpg'
    },
    {
        id: 2,
        price: '199 000',
        name: 'Massage foot',
        extraService: 'Massage',
        img: 'https://duchuygrandhotel.com/wp-content/uploads/2019/01/Spa.jpg'
    },
    {
        id: 3,
        price: '299 000',
        name: 'Phòng sức chứa 20 khách - Karaoke',
        extraService: 'Tặng ngay 5 bia Heineken hoặc Tiger',
        img: 'https://duchuygrandhotel.com/wp-content/uploads/2019/08/Karaoke-5.jpg'
    },
    {
        id: 4,
        price: '1 199 000',
        name: 'Dịch vụ tiệc cưới / CHỈ 1.990.00đ/MÂM 10 KHÁCH',
        extraService: 'Tiệc cưới của bạn tại khách sạn',
        img: 'https://duchuygrandhotel.com/wp-content/uploads/2019/01/Wedding.jpg'
    }

]
export  {
    listsImage,
    listRooms,
    listServices
}