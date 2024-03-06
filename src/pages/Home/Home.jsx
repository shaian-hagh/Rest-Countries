import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Country } from './Country/Country';
import axios from 'axios';
import "./Home.css"

export const Home = () => {

    const [countries, setCountries] = useState('');

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
        .then(res => setCountries(res.data))
    },[])

    return(
        <div className="home">
            {
                countries && countries.map((data, index) => {
                    return (
                        <Link to={`/CountryInfo/${data.name.common}`} key={index}>
                            <Country data={data} />
                        </Link>
                    )
                })
			}
        </div>
    )
}