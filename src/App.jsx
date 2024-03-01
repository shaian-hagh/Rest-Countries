import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import { Navbar } from './pages/Layout/Navbar/Navbar';
import { Footer } from './pages/Layout/Footer/Footer';
import './App.css';
import { useEffect, useState } from 'react';
import { Home } from './pages/Home/Home';

export const App = () => {

  const [countries, setCountries] = useState('')
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(res => setCountries(res))
      .then(console.log(countries))
  },[])

  return (
    <div className="container">
      <Navbar />
      
        {
					countries.map((product, index) => {
						return(
							<Home product={product} key={index} />
						)
					})
				}
      <Footer />
    </div>
  );
}