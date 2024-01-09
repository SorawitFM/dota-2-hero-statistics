import axios from 'axios'
import React from 'react'
import { handleResponse, IResponse } from '../utils/handleResponse'
import { IHeroList } from '@/interface/heroList'


interface IHeroList extends IResponse {
    data?: IHeroList[]
}



export const heroListServie = {
    getHeroList: async (): Promise<IResponse> => {
        try {
            const response = await axios.get(`https://api.opendota.com/api/heroStats`)
            //console.log(response)
            return handleResponse.success(response)
        } catch (error: any) {
            return handleResponse.error(error)
        }

    }
}