import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'

export const NotFound = () => {

    const error = 'sorry! the page not found :('
    
  return (
    <div className='page-not-found'>
        <h1 className='number'>404</h1>
        <p className='error'>{error}</p>
        <Link to={'/'}>
        <button className='btn-error' >Back</button>
        </Link>
    </div>
  )
}
