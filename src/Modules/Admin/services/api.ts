import apiServices from "../../../services/api/axios"
import { ILogin } from "../../../shared/@types"


const AuthService = {
    postLogin( payload: ILogin) {
        let url = 'auth/login'
        return apiServices.post(url, payload)
    },
}

export default AuthService
