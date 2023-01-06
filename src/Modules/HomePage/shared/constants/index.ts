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
        name: 'Senior Suite Room1212',
        type: 'Phòng đơn',
        description: 'Phòng có 1 giường đôi hoặc 2 giường đơn, thiết kế tông trắng, hiện đại',
        img: 'https://duchuygrandhotel.com/wp-content/uploads/2015/10/Senior-Suite-Room-600.jpg'
    },
    {
        id: 2,
        price: '2 400 000',
        name: 'Deluxe Room * Hotel Room',
        type: 'Phòng đôi',
        description: 'Phòng có 1 giường đôi hoặc 2 giường đơn, thiết kế tông trắng, hiện đại',
        img: 'https://duchuygrandhotel.com/wp-content/uploads/2015/10/Junior-Suite-Room-600-x-600-2.jpg'
    },
    {
        id: 3,
        price: '1 000 000',
        name: 'Senior Suite Room',
        type: 'Phòng đơn',
        description: 'Phòng có 1 giường đôi hoặc 2 giường đơn, thiết kế tông trắng, hiện đại',
        img: 'https://duchuygrandhotel.com/wp-content/uploads/2015/10/Senior-Suite-Room-600.jpg'
    }
]

const listServices: ITypeListService[] = [
    {
        id: 1,
        price: '99.000 VND',
        name: 'Xông hơi hàn quốc',
        extraService: 'Tặng vé miễn phí',
        img: 'https://duchuygrandhotel.com/wp-content/uploads/2020/01/1-4.jpg'
    },
    {
        id: 2,
        price: '199.000 VND',
        name: 'Massage foot',
        extraService: 'Massage',
        img: 'https://duchuygrandhotel.com/wp-content/uploads/2019/01/Spa.jpg'
    },
    {
        id: 3,
        price: '299.000 VND',
        name: 'Phòng sức chứa 20 khách - Karaoke',
        extraService: 'Tặng ngay 5 bia Heineken hoặc Tiger',
        img: 'https://duchuygrandhotel.com/wp-content/uploads/2019/08/Karaoke-5.jpg'
    },
    {
        id: 4,
        price: '1.199.000 VND',
        name: 'Dịch vụ tiệc cưới / CHỈ 1.990.00đ/MÂM 10 KHÁCH',
        extraService: 'Tiệc cưới của bạn tại khách sạn',
        img: 'https://duchuygrandhotel.com/wp-content/uploads/2019/01/Wedding.jpg'
    }

]

const listTours: ITypeListService[] = [
    {
        id: 1,
        name: 'DU LỊCH LÀO CAI',
        address: 'Địa điểm tham quan tại thành phố Lào Cai',
        description: 'Lào Cai thành phố biên cương với rất nhiều địa điểm tham quan cũng như check in đẹp. Trong...',
        img: 'https://duchuygrandhotel.com/wp-content/uploads/2019/08/Den-thuong-lao-Cai-434x419.jpg'
    },
    {
        id: 2,
        name: 'DU LỊCH LÀO CAI',
        address: 'Cẩm nang du lịch Lào Cai bạn cần biết',
        description: 'Lào Cai thành phố biên cương với rất nhiều địa điểm tham quan cũng như check in đẹp. Trong...',
        img: 'https://duchuygrandhotel.com/wp-content/uploads/2022/07/kinh-nghiem-di-san-may-o-y-ty-434x419.jpg'
    },
    {
        id: 3,
        name: 'DU LỊCH LÀO CAI',
        address: 'Địa điểm tham quan tại thành phố Lào Cai',
        description: 'Lào Cai thành phố biên cương với rất nhiều địa điểm tham quan cũng như check in đẹp. Trong...',
        img: 'https://duchuygrandhotel.com/wp-content/uploads/2019/08/Den-thuong-lao-Cai-434x419.jpg'
    }
]

const listFeeback: ITypeListService[] = [
    {
        id: 1,
        name: 'Nguyễn Văn A',
        from: 'Lào Cai',
        description: 'Khách sạn đẹp và sang trọng, tiện nghi đầy đủ và cao cấp, ban công view đẹp và tất cả các phòng đều có bồn tắm, giá rất ưu đãi, nhân viên rất ân cần, thân thiện. 2 bé nhà mình rất thích tắm bể bơi và xông hơi Hàn Quốc ở đây. Nói chung xứng đáng được đánh giá khách sạn tốt nhất TP. Lào Cai hiện nay. Một lựa chọn hàng đầu cho bạn nào sắp tới Lào Cai.'
    },
    {
        id: 2,
        name: 'Nguyễn Văn B',
        from: 'Bắc Giang',
        description: 'Khách sạn đẹp và sang trọng, tiện nghi đầy đủ và cao cấp, ban công view đẹp và tất cả các phòng đều có bồn tắm, giá rất ưu đãi, nhân viên rất ân cần, thân thiện. 2 bé nhà mình rất thích tắm bể bơi và xông hơi Hàn Quốc ở đây. Nói chung xứng đáng được đánh giá khách sạn tốt nhất TP. Lào Cai hiện nay. Một lựa chọn hàng đầu cho bạn nào sắp tới Lào Cai.'
    },
    {
        id: 3,
        name: 'Nguyễn Văn C',
        from: 'Hà Nội',
        description: 'Khách sạn đẹp và sang trọng, tiện nghi đầy đủ và cao cấp, ban công view đẹp và tất cả các phòng đều có bồn tắm, giá rất ưu đãi, nhân viên rất ân cần, thân thiện. 2 bé nhà mình rất thích tắm bể bơi và xông hơi Hàn Quốc ở đây. Nói chung xứng đáng được đánh giá khách sạn tốt nhất TP. Lào Cai hiện nay. Một lựa chọn hàng đầu cho bạn nào sắp tới Lào Cai.'
    },
    {
        id: 4,
        name: 'Nguyễn Văn R',
        from: 'Hải Dương',
        description: 'Khách sạn đẹp và sang trọng, tiện nghi đầy đủ và cao cấp, ban công view đẹp và tất cả các phòng đều có bồn tắm, giá rất ưu đãi, nhân viên rất ân cần, thân thiện. 2 bé nhà mình rất thích tắm bể bơi và xông hơi Hàn Quốc ở đây. Nói chung xứng đáng được đánh giá khách sạn tốt nhất TP. Lào Cai hiện nay. Một lựa chọn hàng đầu cho bạn nào sắp tới Lào Cai.'
    },
    {
        id: 5,
        name: 'Nguyễn Văn Tuệ',
        from: 'Thái Bình',
        description: 'Khách sạn đẹp và sang trọng, tiện nghi đầy đủ và cao cấp, ban công view đẹp và tất cả các phòng đều có bồn tắm, giá rất ưu đãi, nhân viên rất ân cần, thân thiện. 2 bé nhà mình rất thích tắm bể bơi và xông hơi Hàn Quốc ở đây. Nói chung xứng đáng được đánh giá khách sạn tốt nhất TP. Lào Cai hiện nay. Một lựa chọn hàng đầu cho bạn nào sắp tới Lào Cai.'
    }
]
export {
    listsImage,
    listRooms,
    listServices,
    listTours,
    listFeeback
}