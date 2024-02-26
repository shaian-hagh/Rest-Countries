import React from 'react'
import './Information.css'

export default function information() {
  return (
    <div className="informations">
      <div className="information">
        <h1 id="information">information</h1>
      </div>
      <div className="margin-top">
        <h3 className="title">mony :</h3>
        <div className="trunk">
          <p className="margin">rial</p>
          <p className="margin">ri</p>
        </div>
      </div>
      <div className="margin-top">
        <h3 className="title">cupl :</h3>
        <p className="trunk margin">tehran</p>
      </div>
      <div className="margin-top ">
        <h1 className="title">language :</h1>
        <p className='margin trunk'>persian</p>
      </div>
      <div className="margin-top">
        <h1 className="title">border :</h1>
        <div className="border-country trunk">
          <p>arq</p>
          <p>afg</p>
          <p>pak</p>
          <p>tur</p>
          <p>azr</p>
          <p>arm</p>
          <p>trk</p>
        </div>
      </div>
      <div className="margin-top">
        <h1 className="title">signs :</h1>
        <p className='margin trunk'>ir</p>
        <p className='margin trunk'>right</p>
      </div>
      <div className="margin-top">
        <h1 className="title">continents :</h1>
        <p className="trunk margin">asia</p>
      </div>
      <div className="margin-top">
        <h1 className="title">week :</h1>
        <p className="margin trunk">saturday</p>
      </div>
      <div className="margin-top">
        <h1 className="title">latings :</h1>
        <p className='margin trunk'>20</p>
        <p className='margin trunk'>68</p>
      </div>
      <div className="margin-top">
        <h1 className="title">translation :</h1>
        <div className="translation margin trunk">
            <p>ara</p>
            <p>bre</p>
            <p>ces</p>
            <p>cym</p>
            <p>deu</p>
            <p>est</p>
            <p>fin</p>
            <p>fra</p>
          </div>
      </div>
      <div className="map">
        <button type="submit" id="map">map</button>
      </div>
    </div>
  )
}
