import { IHeroVideo } from "@/interface/heroVideo"

const ShowVideo = ({ image, title, vId }: { image: string, title: string, vId: string }) => {
    console.log("title", title)
    return (
        <div>
            <div className="card bg-dark border" style={{ width: '18rem' }}>
                <a href={`https://www.youtube.com/watch?v=${vId}`} target="blank">
                    <img src={image} className="card-img-top" alt="..." />
                </a>
                <div className="card-body bg-dark rounded" style={{ maxHeight: '50px' }}>
                    <p className="card-text text-white">{title.substring(0, 25)}</p>
                </div>
            </div>
        </div>
    )
}

export default ShowVideo