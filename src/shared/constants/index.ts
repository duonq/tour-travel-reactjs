import { ITypeListMenu } from "./IConstant"
import img from "../../../src/assets/img1.svg";
import img2 from "../../../src/assets/img2.svg";
import img3 from "../../../src/assets/img3.svg";
import img4 from "../../../src/assets/img4.svg";
import img5 from "../../../src/assets/img5.svg";
import img6 from "../../../src/assets/img6.svg";
import img7 from "../../../src/assets/img7.svg";
import img8 from "../../../src/assets/img8.svg";
import img9 from "../../../src/assets/img9.svg";


const listsMenu: ITypeListMenu[] = [
  {
    id: 1,
    href: "/",
    title: "Trang chủ"
  },
  {
    id: 2,
    href: "/rooms",
    title: "Phòng nghỉ"
  },
  {
    id: 3,
    href: "",
    title: "Sự kiện"
  },
  {
    id: 4,
    href: "",
    title: "Dịch vụ"
  },
  {
    id: 5,
    href: "/contact",
    title: "Liên hệ"
  }
]

const listsContact: ITypeListMenu[] = [
  {
    id: 1,
    href: "/",
    title: "Bình Giang, Hải dương",
    icon: "map"
  },
  {
    id: 2,
    href: "/",
    title: "033 706 7403",
    icon: "phone"
  },
  {
    id: 3,
    href: "/",
    title: "ntlduong99@gmail.com",
    icon: "mail"
  },
  {
    id: 4,
    href: "/",
    title: "travel.tour",
    icon: "skypee"
  },
  {
    id: 5,
    href: "/",
    title: "travel.tour.mit",
    icon: "instagram"
  }
]

const listImgs = [
  {
    id: 1,
    src: img
  },
  {
    id: 2,
    src: img2
  },
  {
    id: 3,
    src: img3
  },
  {
    id: 4,
    src: img4
  },
  {
    id: 5,
    src: img5
  },
  {
    id: 6,
    src: img6
  },
  {
    id: 7,
    src: img7
  },
  {
    id: 8,
    src: img8
  },
  {
    id: 9,
    src: img9
  }
]

export {
  listsMenu,
  listsContact,
  listImgs
}