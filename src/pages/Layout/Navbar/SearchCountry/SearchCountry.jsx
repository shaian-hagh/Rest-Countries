import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export const SearchCountry = () => {

    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <form className='form-country' onSubmit={handleSubmit}>
        <input type="text" className="search" required placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} />
        <Link to={`/FindCountry/${search}`} className="btn-search"><i className=" fa-solid fa-magnifying-glass"></i></Link>
    </form>
  )
}
