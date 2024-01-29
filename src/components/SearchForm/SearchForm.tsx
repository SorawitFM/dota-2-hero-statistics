import { attributeList, rankList, roleList, sortList } from "@/utils/optionList";
import { useSearchForm, reset } from "./SearchForm.hook";


const SearchForm = () => {
    const { fieldKeyword, fieldRank, fieldAttribute, fieldRole, fieldSort } = useSearchForm()



    return (
        <div className="col mb-3 p-3" style={{ backgroundColor: 'rgba(201, 11, 11, 0.4)', fontFamily: 'Georgia, serif' }}>
            <form className="grid container" >
                <div className="d-flex flex-wrap justify-content-evenly gap-2" style={{ position: 'relative' }}>
                    {/* Dropdown 1 */}
                    <div className="col" style={{ minWidth: '150px' }}>
                        <label className="form-label text-light f-bold fs-4" htmlFor="sort">Sort by</label>
                        <select {...fieldSort} id="sort"
                            className="form-select" aria-label="Default select example">
                            {sortList.map((item, index) => {
                                return <option key={`sortList-key-${index}`} value={index}>{item}</option>
                            })}
                        </select>
                    </div>

                    {/* Dropdown 2 */}
                    <div className="col" style={{ minWidth: '150px' }}>
                        <label className="form-label text-light f-bold fs-4" htmlFor="attribute">Attributes</label>
                        <select {...fieldAttribute} id="attribute"
                            className="form-select" aria-label="Default select example">
                            {attributeList.map((item, index) => {
                                return <option key={`attributeList-key-${index}`} value={index}>{item}</option>
                            })}
                        </select>
                    </div>

                    {/* Dropdown 3 */}
                    <div className="col" style={{ minWidth: '150px' }}>
                        <label className="form-label text-light f-bold fs-4" htmlFor="role">Roles</label>
                        <select {...fieldRole} id="role"
                            className="form-select" aria-label="Default select example">
                            {roleList.map((item, index) => {
                                return <option key={`roleList-key-${index}`} value={index}>{item}</option>
                            })}
                        </select>
                    </div>

                    {/* Dropdown 4 */}
                    <div className="col" style={{ minWidth: '150px' }}>
                        <label className="form-label text-light f-bold fs-4" htmlFor="rank">Ranks</label>
                        <select {...fieldRank} id="rank"
                            className="form-select" aria-label="Default select example">
                            {rankList.map((item, index) => {
                                return <option key={`rankList-key-${index}`} value={index}>{item.name}</option>
                            })}
                        </select>
                    </div>


                    {/* Search */}
                    <div className="col" style={{ minWidth: '150px' }}>

                        <div className="mb-3">
                            <label htmlFor="keyword" className="form-label text-light f-bold fs-4">Search</label>
                            <div className="d-flex justify-content-between gap-2">
                                <input {...fieldKeyword}
                                    type="email" className="form-control" id="keyword" placeholder="Search Hero's name" />
                                <button type="button" className="btn btn-light d-flex jestify-content-center" onClick={() => reset()} style={{ width: '2.5em', borderRadius: '100%' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M3.38 8A9.502 9.502 0 0 1 12 2.5a9.502 9.502 0 0 1 9.215 7.182.75.75 0 1 0 1.456-.364C21.473 4.539 17.15 1 12 1a10.995 10.995 0 0 0-9.5 5.452V4.75a.75.75 0 0 0-1.5 0V8.5a1 1 0 0 0 1 1h3.75a.75.75 0 0 0 0-1.5H3.38Zm-.595 6.318a.75.75 0 0 0-1.455.364C2.527 19.461 6.85 23 12 23c4.052 0 7.592-2.191 9.5-5.451v1.701a.75.75 0 0 0 1.5 0V15.5a1 1 0 0 0-1-1h-3.75a.75.75 0 0 0 0 1.5h2.37A9.502 9.502 0 0 1 12 21.5c-4.446 0-8.181-3.055-9.215-7.182Z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;
