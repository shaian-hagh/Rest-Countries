import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const CountryInfo = () => {

  const [item, setItem] = useState({})

  const params = useParams();

  useEffect(() => {
      axios.get(`https://restcountries.com/v3.1/name/${params.id}`)
        .then(res => console.log(res))
        .then(res => setItem(res))
        .then(console.log(item))
    },[])

}
