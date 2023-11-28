import { useState } from 'react';
import './App.css';
import { BsMoon } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

function App() {

  const [region, setRegion] = useState("Filter By Region")
  
  return (
    <div className="d-flex flex-column">
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
        <div className="my-4 row justify-content-between align-items-center mx-auto">
          <div className="col-sm-4">
            <div className="my-3  bg-white align-items-center rounded-3 shadow-sm">
              <FaSearch className="mx-3" color="hsl(0, 0%, 52%)" size="1.25rem"/>
              <input className="mx-3 search-input " placeholder="Search for a country..."></input>
            </div>
          </div>
          <div className="d-flex justify-content-start col-sm-4 justify-content-sm-end">
            <div className="dropdown">
              <button 
                className="btn bg-white dropdown-toggle py-2 px-3" 
                type="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false">
                {region}
              </button>
                <ul className="dropdown-menu border-0 mt-2 dropdown-menu-end">
                  {
                    region != "Filter By Region"?
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
      </main>
    </div>
  );
}

export default App;
