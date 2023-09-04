import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', () => {
    let token = ''
    const getToken = () => token
    const setToken = (newToken:string) => {
        token = newToken
    }
    return {
        token,
        getToken,
        setToken
    }
})