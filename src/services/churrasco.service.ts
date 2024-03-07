import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/'
})

export const postApi = (url:string, data:any) => {
    return api.post(url, data)
}

export const getApi = (url:string) => {
    return api.get(url)
}