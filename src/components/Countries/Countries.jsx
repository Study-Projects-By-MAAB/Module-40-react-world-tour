import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country => {
        console.log('add this to your visited country');
        const newVisitedCountry = visitedCountries.includes(country) ? [...visitedCountries] : [...visitedCountries, country]
        setVisitedCountries(newVisitedCountry)
    }

    const handleFlags = flags => {
        const newVisitedFlags = visitedFlags.includes(flags) ? [...visitedFlags] : [...visitedFlags, flags]
        setVisitedFlags(newVisitedFlags)
    }

    // remove item from an array in a state
    // use filter to select all the elements expect one you want to remove.

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <h5>Visited countries: {visitedCountries.length}</h5>
            <ul>
                {visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)}
            </ul>
            <ul>
                {visitedFlags.map((flags, idx) => <img key={idx} src={flags} alt="" />)}
            </ul>
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3} handleFlags={handleFlags} handleVisitedCountry={handleVisitedCountry} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;