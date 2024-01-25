import { IHeroList } from '@/interface/heroList'
import { heroListServie } from '@/service/heroList'
import { HERO_IMAGE_URL } from '@/utils/constant'
import { attributeIcon } from '@/utils/optionList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


type heroType = {
    data: IHeroList[] | undefined
    loading: boolean
    error: null | any
}


const DetailPage = () => {
    const { name } = useParams()
    const [hero, setHero] = useState<heroType>({ data: [], loading: true, error: null })
    const [atkMax, setAtkMax] = useState<number>(0)
    const [atkMin, setAtkMin] = useState<number>(0)

    const callData = async (name: string) => {
        const response = await heroListServie.getHeroList()
        console.log('Response = ', response)
        if (response.status === 200) {
            if (response.data) {
                const thisHero: IHeroList[] = response.data?.filter((item) => {
                    return item.localized_name.toLowerCase().includes(name.toLowerCase())
                })
                if (thisHero.length > 0) {
                    setHero({ data: thisHero, loading: true, error: null })
                } else {
                    setHero({ data: [], loading: true, error: null })
                }

            }
        } else {
            setHero({ data: undefined, loading: true, error: response.error })
        }
        console.log('Hero = ', hero)
    }


    console.log('thisHero = ', hero)


    const iconImg = attributeIcon.find((item) => {
        if (hero.data && hero.data.length > 0)
            if (hero.data[0].primary_attr !== 'all') {
                return item.name.toLowerCase().includes(hero.data[0].primary_attr.toLowerCase());
            } else {
                return item.name.toLowerCase() === 'universal';
            }
    });

    const icon: string | undefined = iconImg ? iconImg.icon : undefined;

    //คำนวน Total Attack จาก Base Attack สูตรคำนวนจาก dota2.fandom.com
    const calAtkMin = () => {
        if (hero.data && hero.data.length > 0) {
            switch (hero.data[0].primary_attr) {
                case 'all':
                    setAtkMin(hero.data[0].base_attack_min + (hero.data[0].base_str + hero.data[0].base_agi + hero.data[0].base_int) * 0.7)
                    break
                case 'str':
                    setAtkMin(hero.data[0].base_attack_min + hero.data[0].base_str)
                    break
                case 'agi':
                    setAtkMin(hero.data[0].base_attack_min + hero.data[0].base_agi)
                    break
                case 'int':
                    setAtkMin(hero.data[0].base_attack_min + hero.data[0].base_int)
                    break
            }
        }
    }
    const calAtkMax = () => {
        if (hero.data && hero.data.length > 0) {
            switch (hero.data[0].primary_attr) {
                case 'all':
                    setAtkMax(hero.data[0].base_attack_max + (hero.data[0].base_str + hero.data[0].base_agi + hero.data[0].base_int) * 0.7)
                    break
                case 'str':
                    setAtkMax(hero.data[0].base_attack_max + hero.data[0].base_str)
                    break
                case 'agi':
                    setAtkMax(hero.data[0].base_attack_max + hero.data[0].base_agi)
                    break
                case 'int':
                    setAtkMax(hero.data[0].base_attack_max + hero.data[0].base_int)
                    break
            }
        }
    }


    useEffect(() => {
        if (name) callData(name)

    }, [name])

    useEffect(() => {
        calAtkMin()
        calAtkMax()
    }, [hero])



    return (
        <div style={{ fontFamily: 'Georgia, serif' }}>
            {hero.data && hero.data.length > 0 ? (
                <div className='d-flex justify-content-center' style={{ minHeight: '100vh' }}>
                    <div className='col-4 p-3' style={{ backgroundColor: 'rgba(250, 0, 0, 0.5)', minWidth: '350px' }}>
                        <div className='row-4 d-flex justify-content-center rounded p-3'>
                            <img src={HERO_IMAGE_URL + hero.data[0].img} alt="" className='img-fluid rounded border border-5 border-dark' />
                        </div>

                        <div className='row-8 d-flex bg-success p-2'>
                            <div className='col-4 bg-info text-white'>
                                NAME
                            </div>
                            <div className='col-8'>
                                {hero.data[0].localized_name.toUpperCase()}
                            </div>
                        </div>

                        <div className='row-8 d-flex bg-success p-2'>
                            <div className='col-4 bg-info text-white'>
                                ATTRIBUTE
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={icon} alt="" style={{ width: '1.5em' }} />
                                    {hero.data[0].primary_attr === 'all' ? ' UNIVERSAL ' :
                                        hero.data[0].primary_attr === 'str' ? ' STRENGTH ' :
                                            hero.data[0].primary_attr === 'agi' ? ' AGILITY ' : ' INTELLIGENCE '}
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li className="dropdown-item " style={{ color: 'lightcoral' }}>
                                        {'STRENGTH ' + hero.data[0].base_str + ' ( +' + hero.data[0].str_gain + ' )'}
                                    </li>
                                    <li className="dropdown-item " style={{ color: 'lightgreen' }}>
                                        {'AGILITY ' + hero.data[0].base_agi + ' ( +' + hero.data[0].agi_gain + ' )'}
                                    </li>
                                    <li className="dropdown-item " style={{ color: 'aqua' }}>
                                        {'INTELLIGENCE ' + hero.data[0].base_int + ' ( +' + hero.data[0].int_gain + ' )'}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='row-8 d-flex bg-success p-2'>
                            <div className='col-4 bg-info text-white'>
                                ATTACK TYPE
                            </div>
                            <div className='col-8'>
                                {hero.data[0].attack_type === 'Melee' ?
                                    (
                                        <>
                                            <svg width="24" height="24" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="currentColor" d="M61.016 53.798c-1.404-1.171-1.901-1.459-2.191-1.244a1.816 1.816 0 0 0-.563-1.004c-.431-.39-1.018-.562-1.631-.543a1.835 1.835 0 0 0-.6-1.318c-.432-.391-1.02-.563-1.633-.544a1.83 1.83 0 0 0-.599-1.318c-.431-.391-1.019-.563-1.631-.545a1.828 1.828 0 0 0-.6-1.318c-.501-.455-1.212-.615-1.932-.516c1.663-2.698-.462-5.752-2.124-7.141c-1.043-.87-.545.283-2.389 3.103a186.522 186.522 0 0 1-7.242-6.393c4.246-2.936 8.923-6.394 13.626-10.321C63.236 14.903 61.959 4 61.959 4s-1.354 1.384-3.682 3.002c-3.294 2.29-8.542 5.06-14.677 5.06l-.273-.002s-.315 5.472-11.329 17.129C20.986 17.531 20.673 12.06 20.673 12.06l-.273.002c-6.135 0-11.383-2.77-14.677-5.06C3.395 5.384 2.041 4 2.041 4S.764 14.903 12.491 24.695c4.694 3.92 9.376 7.39 13.616 10.322a185.325 185.325 0 0 1-7.233 6.392c-1.843-2.819-1.345-3.973-2.388-3.103c-1.662 1.389-3.787 4.442-2.124 7.141c-.719-.1-1.431.061-1.932.516a1.833 1.833 0 0 0-.6 1.318c-.613-.019-1.2.154-1.631.545c-.391.354-.58.822-.599 1.318c-.613-.02-1.201.153-1.632.544c-.391.354-.58.822-.599 1.318c-.613-.019-1.201.153-1.631.543a1.82 1.82 0 0 0-.562 1.004c-.291-.215-.788.073-2.192 1.244c-2.438 2.038.236 1.152 1.75 2.947c2.231 2.646 8.058 5.167 12.837 1.175c3.932-3.281 5.668-8.577 3.903-12.668c1.348-.734 5.276-2.931 10.526-6.305c5.256 3.379 9.178 5.569 10.525 6.306c-1.765 4.091-.029 9.387 3.903 12.668c4.779 3.992 10.605 1.472 12.837-1.175c1.514-1.795 4.189-.909 1.751-2.947M7.173 55.487c.89.297 1.849.184 2.48-.389c.389-.353.578-.821.597-1.317c.613.02 1.2-.153 1.632-.543c.39-.354.579-.822.598-1.319c.613.02 1.201-.154 1.634-.544c.389-.353.578-.822.597-1.318c.613.02 1.201-.152 1.633-.543c.386-.352.576-.816.598-1.309c3.628 5.063-4.455 11.827-9.769 7.282m37.356-41.945c4.43-.188 8.369-1.681 11.469-3.369c-1.197 3.742-3.731 8.295-8.955 12.654c-4.173 3.485-8.326 6.596-12.17 9.299a122.867 122.867 0 0 1-1.846-1.86c8.319-8.816 10.786-14.322 11.502-16.724m-25.058 0c.951 3.187 4.944 11.821 21.674 26.438c-5.745-3.468-14.952-9.44-24.188-17.152c-5.223-4.359-7.757-8.912-8.955-12.654c3.1 1.687 7.04 3.18 11.469 3.368m3.384 26.437a170.332 170.332 0 0 0 4.52-4.093c.325.222.646.438.966.653a203.536 203.536 0 0 1-5.486 3.44m24.203 8.226c.022.492.212.957.598 1.309c.433.391 1.021.563 1.634.543c.019.496.208.966.597 1.318c.433.39 1.021.563 1.634.544c.02.497.208.966.598 1.319c.432.39 1.02.563 1.633.543c.019.496.207.965.597 1.317c.632.572 1.591.686 2.48.389c-5.316 4.545-13.399-2.219-9.771-7.282" />
                                            </svg>
                                            {' MELEE'}
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <svg width="24" height="24" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="currentColor" d="M61.631 11.6c.66-1.588.355-2.105-.283-2.744c-.852-.854-2.883-1.621-4.221.023a5.685 5.685 0 0 0-1.098 2.134c.207 1.088 3.798.023 3.017-.528c-.853-.598-.246-.655-.087-.638c.465.047 1.844.479.559 1.765c-.872.872-2.721.654-3.619.494a10.712 10.712 0 0 1-2.402-.727c-5.074-2.264-20.518-9.631-33.047 2.898l-.459.465l4.771 4.773s10.26-10.486 26.82-2.973c3.359 1.521 5.903.33 7.629-1.366l-.023.032l-8.723 26.148c-.195-.245-.47-.478-.67-.499c-.681-.064-3.034.752-3.034.752s2.34-.83 2.271-1.505c-.029-.292-.833-.828-.833-.828c-2.276 1.105-5.326 1.438-5.944 1.496L22.88 21.397l.804-.804l-4.778-4.772l-.801.8l-7.865-7.864l.009-.009l-.28-3.281L2 2l3.469 7.967l3.258.279l7.876 7.876l-.778.779l4.772 4.778l.781-.782l19.375 19.374c-.045.501-.362 3.64-1.492 5.966c0 0 .533.803.822.832c.674.064 1.502-2.265 1.502-2.265s-.814 2.343-.748 3.022c.02.194.24.46.478.653l-26.1 8.705l-.043.03c1.7-1.726 2.896-4.272 1.371-7.636c-7.512-16.561 2.972-26.82 2.972-26.82l-4.771-4.771l-.465.459c-12.532 12.531-5.16 27.973-2.9 33.049c.391.873.619 1.783.73 2.4c.161.893.377 2.729-.489 3.596c-1.276 1.275-1.706-.097-1.754-.554c-.012-.16.04-.76.637.084c.549.781 1.611-2.819.506-2.993a5.595 5.595 0 0 0-2.125 1.098c-1.645 1.336-.879 3.367-.027 4.219c.639.639 1.154.945 2.742.285c.251-.104.544-.245.856-.41l29.966-9.993c.002.114.015.209.055.25c.459.461.813.819 1.145 1.151c.26-.517.566-1.253.883-2.097l1.311-.437c-.465 1.312-.957 2.5-1.432 3.303l.316.319c.684.688 1.689-2.303 2.186-3.979l1.002-.334l.187.187c.208.209.712.04 1.126-.372c.414-.414.582-.921.374-1.126l-.176-.176l.335-1.004c1.686-.5 4.654-1.502 3.967-2.184l-.318-.314c-.796.475-1.98.963-3.291 1.425l.438-1.312c.841-.314 1.573-.617 2.083-.876L51.449 42.5c-.037-.037-.122-.052-.225-.056l10.01-30.013c.159-.301.295-.586.397-.831M6.458 9.453l.129-2.037l-2.89-3.719l3.719 2.885l2.039-.129l-1.376.881l.869 1.609l-1.612-.867zm35.853 40.695c.278-.425.527-.93.527-.93s-.115.382-.226.829zm2.649-.882c.234-.68.468-1.392.686-2.103l.856.855c-.086.273-.172.547-.261.819zm2.218-.569c0-.001.001-.001 0 0l.494.491zm1.567-1.432l-.057-.057zm.082-.997c-.272.088-.546.175-.819.26l-.86-.86a62.058 62.058 0 0 0 2.107-.684zm.355-3.406s.531-.261.964-.547l-.106.315a18.11 18.11 0 0 0-.858.232" />
                                            </svg>
                                            {' RANGED'}
                                        </>
                                    )
                                }
                            </div>
                        </div>

                        <div className='row-8 d-flex bg-success p-2'>
                            <div className='col-4 bg-info text-white'>
                                ROLES
                            </div>
                            <div className='col-8'>
                                <div >
                                    {hero?.data[0]?.roles.map((item) => {
                                        return <div >{item.toUpperCase()}</div>
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className='row-8 d-flex bg-success p-2'>
                            <div className='col-4 bg-info text-white'>
                                ATTACK
                            </div>
                            <div className='col-8'>
                                <div>
                                    <img className="heropage_SwordIcon_FY7TW" style={{ width: '1.5em' }} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png" />
                                    {' ' + atkMin.toFixed(0) + '-' + atkMax.toFixed(0)}
                                </div>
                                <div>
                                    <img className="heropage_SwordIcon_FY7TW" style={{ width: '1.5em' }} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_range.png" />
                                    {' ' + hero.data[0].attack_range}
                                </div>
                                <div>
                                    <img className="heropage_SwordIcon_FY7TW" style={{ width: '1.5em' }} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png" />
                                    {' ' + hero.data[0].attack_rate}
                                </div>
                            </div>
                        </div>

                        <div className='row-8 d-flex bg-success p-2'>
                            <div className='col-4 bg-info text-white'>
                                DEFENSE
                            </div>
                            <div className='col-8'> {/*สูตรคำนวนจาก dota2.fandom.com*/}
                                <img className="heropage_SwordIcon_FY7TW" style={{ width: '1.5em' }} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png" />
                                {' ' + (hero.data[0].base_armor + ((hero.data[0].base_agi) / 6)).toFixed(1)}
                            </div>
                        </div>

                        <div className='row-8 d-flex bg-success p-2'>
                            <div className='col-4 bg-info text-white'>
                                VISION
                            </div>
                            <div className='col-8'>
                                <img className="heropage_SwordIcon_FY7TW" style={{ width: '1.5em' }} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_vision.png" />
                                {' ' + hero.data[0].day_vision + '/' + hero.data[0].night_vision}
                            </div>
                        </div>

                        <div className='row-8 d-flex bg-success p-2'>
                            <div className='col-4 bg-info text-white'>
                                MOVE SPEED
                            </div>
                            <div className='col-8'>
                                <img className="heropage_SwordIcon_FY7TW" style={{ width: '1.5em' }} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png" />
                                {' ' + hero.data[0].move_speed}
                            </div>
                        </div>



                    </div>


                    <div className='col-8 h-100 bg-warning' style={{ minHeight: '100vh' }} >
                        {/* {Dashboard} */}
                        <div className='bg-success h-100 row-8'>
                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        COMPONENT 1
                                    </div>
                                    <div className="carousel-item">
                                        COMPONENT 2
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        <div className='bg-info h-100 row-4'>
                            YOUTUBE API
                        </div>

                    </div>

                </div>





            ) : (
                <div>Loading...</div>
            )}

        </div>

    );

}

export default DetailPage