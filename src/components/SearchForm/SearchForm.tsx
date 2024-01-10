const SearchForm = () => {

    return (
        <div>
            <form className="grid text-center bg-warning col m-3 p-3">
                <div className="row">
                    {/* Dropdown 1 */}
                    <div className="col">
                        <label className="form-label"></label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    {/* Dropdown 2 */}
                    <div className="col">
                        <label className="form-label"></label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    {/* Dropdown 3 */}
                    <div className="col">
                        <label className="form-label"></label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    {/* Dropdown 4 */}
                    <div className="col">
                        <label className="form-label"></label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    {/* Search */}
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Search Hero's name" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;
