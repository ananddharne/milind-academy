
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { Carousel, Button } from 'antd'
import './index.css'

function MainFeatures() {
  return (
   <Carousel className="main-features" autoplay
      >
       <div className="carousel-item-div-main-feat">
        <div className="main-feature-header">30 YEARS OF EXCELLENCE</div>
        <p> Celebrating 30 years of excellence in teaching and guiding students, Milind academy is the most sought after brands among coaching classes in Pune</p>
        <Button className="know-more-button" type="primary">Know More About Us</Button>
       </div>
       <div className="carousel-item-div-main-feat">
        <div className="main-feature-header">ONLINE LECTURES AVAILABLE</div>
        <p> During COVID-19 pandemic, we stand with the tudents and parents. We respect the social distancing rules and have decided to offer the courses online</p>
        <Button className="know-more-button" type="primary">Register Here</Button>
       </div>
       <div className="carousel-item-div-main-feat">
        <div className="main-feature-header">STUDY ABROAD CONSULTANCY</div>
        <p> Entrance exams, language trainings, career guidance, one stop shop for all!</p>
        <Button className="know-more-button" type="primary">Know More</Button>
       </div>

        </Carousel>
  )
}

export default MainFeatures;
