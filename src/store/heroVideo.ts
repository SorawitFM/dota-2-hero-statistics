// import { Item } from "@/interface/heroVideo"
// import { create } from 'zustand'

// const initStore = { //ค่าเริ่มต้น
//     heroVideo: { //เป็น hero ทีได้จากการ fillter โดย User
//         data: [],
//         loading: false,
//         error: null
//     }
// }

// type heroVideo = {
//     data: Item[],
//     loading: boolean,
//     error: null | any
// }

// type useHeroVideoStoreType = {
//     heroVideo: heroVideo, // ต้องกำหนด Type ที่เพิ่มเข้าไปด้วย
//     setHeroVideo: (value: heroVideo) => void,
//     clearHeroVideo: () => void,
// }

// export const useHeroVideoStore = create<useHeroVideoStoreType>((set) => ({
//     ...initStore, //ค่าเริ่มต้น
//     setHeroVideo: (value: heroVideo) => set({ heroVideo: value }),
//     clearHeroVideo: () => set({ ...initStore })
// }))