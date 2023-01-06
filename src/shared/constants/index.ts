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
import { MenuProps } from "antd";
import { regex } from "../regex";

const listsMenu: MenuProps['items'] = [
  {
    title: "1",
    key: "/",
    label: "Trang chủ",
  },
  {
    title: "2",
    key: "/rooms",
    label: "Phòng nghỉ"
  },
  {
    title: "3",
    key: "/events",
    label: "Sự kiện",
    children: [
      {
        title: "7",
        label: 'Tổ chức tiệc',
        key: '/party-organizing',
      },
      {
        title: "8",
        label: 'Hội nghị phòng',
        key: '/asas',
      },
    ],
  },
  {
    title: "4",
    key: "/blog",
    label: "Blog"
  },
  {
    title: "5",
    key: "/contact",
    label: "Liên hệ"
  }
]

const listsFooter = [
  {
    title: "Trang chủ",
    key: "/",
  },
  {
    title: "Phòng nghỉ",
    key: "/rooms",
  },
  {
    title: "Sự kiện",
    key: "/events",
  },
  {
    title: "Blog",
    key: "/blog",
  },
  {
    title: "Liên hệ",
    key: "/contact",
  }
]

const listsContact: ITypeListMenu[] = [
  {
    id: 1,
    href: "/",
    title: "Hưng Hà, Thái Bình",
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
    title: "nmt22031997@gmail.com",
    icon: "mail"
  },
  {
    id: 4,
    href: "/",
    title: "travel.room",
    icon: "skypee"
  },
  {
    id: 5,
    href: "/",
    title: "travel.room.mit",
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

const listEquipment = [
  {
    title: "Buffet sáng tự chọn"
  },
  {
    title: "Đồ miến phí chuẩn bị hàng ngày"
  },
  {
    title: "GYM & Bơi bốn mùa miễn phí"
  },
  {
    title: "Bồn tắm riêng có sen vòi Toto"
  },
  {
    title: "Điều hòa tổng có điều khiển riêng"
  },
  {
    title: "Wifi tốc độ cao"
  },
  {
    title: "Tivi Sony 55inch"
  }
]

let dataPassword: any = null

const rulePasswordLogin = [
  {
    required: true,
    message: "Vui lòng nhập mật khẩu của bạn",
    validationTrigger: "onBlur"
  },
  () => ({
    validator(rule: any, value: any) {
      dataPassword = value
      if (value && !regex.password.test(value)) {
        return Promise.reject("Mật khẩu không đúng định dạng.")
      }

      return Promise.resolve()
    }
  })
]

const ruleName = [
  {
    required: true,
    message: "Vui lòng nhập tên của bạn",
    validationTrigger: "onBlur"
  }
]

const ruleValidateEmail = [
  {
    required: true,
    message: "Hãy điền địa chỉ email của bạn."
  },
  () => ({
    validator(rule: any, value: any) {
      if (value && !regex.email.test(value)) {
        return Promise.reject(
          new Error(
            "Địa chỉ E-mail không chính xác. Vui lòng kiểm tra các thông tin bạn đã nhập và thử lại."
          )
        )
      }
      return Promise.resolve()
    }
  })
]

const ruleRequired = [
  {
    required: true,
    message: "Hãy điền đầy đủ thông tin."
  }
]

const ruleConfirmPasswordLogin = [
  {
    required: true,
    message: "Vui lòng nhập mật khẩu (để xác nhận).",
    validationTrigger: "onBlur"
  },
  () => ({
    validator(rule: any, value: any) {
      if (value && value !== dataPassword) {
        return Promise.reject(
          new Error("Mật khẩu xác nhận không khớp.")
        )
      }
      return Promise.resolve()
    }
  })
]

export {
  listsMenu,
  listsFooter,
  listsContact,
  listImgs,
  listEquipment,
  rulePasswordLogin,
  ruleValidateEmail,
  ruleConfirmPasswordLogin,
  ruleName,
  ruleRequired
}