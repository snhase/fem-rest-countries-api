import { useState } from 'react';
import './App.css';
import { BsMoon } from "react-icons/bs";
import { Countries } from './assets/components/Countries';

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
        <Countries 
          region={region}
          setRegion={setRegion}
          />
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
