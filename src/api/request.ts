// axios 二次封装

import axios from 'axios'
import { useUserStore } from '@/stores/user'
import type { AxiosInstance,AxiosError,AxiosRequestConfig, AxiosResponse } from 'axios'
import { ErrMessage,ResponseData } from './types'

const request:AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000
})

request.interceptors.request.use(
    config => {
        const userStore = useUserStore()
        const token = userStore.getToken
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error:AxiosError) => {
        return Promise.reject(error)
    }
)

const errMessage:ErrMessage = {
    '401': { message: "请您先登录~", duration: 2000, showClose: true },
    '403': { message: "登录已过期,请重新登录", duration: 2000, showClose: true },
    '404': { message: "您请求的资源不存在~", duration: 2000, showClose: true },
    '500': { message: "服务器异常,请稍后再试~", duration: 2000, showClose: true },
    internetError: {
      message: "网络已断开，请查看你的网络连接~",
      duration: 2000,
      showClose: true,
    },
  };

request.interceptors.response.use(
    (response:AxiosResponse) => {
        const { data } = response
        return data
    },
    (error:AxiosError) => {
        const { response } = error
        if (response) {
            const status  = response?.status
            const message = errMessage[status] || errMessage.internetError
            console.log(message)
        } else {
            console.log(errMessage.internetError)
        }
        return Promise.reject(error)
    }
)

const http = {
    get<T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<ResponseData<T>>{
        return request.get(url, { params, ...config })
    },
    post<T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<ResponseData<T>>{
        return request.post(url, data, config)
    },
    put<T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<ResponseData<T>>{
        return request.put(url, data, config)
    },
    delete<T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<ResponseData<T>>{
        return request.delete(url, { data, ...config})
    }
}



export default http