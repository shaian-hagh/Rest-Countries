import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Country } from './Country/Country';
import "./Home.css"
import { CountryInfo } from './Country/CountryInfo';
export const Home = () => {

    const [countries, setCountries] = useState('');

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(res => setCountries(res))
    },[])

    const [info, setInfo] = useState('');
    const goToCountry = (e) => {
        setCountries(e)
    }

    return(
        <div className="home">
            {
                countries && countries.map((data, index) => {
                    return (
                        <Link onClick={() => goToCountry(index)} to={`/CountryInfo/${index+1}`} className="more" key={index}>
                            <Country data={data} />
                        </Link>
                    )
                })
			}
            {
                info && <CountryInfo countries={countries} />
            }
        </div>
    )
}