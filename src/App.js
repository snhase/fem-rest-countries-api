import { useEffect, useState } from 'react';
import './App.css';
import { BsMoon, BsFillMoonFill } from "react-icons/bs";
import { Countries } from './assets/components/Countries';
import { CountryDetails } from './assets/components/CountryDetails';
import { getCountriesData } from './requests';

function App() {

  const serverUrl = "https://restcountries.com/v3.1"
  const [borderCountryDetails, setBorderCountryDetails] = useState(null)
  const [countriesByRegion, setCountriesByRegion] = useState(false)
  const [countryDetails, setCountryDetails] = useState(null)
  const [data, setData] = useState(null)
  const [displayType, setDisplayType] = useState("all")
  const [region, setRegion] = useState("Filter By Region")
  const [showDetails, setShowDetails] = useState(false)
  const [searchResult, setSearchResult] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    if(!data){
      let requestUrl = serverUrl + "/all";
      getCountriesData(requestUrl, setData)
    }
  },[data, serverUrl, setData]);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
    if (!darkTheme) {
      document.documentElement.setAttribute("data-bs-theme", "dark")
    } else {
      document.documentElement.setAttribute("data-bs-theme", "light")
    }
  }
    
  return (
    <div className="app">
      <header className="header shadow-sm py-3">
        <div className="container d-flex justify-content-between mx-auto">
        <div className="h3 align-content-center align-items-center"><span> Where in the world?</span></div>
            <div 
              className="col d-flex align-content-center align-items-center justify-content-end"
              >
                {
                  darkTheme ?
                  <BsFillMoonFill
                    size="1.25rem"
                    style={{cursor:"pointer"}}
                    onClick={toggleTheme}/>
                  :
                  <BsMoon
                    size="1.25rem"
                    style={{cursor:"pointer"}}
                    onClick={toggleTheme}/>
                }
              <div 
                className="mx-2 fw-bold"
                >Dark Mode</div>
            </div>
        </div>
      </header>
      <main className="content container mx-auto px-0">
        {
          showDetails ?
          <CountryDetails
            borderCountryDetails = {borderCountryDetails}
            country = {countryDetails}
            darkTheme = {darkTheme}
            serverUrl = {serverUrl}
            setCountryDetails = {setCountryDetails}
            setShowDetails = {setShowDetails}
            setBorderCountryDetails = {setBorderCountryDetails}
            />
          :
          <Countries
            countriesByRegion = {countriesByRegion}
            darkTheme = {darkTheme}
            data = {data}
            displayType = {displayType}
            searchResult = {searchResult}
            searchQuery = {searchQuery}
            region = {region}
            serverUrl = {serverUrl}
            setBorderCountryDetails = {setBorderCountryDetails}
            setCountriesByRegion = {setCountriesByRegion}
            setCountryDetails = {setCountryDetails}
            setData = {setData}
            setDisplayType = {setDisplayType}
            setRegion = {setRegion}
            setSearchResult = {setSearchResult}
            setSearchQuery = {setSearchQuery}
            setShowDetails = {setShowDetails}
            />
        }
      </main>
      <footer className="footer p-3 text-center">
      Challenge by <a 
            href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca" 
            alt="frontend-mentor challenge link" 
            target="_blank" 
            rel="noopener noreferrer">Frontend Mentor</a>. Coded by <a href="https://github.com/snhase" alt="github url" target="_blank" rel="noopener noreferrer">snhase</a>
      </footer>
    </div>
  );
}

export default App;
