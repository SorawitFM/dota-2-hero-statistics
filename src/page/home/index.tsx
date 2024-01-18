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
        <div className="row">
          <div className="col">
            {hero.data?.map((item) => {
              return (
                <HeroCard
                  image={item.img}
                  name={item.localized_name}
                  winRate={item.winRate}
                  pickValue={item.pickValue}
                />

              );
            })}
          </div>
        </div>
      </div>
    </div>

  )
}

export default HomePage


