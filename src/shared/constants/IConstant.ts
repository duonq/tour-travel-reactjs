type ITypeRouter = {
  exact: boolean
  path: string
  component: JSX.Element
  title?: string
  isAuth?: boolean
  role?: string[]
}

type IPypeListMenu = {
  id: number
  href: string
  title: string
  icon?: string
}

export type {
  ITypeRouter,
  IPypeListMenu
}