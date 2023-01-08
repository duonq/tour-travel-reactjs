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
    email: string
    password: string
    role?: string
}

type ITypeResetPassword = {
    token: string
    password: string
}

type IPagination = {
    page: number
    limit: number
    total: number
}

type IValueLabel = {
    value: number | string
    label: string
}

export type {
    IRouter,
    INotification,
    ILogin,
    ITypeResetPassword,
    IPagination,
    IValueLabel
}
