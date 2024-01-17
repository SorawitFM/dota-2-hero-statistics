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
              // console.log('check-image', item.img); // ดูค่า item.Image ใน console log
              return (
                <HeroCard image={item.img}>
                  <h5 className="card-title">Card title</h5>
                </HeroCard>
              );
            })}
          </div>
        </div>
      </div>
    </div>

  )
}

export default HomePage


