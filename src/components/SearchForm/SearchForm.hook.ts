import { rankList, sortList } from './../../utils/optionList';
import { IHeroListUpdate } from '@/interface/heroList'
import { heroListServie } from '@/service/heroList'
import { useHeroListStore } from '@/store/heroList'
import { HERO_IMAGE_URL } from '@/utils/constant'
import { attributeList, roleList } from '@/utils/optionList'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'



const reset = async () => {
    localStorage.clear()
    window.location.reload()
}

const searchKeyword = async () => {

}



const useSearchForm = () => {

    //กำหนดให้ Default ของ SearchForm เป็นค่าใน localstorage หรือค่าเริ่มต้น
    const setDefaultValue = () => {
        const storedData = localStorage.getItem('searchFormData')
        const value = {
            keyword: '',
            rank: 0,
            attribute: 0,
            role: 0,
            sort: 0,
        }
        if (storedData) {
            const parsedData = JSON.parse(storedData)
            if (parsedData.keyword) {
                value.keyword = parsedData.keyword
            }
            if (parsedData.rank) {
                value.rank = parsedData.rank
            }
            if (parsedData.attribute) {
                value.attribute = parsedData.attribute
            }
            if (parsedData.role) {
                value.role = parsedData.role
            }
            if (parsedData.sort) {
                value.sort = parsedData.sort
            }
        }
        return value
    }
    const {
        register,
        // handleSubmit,
        watch,
        //   formState: { errors },
    } = useForm({ //ถ้าไม่ได้กำหนด default ในการ Render ครั้งแรกจะได้ค่าเป็น undefined
        defaultValues:
            setDefaultValue()
    })

    const { setFetchHeroList, fetchHero, setHeroList } = useHeroListStore()


    const keyword = watch('keyword')
    const rank = watch('rank')
    const attribute = watch('attribute')
    const role = watch('role')
    const sort = watch('sort')

    useEffect(() => {
        localStorage.setItem('searchFormData', JSON.stringify({
            keyword,
            rank,
            attribute,
            role,
            sort,
        }));
    }, [keyword, rank, attribute, role, sort])



    const callData = async () => { // ทำใหม่ เพราะ Concept ไม่เหมือนของ pokemon
        const responseList = await heroListServie.getHeroList()
        console.log('check0', responseList)
        if (responseList.status === 200) {
            setFetchHeroList({ data: [], loading: true, error: null })
            const responseResult = responseList.data || []
            console.log('check1', responseResult)
            const heroList = []



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
                        winRateAverage: await calWinRateAverage(hero),
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
                            + hero['7_pick'] + hero['8_pick'],

                        winRate: await winRate(hero, rank),
                        pickValue: await pickValue(hero, rank),
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
        rank: number, //มีผลกับ Win Rate , pick
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
        return sortBy(roleFilter, sort)
    }

    const sortBy = (data: IHeroListUpdate[], sort: number) => {
        switch (sortList[sort]) {
            case 'Name':
                return data.sort((a, b) => a.localized_name > b.localized_name ? 1 : b.localized_name > a.localized_name ? -1 : 0)
            case 'Win Rate':
                return data.sort((b, a) => a.winRate - b.winRate)
            case 'Matches Played':
                return data.sort((b, a) => a.pickValue - b.pickValue)
            default:
                return data.sort((a, b) => a.localized_name > b.localized_name ? 1 : b.localized_name > a.localized_name ? -1 : 0)
        }
    }

    //Calculate average Win Rate 
    const calWinRateAverage = async (hero: any) => {
        return ((
            + hero['1_win'] + hero['2_win']
            + hero['3_win'] + hero['4_win']
            + hero['5_win'] + hero['6_win']
            + hero['7_win'] + hero['8_win'])
            /
            (
                + hero['1_pick'] + hero['2_pick']
                + hero['3_pick'] + hero['4_pick']
                + hero['5_pick'] + hero['6_pick']
                + hero['7_pick'] + hero['8_pick']
            ) * 100
        )
    }

    const winRate = async (hero: any, rank: number) => {
        const ranks: string = rankList[rank].name
        switch (ranks) {
            case 'Herald':
                return (hero['1_win'] / hero['1_pick']) * 100
            case 'Guardian':
                return (hero['2_win'] / hero['2_pick']) * 100
            case 'Crusader':
                return (hero['3_win'] / hero['3_pick']) * 100
            case 'Archon':
                return (hero['4_win'] / hero['4_pick']) * 100
            case 'Legend':
                return (hero['5_win'] / hero['5_pick']) * 100
            case 'Ancient':
                return (hero['6_win'] / hero['6_pick']) * 100
            case 'Divine':
                return (hero['7_win'] / hero['7_pick']) * 100
            case 'Immortal':
                return (hero['8_win'] / hero['8_pick']) * 100
            case 'All Ranks':
                return await calWinRateAverage(hero)
            default:
                return await calWinRateAverage(hero)
        }
    }
    const pickValue = async (hero: any, rank: number) => {
        const ranks: string = rankList[rank].name
        switch (ranks) {
            case 'Herald':
                return hero['1_pick']
            case 'Guardian':
                return hero['2_pick']
            case 'Crusader':
                return hero['3_pick']
            case 'Archon':
                return hero['4_pick']
            case 'Legend':
                return hero['5_pick']
            case 'Ancient':
                return hero['6_pick']
            case 'Divine':
                return hero['7_pick']
            case 'Immortal':
                return hero['8_pick']
            case 'All Ranks':
                return await totalPick(hero)
            default:
                return await totalPick(hero)
        }
    }



    const totalPick = async (hero: any) => {
        return (
            + hero['1_pick'] + hero['2_pick']
            + hero['3_pick'] + hero['4_pick']
            + hero['5_pick'] + hero['6_pick']
            + hero['7_pick'] + hero['8_pick']
        )
    }



    useEffect(() => {
        console.log('callData!!!!')
        callData()

    }, [])

    useEffect(() => {
        callData()
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

export { useSearchForm, reset }

