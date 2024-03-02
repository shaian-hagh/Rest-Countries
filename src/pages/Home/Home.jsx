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
        setInfo(e)
    }

    return(
        <div className="home">
            {
                countries && countries.map((data, index) => {
                    return(
                        <Country data={data} key={index} index={index} goToCountry={goToCountry} />
                    )
                })
			}
            {
                info && <CountryInfo info={info} />
            }
        </div>
    )
}