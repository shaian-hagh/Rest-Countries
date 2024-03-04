import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CountryInfo.css'

export const CountryInfo = () => {

  const [item, setItem] = useState({})
  const [name , setName] = useState({})
  const [flag , setFlag] = useState({})
  const params = useParams();

  useEffect(() => {

    axios.get(`https://restcountries.com/v3.1/name/${params.id}`)
      .then(res =>{
        setItem(res.data[0])
        setFlag(res.data[0].flags)
        setName(res.data[0].name)
      })    
      
    },[])
      // console.log(item);
      
    return(
      <>
      <div className='up-info'>
        <h1>{name.common}</h1>
        <img src={flag.png} alt={flag.alt} className='img-info'/>
        <h1>{name.official}</h1>
      </div>
      <div className='capital'>
        <h3>capital : </h3>
        <p>{item.capital}</p>
      </div>
      </>
    )
}
