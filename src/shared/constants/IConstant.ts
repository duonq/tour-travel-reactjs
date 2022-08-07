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

export type {
  ITypeRouter,
  ITypeListMenu,
  ITypeIcon
}