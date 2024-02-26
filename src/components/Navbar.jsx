import React from 'react'
import './Navbar.css'

export default function navbar() {
  return (
    <div className='navbar'>
      <form className='form-country'>
        <input type="text" className="search" required placeholder="search..."/>
        <button className="btn-search"><i class=" fa-solid fa-magnifying-glass"></i></button>
      </form>
      <div className="continents">
        <h3 className='continent'>asia</h3>
        <h3 className='continent'>europa</h3>
        <h3 className='continent'>american</h3>
        <h3 className='continent'>africa</h3>
        <h3 className='continent'>australia</h3>
      </div>
      <div className="your-location">
        <button className="btn-location">yor location</button>
      </div>
    </div>
  )
}
