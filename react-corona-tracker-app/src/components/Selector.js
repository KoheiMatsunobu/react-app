// Selector.js


const Selector = (props) => {
    const countries = props.countriesJson.map((country, index) => 
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
            <select onChange={(e) => props.setCountry(e.target.value)}>
                <option>Select A Country</option>
                {countries}
            </select>
            <button onClick={props.getCountryData}>Get Data</button>
        </div>
    );
};

export default Selector;