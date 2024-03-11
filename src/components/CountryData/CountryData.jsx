const CountryData = ({ country, handleVisitedCountry, handleFlags }) => {
    console.log('inside country data: ', country, handleVisitedCountry, handleFlags);
    return (
        <div>
            <p><small>Country data: {country.name.common}</small></p>
        </div>
    );
};

export default CountryData;