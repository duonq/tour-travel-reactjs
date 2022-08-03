import { IPypeListMenu } from "./IConstant"
import { UserOutlined, LogoutOutlined } from "@ant-design/icons"

const listsMenu: IPypeListMenu[] = [
  {
    id: 1,
    href: "/",
    title: "Home"
  },
  {
    id: 2,
    href: "/tours",
    title: "Tours"
  },
  {
    id: 3,
    href: "/about",
    title: "About"
  },
  {
    id: 4,
    href: "/contact",
    title: "Contact"
  },
  {
    id: 5,
    href: "/blog",
    title: "Blog"
  }
]

const listsContact: IPypeListMenu[] = [
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

export {
  listsMenu,
  listsContact
}