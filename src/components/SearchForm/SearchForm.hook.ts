import { rankList, sortList } from './../../utils/optionList';
import { IHeroList, IHeroListUpdate } from '@/interface/heroList'
import { heroListServie } from '@/service/heroList'
import { useHeroListStore } from '@/store/heroList'
import { HERO_IMAGE_URL } from '@/utils/constant'
import { attributeList, roleList } from '@/utils/optionList'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const useSearchForm = () => {

    const { register, handleSubmit, watch, formState: { errors }, } = useForm()

    const { setFetchHeroList, fetchHero, setHeroList } = useHeroListStore()

    const keyword = watch('keyword')
    const rank = watch('rank')
    const attribute = watch('attribute')
    const role = watch('role')
    const sort = watch('sort')

    const callData = async () => { // ทำใหม่ เพราะ Concept ไม่เหมือนของ pokemon
        const responseList = await heroListServie.getHeroList()
        console.log('check0', responseList)
        if (responseList.status === 200) {
            const responseResult = responseList.data || []
            console.log('check1', responseResult)
            const heroList = []
            setFetchHeroList({ data: [], loading: true, error: null })

            for (const hero of responseResult) {  //วน loop เพื่อสร้าง heroList
                if (responseResult)
                    heroList.push({
                        // ...responseResult,
                        ...hero,
                        image: HERO_IMAGE_URL + hero.img,
                        winRateHerald: (hero['1_win'] / hero['1_pick']) * 100,
                        winRateGuardian: (hero['2_win'] / hero['2_pick']) * 100,
                        winRateCrusader: (hero['3_win'] / hero['3_pick']) * 100,
                        winRateArchon: (hero['4_win'] / hero['4_pick']) * 100,
                        winRateLegend: (hero['5_win'] / hero['5_pick']) * 100,
                        winRateAncient: (hero['6_win'] / hero['6_pick']) * 100,
                        winRateDivine: (hero['7_win'] / hero['7_pick']) * 100,
                        winRateImmortal: (hero['8_win'] / hero['8_pick']) * 100,
                        winRateAverage: calWinRateAverage(hero) * 100,
                        pickHerald: hero['1_pick'],
                        pickGuardian: hero['2_pick'],
                        pickCrusader: hero['3_pick'],
                        pickArchon: hero['4_pick'],
                        pickLegend: hero['5_pick'],
                        pickAncient: hero['6_pick'],
                        pickDivine: hero['7_pick'],
                        pickImmortal: hero['8_pick'],
                        pickTotal:
                            + hero['1_pick'] + hero['2_pick']
                            + hero['3_pick'] + hero['4_pick']
                            + hero['5_pick'] + hero['6_pick']
                            + hero['7_pick'] + hero['8_pick']
                    })
            }
            console.log('check2', heroList)
            setFetchHeroList({ data: heroList, loading: false, error: null })
            const data = filterHero(heroList, keyword, rank, attribute, role, sort)
            setHeroList({ data: data, loading: false, error: null })
        } else {
            setFetchHeroList({
                data: [],
                loading: false,
                error: responseList.error
            })
        }

    }

    const filterHero = (
        heroList: IHeroListUpdate[],
        keyword: string,
        rank: number, //มีผลกับ win rate , pick
        attribute: number,
        role: number,
        sort: number
    ) => {
        //filter by keyword
        console.log('check Input', heroList)
        const keywordFilter = heroList.filter((item) => {
            return !keyword || item.localized_name.toLowerCase().includes(keyword.toLowerCase())
        })

        console.log('check fillter1', keywordFilter)

        //filter by attribute
        let attributeFilter
        if (attributeList[attribute] !== 'All Attribute') {
            if (attributeList[attribute] !== 'Universal') {
                attributeFilter = keywordFilter.filter((item) => {
                    // console.log('test attr', item.primary_attr)
                    // console.log('test attr-find', attributeList[attribute])
                    return item.primary_attr.includes(attributeList[attribute].toLowerCase().substring(0, 2))
                })
            } else {
                attributeFilter = keywordFilter.filter((item) => {
                    return item.primary_attr === 'all' //Api ใช้คำว่า all แทนคำว่า Universal คนละความหมายกับ All Attribute
                })
            }
        } else {
            attributeFilter = keywordFilter
        }
        console.log('check fillter2', attributeFilter)

        //filter by role
        const roleFilter = roleList[role] !== 'All Role' ?
            attributeFilter.filter((item) => {
                return item.roles.find((f) => {
                    return f.toLowerCase().includes(roleList[role].toLowerCase())
                })
            })
            :
            attributeFilter

        console.log('check fillter3', roleFilter)
        console.log('check before source by', rank)
        console.log('check before source by 2', sort)
        return sortBy(roleFilter, sort, rank)
    }

    const sortBy = (data: IHeroListUpdate[], sort: number, rank: number) => {
        switch (sortList[sort]) {
            case 'Name':
                return data.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0)
            case 'Win rate':
                switch (rankList[rank].name) {
                    case 'Herald':
                        return data.sort((a, b) => a['1_win'] / a['1_pick'] - b['1_win'] / b['1_pick'])
                    case 'Guardian':
                        return data.sort((a, b) => a['2_win'] / a['2_pick'] - b['2_win'] / b['2_pick'])
                    case 'Crusader':
                        return data.sort((a, b) => a['3_win'] / a['3_pick'] - b['3_win'] / b['3_pick'])
                    case 'Archon':
                        return data.sort((a, b) => a['4_win'] / a['4_pick'] - b['4_win'] / b['4_pick'])
                    case 'Legend':
                        return data.sort((a, b) => a['5_win'] / a['5_pick'] - b['5_win'] / b['5_pick'])
                    case 'Ancient':
                        return data.sort((a, b) => a['6_win'] / a['6_pick'] - b['6_win'] / b['6_pick'])
                    case 'Divine':
                        return data.sort((a, b) => a['7_win'] / a['7_pick'] - b['7_win'] / b['7_pick'])
                    case 'Immortal':
                        return data.sort((a, b) => a['8_win'] / a['8_pick'] - b['8_win'] / b['8_pick'])
                    case 'Average':
                        return data.sort((a, b) =>
                            + a['1_win'] / a['1_pick']
                            + a['2_win'] / a['2_pick']
                            + a['3_win'] / a['3_pick']
                            + a['4_win'] / a['4_pick']
                            + a['5_win'] / a['5_pick']
                            + a['6_win'] / a['6_pick']
                            + a['7_win'] / a['7_pick']
                            + a['8_win'] / a['8_pick']
                            - b['1_win'] / b['1_pick']
                            - b['2_win'] / b['2_pick']
                            - b['3_win'] / b['3_pick']
                            - b['4_win'] / b['4_pick']
                            - b['5_win'] / b['5_pick']
                            - b['6_win'] / b['6_pick']
                            - b['7_win'] / b['7_pick']
                            - b['8_win'] / b['8_pick']
                        )
                    default:
                        return data.sort((a, b) =>
                            + a['1_win'] / a['1_pick']
                            + a['2_win'] / a['2_pick']
                            + a['3_win'] / a['3_pick']
                            + a['4_win'] / a['4_pick']
                            + a['5_win'] / a['5_pick']
                            + a['6_win'] / a['6_pick']
                            + a['7_win'] / a['7_pick']
                            + a['8_win'] / a['8_pick']
                            - b['1_win'] / b['1_pick']
                            - b['2_win'] / b['2_pick']
                            - b['3_win'] / b['3_pick']
                            - b['4_win'] / b['4_pick']
                            - b['5_win'] / b['5_pick']
                            - b['6_win'] / b['6_pick']
                            - b['7_win'] / b['7_pick']
                            - b['8_win'] / b['8_pick']
                        )
                }
            case 'Pick':
                switch (rankList[rank].name) {
                    case 'Herald':
                        return data.sort((a, b) => a['1_pick'] - b['1_pick'])
                    case 'Guardian':
                        return data.sort((a, b) => a['2_pick'] - b['2_pick'])
                    case 'Crusader':
                        return data.sort((a, b) => a['3_pick'] - b['3_pick'])
                    case 'Archon':
                        return data.sort((a, b) => a['4_pick'] - b['4_pick'])
                    case 'Legend':
                        return data.sort((a, b) => a['5_pick'] - b['5_pick'])
                    case 'Ancient':
                        return data.sort((a, b) => a['6_pick'] - b['6_pick'])
                    case 'Divine':
                        return data.sort((a, b) => a['7_pick'] - b['7_pick'])
                    case 'Immortal':
                        return data.sort((a, b) => a['8_pick'] - b['8_pick'])
                    case 'Average':
                        return data.sort((a, b) =>
                            + a['1_pick']
                            + a['2_pick']
                            + a['3_pick']
                            + a['4_pick']
                            + a['5_pick']
                            + a['6_pick']
                            + a['7_pick']
                            + a['8_pick']
                            - b['1_pick']
                            - b['2_pick']
                            - b['3_pick']
                            - b['4_pick']
                            - b['5_pick']
                            - b['6_pick']
                            - b['7_pick']
                            - b['8_pick']
                        )
                    default:
                        return data.sort((a, b) =>
                            + a['1_pick']
                            + a['2_pick']
                            + a['3_pick']
                            + a['4_pick']
                            + a['5_pick']
                            + a['6_pick']
                            + a['7_pick']
                            + a['8_pick']
                            - b['1_pick']
                            - b['2_pick']
                            - b['3_pick']
                            - b['4_pick']
                            - b['5_pick']
                            - b['6_pick']
                            - b['7_pick']
                            - b['8_pick']
                        )
                }
            default:
                return data.sort((a, b) => a.localized_name > b.localized_name ? 1 : b.localized_name > a.localized_name ? -1 : 0)
        }
    }

    //Calculate average win rate 
    const calWinRateAverage = (hero: any) => {
        const winRateAVG =
            + (hero['1_win'] / hero['1_pick'])
            + (hero['2_win'] / hero['2_pick'])
            + (hero['3_win'] / hero['3_pick'])
            + (hero['4_win'] / hero['4_pick'])
            + (hero['5_win'] / hero['5_pick'])
            + (hero['6_win'] / hero['6_pick'])
            + (hero['7_win'] / hero['7_pick'])
            + (hero['8_win'] / hero['8_pick'])
        return winRateAVG / 8
    }
    useEffect(() => {
        callData()
    }, [])

    useEffect(() => {
        const data = filterHero(fetchHero.data, keyword, rank, attribute, role, sort)
        setHeroList({
            data: data,
            loading: false,
            error: null
        })
    }, [keyword, rank, attribute, role, sort])

    return {
        fieldKeyword: register('keyword'),
        fieldRank: register('rank'),
        fieldAttribute: register('attribute'),
        fieldRole: register('role'),
        fieldSort: register('sort'),
    }
}

export { useSearchForm }

