import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { CountryInfo } from '../Home/Country/CountryInfo';

export const FindCountry = () => {
    const [data, setData] = useState({})
    const params = useParams();
    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${params.id}`)
        .then(res => setData(res.data[0]))
    },[])

  return (
    <div>
    
      <CountryInfo />
    
    </div>
  )
}
