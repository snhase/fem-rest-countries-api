import { useEffect, useState } from 'react';
import './App.css';
import { BsMoon } from "react-icons/bs";
import { Countries } from './assets/components/Countries';
import { CountryDetails } from './assets/components/CountryDetails';
import countries from "./assets/data.json"

function App() {
  const [data, setData] = useState(null)
  const [region, setRegion] = useState("Filter By Region")
  const [showDetails, setShowDetails] = useState(false)
  const [countryDetails, setCountryDetails] = useState(null)

  useEffect(() => {
    //ToDo : Update to use RestCountries API later
    setData(countries)
  })
    
  return (
    <div className="app">
      <header className=" shadow-sm py-3 bg-white">
        <div className="container d-flex justify-content-between mx-auto">
        <div className=" h3"> Where in the world?</div>
            <div className="col d-flex align-content-center align-items-center justify-content-end dark-mode">
              <BsMoon/>
              <div className="mx-2">Dark Mode</div>
            </div>
        </div>
      </header>
      <main className="container mx-auto px-0">
        {
          showDetails ?
          <CountryDetails
            country={countryDetails}
            setShowDetails = {setShowDetails}
            />
          :
          <Countries
          data={data}
          region = {region}
          setRegion = {setRegion}
          showDetails = {showDetails}
          setShowDetails = {setShowDetails}
          countryDetails = {countryDetails}
          setCountryDetails = {setCountryDetails}
          />
        }
      </main>
      <footer className="p-3 text-center bg-white">
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
