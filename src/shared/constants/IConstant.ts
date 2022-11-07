import { type } from "os"

type ITypeRouter = {
  exact?: boolean
  path: string
  component: any
  title?: string
  isAuth?: boolean
  role?: string[]
  layout?: any
}

type ITypeListMenu = {
  id: number
  href: string
  title: string
  icon?: string,
  children?: any[]
}

type ITypeIcon = {
  key: string
  value: JSX.Element
  href: string
}

type ITypeInputCustom = {
  name?: string
  classCustom?: string
  type?: string
  className?: string
  placeholder?: string
  prefix?: React.ReactElement
  suffix?: React.ReactElement
  value?: string
  onChange?: any
  onBlur?: any
  message?: string
  messageStyle?: string
  showMessage?: boolean
  visibleIcon?: React.ReactElement
  hiddenIcon?: React.ReactElement
}

type ITypeButtonCustom = {
  title?: string 
  color?: string 
  bg?: string 
  colorBorder?: string 
  icon?: any
  onClick?: any
  disabled?: boolean 
  classCustom?: string 
  preventEventClick?: any
  widthIcon?: any
  heightIcon?: any
  prefix?: any
  suffix?: any
}

type ITypeTabCustom = {
  tabLabels: any[]
  tabPanes?: any[]
}

export type {
  ITypeRouter,
  ITypeListMenu,
  ITypeIcon,
  ITypeInputCustom,
  ITypeButtonCustom,
  ITypeTabCustom
}