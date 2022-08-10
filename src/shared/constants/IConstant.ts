type ITypeRouter = {
  exact: boolean
  path: string
  component: JSX.Element
  title?: string
  isAuth?: boolean
  role?: string[]
}

type ITypeListMenu = {
  id: number
  href: string
  title: string
  icon?: string
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

export type {
  ITypeRouter,
  ITypeListMenu,
  ITypeIcon,
  ITypeInputCustom
}