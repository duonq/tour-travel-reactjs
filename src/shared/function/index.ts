import { notification } from "antd"
import {  INotification } from "../@types"
import { KeyStorage } from "../emuns"
import { regex } from "../regex"

const checkAuthentication = () => {
    return localStorage.getItem(KeyStorage.accessToken)
}

const getRole = () => {
    return localStorage.getItem(KeyStorage.role)
}

const checkPermissionRouter = (listRole: any) => {
    return true
}

const clearStorage = () => {
    localStorage.clear()
}

const copyDeep = (value: any) => {
    return JSON.parse(JSON.stringify(value))
}

const getDataStorage = (key: string) => {
    return localStorage.getItem(key)
}

const setDataStorage = (key: string, value: string) => {
    localStorage.setItem(key, value)
}

const removeKeyStorage = (key: string) => {
    localStorage.removeItem(key)
}

const setDataSession = (key: string, value: string) => {
    sessionStorage.setItem(key, value)
}

const removeKeySession = (key: string) => {
    sessionStorage.removeItem(key)
}

const getDataSession = (key: string) => {
    return sessionStorage.getItem(key)
}

const debounce = (func: Function, delay: any) => {
    let debounceTimer: any
    return function () {
        // @ts-ignore
        const context = this
        const args = arguments
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => func.apply(context, args), delay)
    }
}

const autoTrimDebounceInput = debounce(
    async ({ formInstance, name, value }: any) => {
        if (value && regex.space_full.test(value) && formInstance) {
            formInstance.setFieldsValue({
                [name]: value.trim()
            })
            return
        }

        if (value && regex.space_top_or_end.test(value) && formInstance) {
            formInstance.setFieldsValue({
                [name]: value.trim()
            })
            await formInstance
                .validateFields([name])
                .catch((e: any) => e.outOfDate)
        }
    },
    1000
)

const isArray = (arrayCheck: any): boolean => {
    return arrayCheck && Array.isArray(arrayCheck) && arrayCheck.length > 0
}

const isObject = (objectCheck: any): boolean => {
    return (
        objectCheck &&
        typeof objectCheck === "object" &&
        Object.keys(objectCheck).length > 0
    )
}

const NotificationCustom = ({ type, message }: INotification) => {
    notification[type]({
        message: message,
        duration: 2,
        placement: "topRight"
    })
}

function deviceResponsiveIOS() {
    return (
        [
            "iPad Simulator",
            "iPhone Simulator",
            "iPod Simulator",
            "iPad",
            "iPhone",
            "iPod"
        ].includes(navigator.platform) ||
        // iPad on iOS 13 detection
        (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    )
}

// const getSubdomainName = (): string => {
//     const hostname = window.location.hostname
//     return hostname.search(KeyTypeScreenLogin.admin) !== -1
//         ? KeyTypeScreenLogin.admin
//         : KeyTypeScreenLogin.contact
// }

const specials = "!@#$%^&*()_+{}:\"<>?|[];',./`~"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"

const all = lowercase + uppercase + numbers

function pick(exclusions: string, string: string, min: number, max: number) {
    let n: number,
        chars: string = ""

    if (max === undefined) {
        n = min
    } else {
        n = min + Math.floor(Math.random() * (max - min + 1))
    }

    var i = 0
    while (i < n) {
        const character = string.charAt(
            Math.floor(Math.random() * string.length)
        )
        if (exclusions.indexOf(character) < 0 && chars.indexOf(character) < 0) {
            chars += character
            i++
        }
    }

    return chars
}

function customParamSearch(url: string, payload: any) {
    if (payload) {
        let index = 0
        for (const key in payload) {
            if (payload[key]) {
                if (!index) {
                    url += `?${key}=${payload[key]}`
                }
                if (index) {
                    url += `&${key}=${payload[key]}`
                }
                index++
            }
        }
    }
    return url
}

function objectHasKey(objCheck: any, keyCheck: any): boolean {
    return (
        objCheck &&
        typeof objCheck === "object" &&
        Object.keys(objCheck).includes(keyCheck)
    )
}

export {
    autoTrimDebounceInput,
    debounce,
    deviceResponsiveIOS,
    NotificationCustom,
    isArray,
    isObject,
    copyDeep,
    clearStorage,
    checkAuthentication,
    checkPermissionRouter,
    getDataStorage,
    getRole,
    setDataStorage,
    customParamSearch,
    objectHasKey,
    removeKeyStorage,
    setDataSession,
    removeKeySession,
    getDataSession
}
