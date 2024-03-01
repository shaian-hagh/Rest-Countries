import { useEffect, useState } from 'react';
import { Country } from './Country/Country';
export const Home = () => {

    const [countries, setCountries] = useState('');

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(res => setCountries(res))
    },[])

    return(
        <div className="home">
            {
                countries && countries.map((data, index) => {
                    return(
                        <Country data={data} key={index} />
                    )
                })
			}
        </div>
    )
}