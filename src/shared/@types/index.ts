import { IconType } from "antd/lib/notification"
import { FormInstance } from "antd"
import { ComponentType, FunctionComponent } from "react"

type IRouter = {
    exact?: boolean
    path: string
    component: ComponentType
    title?: string
    isAuth?: boolean
    role?: string[]
    layout?: FunctionComponent
}

type INotification = {
    type: IconType
    message: string
}

type ILogin = {
    username: string
    password: string
    role?: string
    identifier?: string
}

type ITypeResetPassword = {
    code: string
    password: string
}

export type {
    IRouter,
    INotification,
    ILogin,
    ITypeResetPassword
}
