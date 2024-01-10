const SearchForm = () => {

    return (
        <div>
            <form className="grid text-center bg-warning col">
                <div className="row">
                    {/* Dropdown 1 */}
                    <div className="col">
                        <div className="dropdown" data-bs-theme="light">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonLight1" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown 1
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonLight1">
                                <li><a className="dropdown-item active" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                <li><a className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Dropdown 2 */}
                    <div className="col">
                        <div className="dropdown" data-bs-theme="light">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonLight2" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown 2
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonLight2">
                                <li><a className="dropdown-item active" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                <li><a className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Dropdown 3 */}
                    <div className="col">
                        <div className="dropdown" data-bs-theme="light">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonLight2" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown 2
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonLight2">
                                <li><a className="dropdown-item active" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                <li><a className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;
