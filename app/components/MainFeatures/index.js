
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { Carousel, Button } from 'antd'
import './index.css'

function MainFeatures() {
  const navigateToSignUp = () => {
    window.location.replace('/signup')
  }
  const navigateToAboutUs = () => {
    window.location.replace('/aboutus')
  }
  return (
   <Carousel className="main-features" autoplay
      >
       <div className="carousel-item-div-main-feat">
        <div className="main-feature-header">30 YEARS OF EXCELLENCE</div>
        <p> Celebrating 30 years of excellence in teaching and guiding students, Milind academy is the most sought after brands among coaching classes in Pune</p>
        <Button className="know-more-button" onClick={navigateToAboutUs} type="primary">Know More About Us</Button>
       </div>
       <div className="carousel-item-div-main-feat">
        <div className="main-feature-header">ONLINE LECTURES AVAILABLE</div>
        <p> During COVID-19 pandemic, we stand with the tudents and parents. We respect the social distancing rules and have decided to offer the courses online</p>
        <Button className="know-more-button" onClick={navigateToSignUp} type="primary">Register Here</Button>
       </div>
       <div className="carousel-item-div-main-feat">
        <div className="main-feature-header">Paid Assignments and Solution Assistance</div>
        <p> Stuck in one of the questions, sections or a unit? Dont want to join the class but need help with specific topics? No worries we got you!</p>
        <Button className="know-more-button" type="primary">Know More</Button>
       </div>

        </Carousel>
  )
}

export default MainFeatures;
