import axios from 'axios'
import { handleResponseVideo, IResponse } from '../utils/handleResponseVideo'
import { IHeroVideo } from '@/interface/heroVideo';


interface IHeroVideoResponse extends IResponse {
    data?: IHeroVideo[]
}

export const heroVideoService = {
    getHeroVideo: async (name: string): Promise<IHeroVideoResponse> => {
        try {
            const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    part: 'snippet',
                    maxResults: 4,
                    key: 'AIzaSyAO21nHmZIIH-6Ikz5JGnUSzG7ipead3jU',
                    // q: name + 'Dota 2'
                    channelID: 'UC1YCxISkweN5vLsOJ0zElZQ'
                }
            });

            return handleResponseVideo.success(response);
        } catch (error: any) {
            console.error(error.response?.data);  // แสดงข้อความที่ API ส่งกลับ
            return handleResponseVideo.error(error);
        }
    }
};