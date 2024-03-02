import React from 'react';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <form className='form-country'>
        <input type="text" className="search" required placeholder="search"/>
        <button type='submit' className="btn-search"><i className=" fa-solid fa-magnifying-glass"></i></button>
      </form>
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