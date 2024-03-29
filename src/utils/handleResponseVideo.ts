
import { AxiosError, AxiosResponse } from "axios"

export interface IResponse {
    status: number | undefined
    error?: AxiosError<AxiosResponse<AxiosResponse<any, any>, any>>
    | AxiosResponse<any, any>
    | undefined
}

export const handleResponseVideo = {
    success: (res: AxiosResponse) => {
        return {
            status: res.status,
            data: res.data
        }
    },
    error: (res: AxiosError<AxiosResponse>) => {
        return {
            status: res.response?.status,
            error: res.response?.data
        }
    }
}