import React from 'react'
import './Country.css'

export default function country() {

  const image = require('../Flag-Iran.webp')

  return (
    <div>
      <div className="country">
                <h1 className='up'>time :</h1>
                <h1 className='up'>country :</h1>
                <h1 className='up'>symbol :</h1>
                <h2 className='down'>+3:30</h2>
                <h2 className='down'>iran</h2>
                <h2 className='down'>ir</h2>
            </div>
            <div className="flag-country">
              <img src={image} alt="image" className='image'/>
            </div>
    </div>
  )
}
