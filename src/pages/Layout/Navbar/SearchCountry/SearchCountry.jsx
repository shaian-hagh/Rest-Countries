import React, { useState } from 'react';
import './SearchCountry.css'
import { Link } from 'react-router-dom'

export const SearchCountry = () => {

    const [search, setSearch] = useState('');

  return (
    <form className='form-country' onSubmit={e => e.preventDefault()}>
        <input type="text" className="search" required placeholder="Search" value={search} onChange={e => setSearch(e.target.value)}/>
        <Link to={`/search/${search}`}>
           <button className="btn-search" onClick={() => setSearch('')}><i className=" fa-solid fa-magnifying-glass"></i></button>
        </Link>
    </form>
  )
}
