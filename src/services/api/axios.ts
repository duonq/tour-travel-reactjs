import axios from "axios"
import { KeyStorage, StatusCode, TypeNotification } from "../../shared/emuns"
import { getDataStorage, NotificationCustom } from "../../shared/function"

const apiConfig = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    },
    timeout: 10000
})

apiConfig.interceptors.request.use(
    (config: any) => {
        const token = getDataStorage(KeyStorage.token)
        if (token) {
            config.headers.Authorization = "Bearer " + token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
apiConfig.interceptors.response.use(
    (response: any) => {
        return response
    },
    (error: any) => {
        const { status } = error.response
        if (status === StatusCode.expired_token) {
            NotificationCustom({
                type: TypeNotification.warning,
                message: "Vui lòng đăng nhập!"
            })
            // history.push(RouterNameContact.login)
            return
        }
        return error.response
    }
)

const apiServices = {
    post(urlApi: string, params?: any) {
        return apiConfig
            .post(urlApi, params)
            .then(response => response)
            .catch(error => error)
    },
    put(urlApi: string, params?: any) {
        return apiConfig
            .put(urlApi, params)
            .then(response => response)
            .catch(error => error)
    },
    patch(urlApi: string, params?: any) {
        return apiConfig
            .patch(urlApi, params)
            .then(response => response)
            .catch(error => error)
    },
    get(urlApi: string) {
        return apiConfig
            .get(urlApi)
            .then(response => response)
            .catch(error => error)
    },
    delete(urlApi: string) {
        return apiConfig
            .delete(urlApi)
            .then(response => response)
            .catch(error => error)
    }
}
export default apiServices
