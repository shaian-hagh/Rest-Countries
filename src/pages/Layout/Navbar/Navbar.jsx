import React from 'react';
import { SearchCountry } from './SearchCountry/SearchCountry';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <SearchCountry />
      <select name="" id="">
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="Australia">Australia</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
      </select>
      <div className="your-location">
        <button className="btn-location">your location</button>
      </div>
    </nav>
  )
};