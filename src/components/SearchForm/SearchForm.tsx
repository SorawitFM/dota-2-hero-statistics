import { attributeList, rankList, roleList, sortList } from "@/utils/optionList";
import { useSearchForm } from "./SearchForm.hook";


const SearchForm = () => {
    const { fieldKeyword, fieldRank, fieldAttribute, fieldRole, fieldSort } = useSearchForm()

    return (
        <div className="col mb-3 p-3" style={{ backgroundColor: 'rgba(201, 11, 11, 0.4)', fontFamily: 'Georgia, serif' }}>
            <form className="grid container">
                <div className="d-flex flex-wrap justify-content-evenly gap-2">
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
                            <input {...fieldKeyword}
                                type="email" className="form-control" id="keyword" placeholder="Search Hero's name" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;
