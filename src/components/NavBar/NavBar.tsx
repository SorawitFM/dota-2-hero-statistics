

const NavBar = () => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom border-danger">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-bar-chart-fill" viewBox="0 0 16 16" style={{ fill: 'rgb(153,0,0)' }}>
                        <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
                    </svg>
                    <span className="fs-4 ps-1" style={{ color: 'rgb(153,0,0)' }}>Dota 2 Hero Statistics</span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="/" className="nav-link text-danger" aria-current="page">Home</a></li>
                    <li className="nav-item"><a href="/statistic" className="nav-link text-danger">Statistic</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-danger">Features</a></li>

                    <li className="nav-item"><a href="#" className="nav-link text-danger">About</a></li>
                </ul>
            </header>
        </div>
    )
}

export default NavBar