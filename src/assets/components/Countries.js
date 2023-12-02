import { FaSearch } from "react-icons/fa";
import { getCountryDetails,getBorderCountryDetails } from "../../requests";

export const Countries = ({
  data, 
  region, 
  setRegion, 
  setShowDetails, 
  setCountryDetails, 
  setBorderCountryDetails, 
  serverUrl}) => {

    return(
        <div className='mx-auto m-0 p-0'>
          <div className="my-4 row justify-content-between align-items-center mx-auto">
          <div className="col-sm-4">
            <div className="my-3  bg-white align-items-center rounded-3 shadow-sm">
              <FaSearch className="mx-3" color="hsl(0, 0%, 52%)" size="1.25rem"/>
              <input className="mx-3 search-input " placeholder="Search for a country..."></input>
            </div>
          </div>
          <div className="d-flex justify-content-start col-sm-4 justify-content-sm-end">
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
                    <div className="dropdown-item" id="FilterByRegion" onClick={()=>{setRegion("Filter By Region")}}>Show All</div>
                    :
                    <></>
                  }
                <div className="dropdown-item" id="Africa" onClick={()=>{setRegion("Africa")}}>Africa</div>
                <div className="dropdown-item" id="America" onClick={()=>{setRegion("America")}}>America</div>
                <div className="dropdown-item" id="Asia" onClick={()=>{setRegion("Asia")}}>Asia</div>
                <div className="dropdown-item" id="Europe" onClick={()=>{setRegion("Europe")}}>Europe</div>
                <div className="dropdown-item" id="Oceania" onClick={()=>{setRegion("Oceania")}}>Oceania</div>
              </ul>
            </div>
          </div>
            </div>
            <div className="row mx-auto">
              {
                data?
                data.map((country,idx)=>{
                  return (
                  <div key={idx} className="col-md-4 col-lg-3 mb-5">
                  <div 
                    className="card border-light shadow-sm rounded-3"
                    onClick={()=>{
                      let requestUrl = serverUrl + "/alpha/"+ country.cca3;
                      getCountryDetails(
                          requestUrl, 
                          setCountryDetails,
                           (country) => {
                            if(country && country.borders) {
                              let list = country.borders
                              let requestUrl = serverUrl + "/alpha?codes="+ list;
                              getBorderCountryDetails(
                                requestUrl, 
                                setBorderCountryDetails,
                                () => {
                                  setShowDetails(true)
                                });
                              }
                            else {
                              setBorderCountryDetails(null)
                              setShowDetails(true)
                            }
                          })
                    }}
                    >
                    <img src={country.flags.png} className="card-img-top flag-img" alt="country flag"/>
                    <div className="card-body p-4 mb-3">
                      <div className="card-title py-2">{country.name.common}</div>
                      <div className="card-text">
                        <div><b>Population: </b> {(country.population).toLocaleString()}</div>
                        <div><b>Region: </b> {country.region}</div>
                        <div><b>Capital: </b>
                          {
                            country.capital?
                            country.capital.join(', '):''
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>)
                })
                :
                <></>
              }
            </div>
        </div>

    );
}