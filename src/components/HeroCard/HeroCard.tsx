import { HERO_IMAGE_URL } from '@/utils/constant'


const HeroCard = (props: any) => {
    const image = props.image
    const name = props.name
    const winRate = props.winRate
    const pickValue = props.pickValue

    return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={HERO_IMAGE_URL + image} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h3 className="card-text">Win Rate: {winRate}</h3>
                        <h3 className="card-text">Pick: {pickValue}</h3>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroCard