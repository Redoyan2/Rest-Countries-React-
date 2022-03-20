import React, { useEffect, useState } from 'react';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(countries=>setCountries(countries))

    },[])

 

    return (
        <div className='HeadName'>
            <h1>Show all the countries</h1>
       <div className='Country-component'>
       {
            countries.map(country=> <Country country={country}></Country>)
        }
       </div>

        </div>
    );
};

function Country(prop){
    const {name, flags, capital, population} = prop.country
    return(
            <div className='Country-div'>
            <h5>Countries Name: <span>{ name.common}</span></h5>
            <img src={flags.png} alt="" />
            <h6>Capital Name: <span> {capital}</span></h6>
            <h6>Populatjion: <span>{population}</span></h6>
            
            </div>
    )
}

export default Countries;