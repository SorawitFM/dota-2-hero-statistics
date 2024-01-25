import { HERO_IMAGE_URL } from '@/utils/constant'
import { attributeIcon } from '@/utils/optionList'
import { Link } from 'react-router-dom'



const HeroCard = (props: any) => {
    const image: string | undefined = props.image
    const name: string = props.name
    const winRate: number = props.winRate
    const pickValue: number = props.pickValue
    const attribute: string = props.attribute // all , str , agi , int
    const role: string[] = props.role
    const index: number = props.index + 1

    const iconImg = attributeIcon.find((item) => {
        if (attribute !== 'all') {
            return item.name.toLowerCase().includes(attribute.toLowerCase());
        } else {
            return item.name.toLowerCase() === 'universal';
        }
    });

    const icon: string | undefined = iconImg ? iconImg.icon : undefined;



    return (
        <div className="card mb-1 p-0" style={{ backgroundColor: 'rgba(48, 48, 48, 0.7)', maxWidth: '850px', color: '#fff', fontFamily: 'Georgia, serif', position: 'relative' }}>
            <div className="row g-0">
                <div className="col-md-5 d-flex" >
                    <Link to={`/detail/${name}`} className='w-100 col align-items-center'>
                        <img src={HERO_IMAGE_URL + image}
                            className="img-fluid rounded w-100 col align-items-center"
                            alt="..." />
                    </Link>
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h3 className="card-title fw-bold fs-4">
                            {name}
                            <img src={icon} alt="..." className='p-1 mb-1 ms-1' style={{ width: '1.5em' }} />
                        </h3>
                        <div className="container text-center mb-1">
                            <div className="row align-items-center">
                                <div className="col-md-4 row-sm text-center row-sm" style={{ color: 'rgba(250, 250,250,1 )' }}>
                                    Win Rate
                                </div>
                                <div className="col-md-8 row-sm">
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `${winRate.toFixed(2)}%`, color: 'rgba(0, 0, 0,1 )', backgroundColor: 'rgba(250, 0, 0, 0.9)', boxShadow: '0px 0px 10px rgba(250, 150, 100, 1)' }}

                                        >
                                            {winRate.toFixed(2)} %
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container text-center mb-1">
                            <div className="row align-items-center">
                                <div className="col-md-4 row-sm text-center" style={{ color: 'rgba(250, 250,250,1 )' }}>
                                    Matches Played
                                </div>
                                <div className="col-md-8 row-sm">
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                                width: `${(Math.log(pickValue) ** 2.1 / Math.log(20))}%`,
                                                borderRadius: '5px 0 0 5px', color: 'rgba(0, 0, 0,1 )', backgroundColor: 'rgba(250, 0, 0, 0.9)', boxShadow: '0px 0px 10px rgba(250, 150, 100, 1)'
                                            }}>
                                            {pickValue}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container text-center mb-1">
                            <div className="row align-items-center">
                                <div className="col-md-4 row-sm text-center" style={{ color: 'rgba(250, 250,250,1 )' }}>
                                    Roles
                                </div>
                                <div className="col-md-8 row-sm  d-flex flex-wrap justify-content-center">
                                    {role.map((item) => {
                                        return <div className='p-1 align-items-center' style={{ color: 'rgba(250, 0, 0, 0.7)', fontFamily: 'Georgia, serif' }}>{item}</div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-2' style={{ position: 'absolute', right: '0', backgroundColor: 'rgba(250, 0, 0, 0.4)', borderRadius: '5px' }}>
                {index}
            </div>
        </div>
    );

}

export default HeroCard