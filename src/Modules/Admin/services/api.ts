import apiServices from "../../../services/api/axios"
import { ILogin, ITypeResetPassword } from "../../../shared/@types"


export const AuthService = {
    postLogin(payload: ILogin) {
        let url = 'auth/login'
        return apiServices.post(url, payload)
    },
    forgotPassword(payload: string) {
        let url = 'mail/forgot-password'
        return apiServices.post(url, payload)
    },
    changePassword(payload: ITypeResetPassword) {
        let url = 'auth/forgot-password'
        return apiServices.post(url, payload)
    },
    getMyProfile() {
        let url = '/member/my-profile'
        return apiServices.get(url)
    }
}
export const ApiService = {
    getListRoom() {
        let url = 'rooms'
        return apiServices.get(url)
    },
    createRoom(payload: any) {
        let url = 'rooms'
        return apiServices.post(url, payload)
    }
}
