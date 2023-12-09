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

    const regionList = ["Africa", "America", "Asia", "Europe", "Oceania"];

    return (
      <div className="dropdown shadow-sm">
        <button 
          className="btn dropdown-toggle py-2 ps-2 shadow-none" 
          type="button" 
          data-bs-toggle="dropdown" 
          aria-expanded="false">
          {region}
        </button>
        <ul className="dropdown-menu mt-1 ps-2 shadow-sm">
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