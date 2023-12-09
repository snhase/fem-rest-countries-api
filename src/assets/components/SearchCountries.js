import { FaSearch } from "react-icons/fa";
import { getCountriesData } from "../../requests";

export const SearchCountries = ({
    darkTheme,
    data,
    serverUrl, 
    setData,
    setDisplayType,
    setSearchResult,
}) => {
    return (
        <div className="search-input-group d-flex my-3 align-items-center rounded-3 shadow-sm w-100">
            <FaSearch className="mx-3" color={darkTheme? "hsl(0, 0%, 98%)" :"hsl(0, 0%, 52%)"} size="1.25rem"/>
            <input 
                className="mx-3 search-input form-control" 
                placeholder="Search for a country..."
                onChange={(event)=>{
                    let name = event.target.value
                    if(name.length >= 1 ) {
                        let requestUrl = serverUrl + "/name/"+ name;
                        console.log(requestUrl)
                        getCountriesData(
                            requestUrl, 
                            setSearchResult
                            )
                        setDisplayType("search")
                    }
                    else {
                        setSearchResult(null)
                        setDisplayType("all")
                        if(data) {
                            let requestUrl = serverUrl + "/all";
                            getCountriesData(requestUrl, setData)
                        }
                    }
                    
                }}
                ></input>
        </div>
    )
}