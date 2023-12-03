import { getCountriesData } from '../../requests'

export const FilterByRegion = (
  {
    region,
    serverUrl,
    setRegion,
    setDisplayType,
    setCountriesByRegion
  }
) => {

    const regionList = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

    return (
      <div className="dropdown shadow-sm">
        <button 
          className="btn bg-white dropdown-toggle py-2 px-3" 
          type="button" 
          data-bs-toggle="dropdown" 
          aria-expanded="false">
          {region}
        </button>
        <ul className="dropdown-menu border-0 mt-2 dropdown-menu-end">
            {
              region !== "Filter By Region"?
              <div 
                className="dropdown-item" 
                id="FilterByRegion" 
                onClick={()=>{
                  setRegion("Filter By Region")
                  setDisplayType("All")
                }}>Show All</div>
              :
              <></>
            }
            <div>
            {
              regionList.map((region) => {
                return(
                  <div 
                  className="dropdown-item" 
                  key={region}
                  id={region} 
                  onClick={()=>{
                    let requestUrl = serverUrl + '/region/' + region
                    getCountriesData(requestUrl, setCountriesByRegion)
                    setRegion(region)
                    setDisplayType("region")
                  }}>{region}</div>
                )
              })
            }
            </div>
        </ul>
      </div>
    )
}