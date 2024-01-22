import { HERO_IMAGE_URL } from '@/utils/constant'


const HeroCard = (props: any) => {
    const image = props.image
    const name = props.name
    const winRate = props.winRate
    const pickValue = props.pickValue

    return (
        <div className="card mb-1 p-0" style={{ backgroundColor: '#303030', maxWidth: '850px', color: '#fff' }}>
            <div className="row g-0">
                <div className="col-md-5">
                    <img src={HERO_IMAGE_URL + image} className="img-fluid rounded w-100" alt="..." />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h3 className="card-title fw-bold fs-4">{name}</h3>
                        <div className="container text-center mb-1">
                            <div className="row align-items-center">
                                <div className="col-4 text-center" style={{ color: '#FFD700', fontWeight: 'bolder' }}>
                                    Win Rate:
                                </div>
                                <div className="col-8">
                                    <div className="progress">
                                        <div
                                            className="progress-bar bg-warning"
                                            role="progressbar"
                                            style={{ width: `${winRate.toFixed(2)}%`, color: '#303030' }}
                                            aria-valuenow={winRate.toFixed(2)}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            {winRate.toFixed(2)} %
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container text-center mb-1">
                            <div className="row align-items-center">
                                <div className="col-4 text-center" style={{ color: '#FFD700', fontWeight: 'bolder' }}>
                                    Matches Played:
                                </div>
                                <div className="col-8">
                                    <div className="progress">
                                        <div
                                            className="progress-bar bg-warning"
                                            role="progressbar"
                                            style={{
                                                width: `${(Math.log(pickValue) ** 2.1 / Math.log(20))}%`,
                                                borderRadius: '5px 0 0 5px', color: '#303030'
                                            }}
                                            aria-valuenow={(Math.log(pickValue) ** 2.1 / Math.log(20))}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            {pickValue}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default HeroCard