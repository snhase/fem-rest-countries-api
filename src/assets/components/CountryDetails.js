import { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { getCountryDetails, getBorderCountryDetails } from "../../requests";

export const CountryDetails = ({
    country, 
    setCountryDetails, 
    setShowDetails,
    borderCountryDetails,
    setBorderCountryDetails,
    serverUrl}) => {

    useEffect(() => {
        window.scrollTo(0,0);
    });

    return (
        <div className="row mx-auto my-5">
            <div className="row mx-auto mb-5 mb-md-4">
                <div className="col">
                <button 
                    className="px-4 py-2 bg-white border rounded-3 shadow"
                    onClick={()=>{
                        setShowDetails(false)
                    }}
                    >
                        <span><BsArrowLeft/></span>
                        <span className="mx-2">Back</span>
                </button>
                </div>
            </div>
            {
            country?
            <div className="row mx-auto align-content-center align-items-center">
                <div className="col-sm my-3 my-md-5">
                    <img key={country.flag.alt} className="flag-img-details" src={country.flags.png} alt={country.flag.alt}/>
                </div>
                <div className="col-sm align-content-center align-items-center mt-4 ms-md-5 px-3">
                    <div className="row country-details-title">
                        <div>{country.name.common}</div>
                    </div>
                    <div className="row country-details-body">
                        <div className="col-sm my-3">
                            <div className="my-1"><b>Native Name: </b> 
                                {
                                    country.name && country.name.nativeName ?
                                    Object.values(country.name.nativeName)
                                    .map((item, idx) =>{
                                        return (
                                        <span 
                                            key={idx}>{item.common} {Object.values(country.name.nativeName) && 
                                                        (Object.values(country.name.nativeName).length>1 && 
                                                        idx !== Object.values(country.name.nativeName).length-1)? ', ':' '}
                                        </span>
                                        )})
                                        :<></>
                                }
                            </div>
                            <div className="my-1"><b>Population: </b>
                                {
                                    country.population ?
                                    country.population.toLocaleString()
                                    :
                                    ''
                                    
                                }
                            </div>
                            <div className="my-1"><b>Region: </b>{country.region}</div>
                            <div className="my-1"><b>Sub Region: </b>{country.subregion}</div>
                            <div className="my-1"><b>Capital: </b>
                                {
                                    country.capital?
                                    country.capital.join(', '):''
                                }
                            </div>
                        </div>
                        <div className="col-sm my-3">
                            <div className="my-1"><b>Top Level Domain: </b>
                                {
                                    country.tld ?
                                    country.tld
                                    .map((item,idx) => { return (<span key={idx}>{item}</span>)})
                                    :
                                    <></>
                                } 
                            </div>
                            <div className="my-1"><b>Currencies: </b>
                                {
                                    country.currencies ?
                                    Object.values(country.currencies)
                                    .map((item,idx)=>{return (
                                    <span 
                                        key={item.name}>{item.name} {Object.values(country.currencies) && 
                                            (Object.values(country.currencies).length>1 && 
                                            idx !== Object.values(country.currencies).length-1)? ', ':' '}</span>)})
                                    :
                                    <></>
                                }
                            </div>
                            <div className="my-1"><b>Language: </b>
                                {
                                    country.languages?
                                    Object.values(country.languages).join(", ")
                                    :
                                    <></>
                                }
                            </div>
                            </div>
                        <div>
                        </div>
                    </div>
                    <div className="row country-details-body">
                        <div className="col-sm-4 my-2"> 
                        <b>Border Countries:</b>
                        </div>
                        <div className="col-sm-8 my-2">
                            {
                                borderCountryDetails?
                                borderCountryDetails.map(item =>{
                                    return(
                                        <button 
                                            key={item.cca3}
                                            className="my-1 px-4 bg-white border rounded-3 shadow-sm" 
                                            style={{marginRight:"1rem"}}
                                            onClick={()=>{
                                                let requestUrl = serverUrl + "/alpha/"+ item.cca3;
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
                                            >{item.name.common}</button>
                                    )
                                })
                                :
                                <></>
                            }
                        </div>
                    </div>

                </div>
            </div>
            :
            <></>
            }
        </div>
    )
}