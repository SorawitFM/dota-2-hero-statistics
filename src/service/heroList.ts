import axios from 'axios'
import { handleResponse, IResponse } from '../utils/handleResponse'
import { IHeroList } from '@/interface/heroList'


interface IHeroListResponse extends IResponse {
    data?: IHeroList[]
}



export const heroListServie = {
    getHeroList: async (): Promise<IHeroListResponse> => {
        try {
            const response = await axios.get(`https://api.opendota.com/api/heroStats`)
            //console.log(response)
            return handleResponse.success(response)
        } catch (error: any) {
            return handleResponse.error(error)
        }
    }
}