import React from 'react'
import operaSVG from '../images/opera-house.svg';

export default function HeaderSection() {
  return (
    <div>
      <section className='header-section'>
        <div className="svg-and-text">
          <img src={operaSVG} alt="Description of the SVG"/>
          <h3>Sydney Opera<br/>House</h3>
        </div>
      </section>
      <div className='bookEvent-section'>
        <div className='bookEvent-title-container'>
          <h2 className='event-h2'>50 YEARS OF HISTORY<br/>AND MAGIC</h2>
          <button className='btn-style1'>Explore Now!</button>
        </div>
        <div>
        <button class="btn-style2">
          <p><i class="arrow down"></i></p>
        </button>
        </div>
      </div>
    </div>
    
  )
}
