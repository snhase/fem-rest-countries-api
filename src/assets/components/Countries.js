import { getCountryDetails,getBorderCountryDetails, getCountriesData } from "../../requests";
import { FilterByRegion } from "./FilterByRegion";
import { SearchCountries } from "./SearchCountries";

export const Countries = ({
  countriesByRegion,
  darkTheme,
  data, 
  displayType,
  region,
  searchResult,
  searchQuery,
  serverUrl,
  setData, 
  setDisplayType, 
  setRegion,
  setSearchResult,
  setSearchQuery,
  setShowDetails, 
  setCountryDetails,
  setCountriesByRegion,
  setBorderCountryDetails}) => {

    return(
        <div className='mx-auto m-0 p-0'>
        <div className="my-4 row justify-content-between align-items-center mx-auto">
          <div className="col-sm-4">
            <SearchCountries
              darkTheme = {darkTheme}
              data = {data}
              searchQuery = {searchQuery}
              serverUrl = {serverUrl}
              setData = {setData}
              setDisplayType = {setDisplayType}
              setRegion = {setRegion}
              setSearchResult = {setSearchResult}
              setSearchQuery = {setSearchQuery}
              />
          </div>
          <div className="d-flex justify-content-start col-sm-4 justify-content-sm-end">
            <FilterByRegion
              displayType = {displayType}
              region = {region}
              serverUrl = {serverUrl}
              setRegion = {setRegion}
              setDisplayType = {setDisplayType}
              setCountriesByRegion = {setCountriesByRegion}
              setSearchResult = {setSearchResult}
              setSearchQuery = {setSearchQuery}
            />
          </div>
        </div>
        <div className="row mx-auto">
              {
                displayType === "region" && countriesByRegion?
                countriesByRegion.map((country, idx) =>  {
                  return (
                  <div key={idx} className="col-md-4 col-lg-3 mb-5">
                  <div 
                    className="card rounded-3"
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
                displayType === "search" && searchResult === null?
                  <div className="m-5 fs-3 fw-bold">No Matches Found....</div>
                :
                displayType === "search" && searchResult !== null?
                searchResult.map((country, idx) => {
                  return (
                  <div key={idx} className="col-md-4 col-lg-3 mb-5">
                  <div 
                    className="card rounded-3"
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
                data?
                data.map((country, idx) => {
                  return (
                  <div key={idx} className="col-md-4 col-lg-3 mb-5">
                  <div 
                    className="card rounded-3"
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