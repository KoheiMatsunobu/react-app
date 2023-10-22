// Selector.js


const Selector = ({ countriesJson, setCountry }) => {
    const countries = countriesJson.map((country, index) => 
        <option key={index} value={country.Slug}>{country.Country}</option>
    );
    /*
    const [country, setCountry] = useState(''); 
    const getCountryData = () => {
        fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
        .then(res => res.json())
        .then(data => console.log(data));
    };
    */

    return(
        <div className="selector-container">
            <select onChange={(e) => setCountry(e.target.value)}>
                {countries}
            </select>
        </div>
    );
};

export default Selector;