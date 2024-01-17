import { IHeroList, IHeroListUpdate } from '@/interface/heroList'
import { create } from 'zustand'

const initStore = { //ค่าเริ่มต้น
    hero: { //เป็น hero ทีได้จากการ fillter โดย User
        data: [],
        loading: false,
        error: null
    },
    fetchHero: { //เป็น hero ทั้งหมด
        data: [],
        loading: false,
        error: null
    }
}

type heroType = {
    data: IHeroList[],
    loading: boolean,
    error: null | any
}

type heroTypeUpdate = {
    data: IHeroListUpdate[],
    loading: boolean,
    error: null | any
}

type useHeroListStoreType = {
    hero: heroTypeUpdate, // ต้องกำหนด Type ที่เพิ่มเข้าไปด้วย
    fetchHero: heroTypeUpdate, // ต้องกำหนด Type ตาม API
    setHeroList: (value: heroTypeUpdate) => void, //ถ้าเรียบfunction ก็เหมือน setHeroList(value) แล้วทำ set({ hero: value })
    setFetchHeroList: (value: heroTypeUpdate) => void,
    clearHero: () => void,
}

export const useHeroListStore = create<useHeroListStoreType>((set) => ({
    ...initStore, //ค่าเริ่มต้น
    setHeroList: (value: heroTypeUpdate) => set({ hero: value }), //ถ้าเรียบfunction ก็เหมือน setHeroList(value) แล้วทำ set({ hero: value })
    setFetchHeroList: (value: heroTypeUpdate) => set({ fetchHero: value }),
    clearHero: () => set({ ...initStore })
}))