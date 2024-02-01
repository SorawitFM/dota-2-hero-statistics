import { IHeroVideo } from "@/interface/heroVideo"



const ShowVideo = (image: any, title: any) => {

    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">{title}</p>
                </div>
            </div>
        </div>
    )
}

export default ShowVideo