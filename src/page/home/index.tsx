import HeroCard from '@/components/HeroCard/HeroCard'
import SearchForm from '@/components/SearchForm/SearchForm'
import { useHeroListStore } from '@/store/heroList'
import React from 'react'

const HomePage = () => {
  const { hero, fetchHero } = useHeroListStore()
  console.log('check3', hero.data)

  return (
    <div>
      <SearchForm />

      <div className="container text-center">
        <ul className=" d-flex justify-content-center flex-wrap m-3 p-3">
          {hero.data?.map((item, index) => (
            <li key={index} className="m-3 p-3" style={{ width: '900px' }}>
              <div className="col">
                <HeroCard
                  image={item.img}
                  name={item.localized_name}
                  winRate={item.winRate}
                  pickValue={item.pickValue}
                  attribute={item.primary_attr}
                  role={item.roles}
                  index={index}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>

  )
}

export default HomePage


