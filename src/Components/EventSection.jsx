  import React from 'react'
  import Slider from "react-slick";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import JornImage from "../images/jornutzon.jpeg";
  import MusicImage from "../images/musicImage.jpg";
  import Singer from "../images/singer.jpg";
  

  export default function EventSection() {

    let settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className='event-section-container'>
        <div className="event-title-container">
          <h2>Most Popular Events</h2>
          <p className='event-paragraph'>Our key events about the Opera Houses's 50 years of History</p>
        </div>
        <Slider {...settings}>
        <div>
          <img src={JornImage} alt="Jorn" />
        </div>
        <div>
          <img src={MusicImage} alt="Orcestra Playing" />
        </div>
        <div>
          <img src={Singer} alt="Pianist Singer" />
        </div>
      </Slider>
      </div>
    )
  }
