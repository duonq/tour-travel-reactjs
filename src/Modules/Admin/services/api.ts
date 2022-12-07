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
    },
    getListMember(dataSerach: string) {
        let url = 'member/list'
        if (dataSerach) {
            url = url + `?search=${dataSerach}`
        }
        return apiServices.get(url)
    },
    getListCustomer(skip: number, dataSearch: string) {
        let url = 'customers?take=10'
        if (skip) {
            url = url + `&skip=${skip}`
        }
        if (dataSearch) {
            url = url + `&search=${dataSearch}`
        }
        return apiServices.get(url)
    },
    getListCounpon() {
        let url = 'counpon'
        return apiServices.get(url)
    },
    getListBlogs() {
        let url = 'blogs'
        return apiServices.get(url)
    },
    createUser(payload: any) {
        let url = 'member'
        return apiServices.post(url, payload)
    },
    deleteUser(id: number) {
        let url = `member/${id}`
        return apiServices.delete(url)
    }
}
