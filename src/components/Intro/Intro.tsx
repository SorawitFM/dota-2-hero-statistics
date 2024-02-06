import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="p-1 ms-5 me-5 p-md-5 mb-4 rounded text-body-emphasis" style={{ backgroundImage: 'url("/images/wp2532627-dota-2-hd-wallpapers.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '700px' }}>
                        <div className="col-lg-6 py-2 p-5">
                            <h1 className="display-6 fst-italic text-light">JOIN THE BATTLE</h1>
                            <a href="https://store.steampowered.com/app/570/Dota_2/"><button type="button" className="btn btn-outline-light">PLAY NOW</button></a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="p-1 ms-5 me-5 p-md-5 mb-4 rounded text-body-emphasis" style={{ backgroundImage: 'url("/images/dota-2-wallpaper-1920x1080.jpg")', backgroundSize: 'cover', backgroundPosition: 'top', minHeight: '700px' }}>
                        <div className="col-lg-6  py-0 p-5">
                            <h1 className="display-6 fst-italic text-light">STATISTICS</h1>
                            <a href="/statistic"><button type="button" className="btn btn-outline-light">SEARCH NOW</button></a>
                        </div>
                    </div>
                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Intro