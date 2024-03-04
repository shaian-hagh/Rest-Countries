import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CountryInfo.css'

export const CountryInfo = () => {

  const [item, setItem] = useState({})
  const [name , setName] = useState({})
  const params = useParams();

  useEffect(() => {

    axios.get(`https://restcountries.com/v3.1/name/${params.id}`)
      .then(res =>{
        setItem(res.data[0])
        setName(res.data[0].name)
      })    
      
    },[])
      console.log(item);
      
    return(
      <div className='country-info'>
      <div className='info'>
        <h1>{name.common}</h1>
        <h1>{name.official}</h1>
      </div>
      </div>
    )
}
