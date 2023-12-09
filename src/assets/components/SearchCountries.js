import { FaSearch } from "react-icons/fa";
import { getCountriesData } from "../../requests";

export const SearchCountries = ({
    darkTheme,
    data,
    searchQuery,
    serverUrl, 
    setData,
    setDisplayType,
    setRegion,
    setSearchResult,
    setSearchQuery,
}) => {
    return (
        <div className="search-input-group d-flex my-3 align-items-center rounded-3 shadow-sm w-100">
            <FaSearch className="mx-3" color={darkTheme? "hsl(0, 0%, 98%)" :"hsl(0, 0%, 52%)"} size="1.25rem"/>
            <input 
                className="mx-3 search-input form-control" 
                placeholder="Search for a country..."
                value={searchQuery}
                onChange={(event)=>{
                    setRegion("Filter By Region")
                    let name = event.target.value
                    setSearchQuery(name)
                    if(name.length >= 1 ) {
                        let requestUrl = serverUrl + "/name/"+ name;
                        getCountriesData(
                            requestUrl, 
                            setSearchResult
                            )
                        setDisplayType("search")
                    }
                    else {
                        setSearchResult(null)
                        setDisplayType("all")
                        if(!data) {
                            let requestUrl = serverUrl + "/all";
                            getCountriesData(requestUrl, setData)
                        }                        
                    }
                    
                }}
                ></input>
        </div>
    )
}