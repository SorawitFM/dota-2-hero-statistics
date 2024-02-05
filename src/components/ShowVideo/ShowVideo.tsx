import { IHeroVideo } from "@/interface/heroVideo"

const ShowVideo = ({ image, title, vId }: { image: string, title: string, vId: string }) => {
    console.log("title", title)
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <a href={`https://www.youtube.com/watch?v=${vId}`}>
                    <img src={image} className="card-img-top" alt="..." />
                </a>
                <div className="card-body" style={{ maxHeight: '50px' }}>
                    <p className="card-text">{typeof (title) === "object" ? "" : title.substring(0, 30)}</p>
                </div>
            </div>
        </div>
    )
}

export default ShowVideo