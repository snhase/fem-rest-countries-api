import { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";

export const CountryDetails = ({country, setShowDetails})=> {

    useEffect(()=>{
        window.scrollTo(0,0)
    })

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
                    <img className="flag-img-details" src={country.flag} alt="Country Flag"/>
                </div>
                <div className="col-sm align-content-center align-items-center mt-4 ml-5 px-3">
                    <div className="row country-details-title mx-md-5">
                        <div>{country.name}</div>
                    </div>
                    <div className="row country-details-body mx-md-5">
                        <div className="col-sm my-3">
                            <div className="my-1"><b>Native Name: </b> {country.name}</div>
                            <div className="my-1"><b>Population: </b>{country.population}</div>
                            <div className="my-1"><b>Region: </b>{country.region}</div>
                            <div className="my-1"><b>Sub Region: </b>{country.subregion}</div>
                            <div className="my-1"><b>Capital: </b>{country.capital}</div>
                        </div>
                        <div className="col-sm my-3">
                            <div className="my-1"><b>Top Level Domain: </b>{country.topLevelDomain.map(item =>{return (<span>{item}</span>)})} </div>
                            <div className="my-1"><b>Currencies: </b> {country.currencies.map((item, idx)=>{return (<span>{item.name} {country.languages && (country.currencies.length>1 && idx != country.currencies.length-1)? ', ':' '}</span>)})}</div>
                            <div className="my-1"><b>Language: </b>{country.languages.map((item, idx)=>{return (<span>{item.name} {country.languages && (country.languages.length>1 && idx != country.languages.length-1)? ', ':' '}</span>)})}</div>
                            </div>
                        <div>
                        </div>
                    </div>
                    <div className="row country-details-body mx-md-5">
                        <div className="col-sm-4 my-2"> 
                        <b>Border Countries:</b>
                        </div>
                        <div className="col-sm-8 my-2">
                            {
                                country.borders?
                                country.borders.map(item=>{
                                    return(
                                        <button 
                                            className="my-1 px-4 bg-white border rounded-3 shadow-sm" 
                                            style={{marginRight:"1rem"}}
                                            >{item}</button>
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