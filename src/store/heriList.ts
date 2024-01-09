import { IHeroList } from '@/interface/heroList'
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

type useHeroListStoreType = {
    hero: heroType,
    fetchHero: heroType,
    setHeroList: (value: heroType) => void, //ถ้าเรียบfunction ก็เหมือน setPokemonList(value) แล้วทำ set({ pokemon: value })
    setFetchHeroList: (value: heroType) => void,
    clearHero: () => void,
}

export const useHeroListStore = create<useHeroListStoreType>((set) => ({
    ...initStore, //ค่าเริ่มต้น
    setHeroList: (value: heroType) => set({ hero: value }), //ถ้าเรียบfunction ก็เหมือน setPokemonList(value) แล้วทำ set({ pokemon: value })
    setFetchHeroList: (value: heroType) => set({ fetchHero: value }),
    clearHero: () => set({ ...initStore })
}))