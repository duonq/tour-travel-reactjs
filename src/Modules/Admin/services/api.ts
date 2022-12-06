import apiServices from "../../../services/api/axios"
import { ILogin, ITypeResetPassword } from "../../../shared/@types"


const AuthService = {
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
    }
}

export default AuthService
