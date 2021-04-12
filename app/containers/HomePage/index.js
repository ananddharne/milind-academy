/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { useInjectReducer } from "utils/injectReducer";
import { useInjectSaga } from "utils/injectSaga";
import { Form, Input, Button, Select, Divider, Rate } from "antd";
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError
} from "containers/App/selectors";
import H2 from "components/H2";
import { changeUsername } from "./actions";
import { makeSelectUsername } from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import "./index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import circle from "./circle.svg";
import study from './study.svg';
import question from './question.svg'


const key = "home";

export function HomePage({ username, onSubmitForm }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // fade: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
    focusOnSelect: true,
    swipeToSlide: true,
  };

  const settings2 = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: true,
    focusOnSelect: true,
    swipeToSlide: true,
  };


  return (
    <div>
      <div className="slick-container">
        {/* <h2> Single Item</h2> */}

        <Slider {...settings}>
          
        <div>
            <div style={{padding: '20% 0% 0% 18%', fontFamily: 'Montserrat', color: '#226872', fontSize: '205%', fontWeight: '800'}}>30 years of</div>
            <div style={{padding: '0% 0% 0% 18%', fontFamily: 'Montserrat', color: '#226872', fontSize: '205%', fontWeight: '800'}}>excellence</div>
            <div style={{padding: '0% 0% 0% 18%', color: '#226872', fontWeight: '400' }}> Celebrating 30 years of excellence in teaching and guiding students, Milind academy is the most sought after brands among coaching classes in Pune </div>
          </div>
          <div>
          <img className='videoTagCircle'
                                                src={circle}
                                          
                                                alt="logo"
                                            />
          </div>
          <div>
            <div style={{padding: '20% 0% 0% 18%', fontFamily: 'Montserrat', color: '#226872', fontSize: '205%', fontWeight: '800'}}>Online lectures </div>
            <div style={{padding: '0% 0% 0% 18%', fontFamily: 'Montserrat', color: '#226872', fontSize: '205%', fontWeight: '800'}}>available</div>
            <div style={{padding: '0% 0% 0% 18%', color: '#226872', fontWeight: '400' }}> During COVID-19 pandemic, we stand with the tudents and parents. We respect the social distancing rules and have decided to offer the courses online </div>
          </div>
          <div>
          <img className='videoTagCircle'
                                                src={circle}
                                          
                                                alt="logo"
                                            />
          </div>
          <div>
            <div style={{padding: '20% 0% 0% 18%', fontFamily: 'Montserrat', color: '#226872', fontSize: '205%', fontWeight: '800'}}>Career counselling  </div>
            <div style={{padding: '0% 0% 0% 18%', color: '#226872', fontWeight: '400' }}> Stuck in one of the questions, sections or a unit? Dont want to join the class but need help with specific topics? No worries we got you!
 </div>
          </div>
          <div>
          <img className='videoTagCircle'
                                                src={circle}
                                          
                                                alt="logo"
                                            />
          </div>
        </Slider>
      </div>

      <div
      
        className="about-us-container"
      >
        <div className="about-us-heading-home" style={{ paddingTop: "5%", paddingBottom: "2%" }}>
          <span
          className="about-us-span"
          >
            about us
          </span>
        </div>
        <div className="about-us-content-home" >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>

      <div className="homepage-categories">
            <div className="category">
            <Divider plain style={{fontFamily: 'Montserrat', borderColor: '#226872', color: '#226872', fontWeight: 'bold',  margin: '0px', paddingTop: '3%' }}>
      ENGINEERING
    </Divider>
            <div style={{color: '#226872', fontWeight: 'bold', fontFamily: 'Montserrat'}}> CLASSES</div>
            <div style={{ padding: "2% 3% 3%", color: '#226872', fontFamily: 'Montserrat' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <button className="know-more-button"> <span> Know More </span> </button>
            </div>
            <div className="category">
            <Divider plain style={{fontFamily: 'Montserrat', borderColor: '#226872', fontWeight: 'bold', color: '#226872',  margin: '0px', paddingTop: '3%' }}>
      MPSC
    </Divider>

            <div style={{color: '#226872', fontWeight: 'bold', fontFamily: 'Montserrat'}}> COACHING</div>
            <div style={{ padding: "2% 3% 3%", color: '#226872', fontFamily: 'Montserrat' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <button className="know-more-button"> <span> Know More </span> </button>
            </div>
      </div>
      <div className="homepage-categories-1">
            <div className="category">
            <Divider plain style={{fontFamily: 'Montserrat', borderColor: '#226872', fontFamily: 'Montserrat', color: '#226872', fontWeight: 'bold',  margin: '0px', paddingTop: '3%' }}>
      GATE
    </Divider>
            <div style={{fontFamily: 'Montserrat', color: '#226872', fontWeight: 'bold'}}> COACHING</div>
            <div style={{fontFamily: 'Montserrat', padding: "2% 3% 3%", color: '#226872' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <button className="know-more-button"> <span> Know More </span> </button>
            </div>
            <div className="category">
            <Divider plain style={{ fontFamily: 'Montserrat', borderColor: '#226872', fontFamily: 'Montserrat', fontWeight: 'bold', color: '#226872',  margin: '0px', paddingTop: '3%' }}>
      CAREER/ADMISSION
    </Divider>

            <div style={{fontFamily: 'Montserrat', color: '#226872', fontWeight: 'bold'}}> COUNSELING</div>
            <div style={{fontFamily: 'Montserrat', padding: "2% 3% 3%", color: '#226872' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <button className="know-more-button"> <span> Know More </span> </button>
            </div>
      </div>
      <div className="contact-office-hours">
            <div className="mobile">
                <div>MOBILE</div>
                <div>9869193062</div>
            </div>
            <div className="office-hours">
            <div>OFFICE HOURS</div>
            <div>8 AM - 8 PM</div>
              </div>
      </div>
<div className="our-specialty-container">
<div className="our-specialty-heading" style={{ paddingTop: "5%", paddingBottom: "2%" }}>
          <span
          className="our-specialty-span"
          >
            our specialty
          </span>
        </div>
        <div className="our-specialty-content">
            <div className="study-material">
            <img src={study}></img>
                <div>Study Material</div>
            </div>
            <div className="assignments">
            <img src={question}></img>
            <div>Question papers </div>
            <div>and assignments</div>
            </div>
        </div>
</div>

<div className="reviews-container">
  <div className="our-specialty-container">
  <div className="our-reviews-heading" style={{ paddingTop: "0%" }}>
          <span
          className="our-reviews-span"
          >
            our glowing reviews
          </span>
          </div>
  </div>

        <Slider {...settings2}
        >
          <div>
          <p>
        <Rate allowHalf disabled defaultValue={5}/>
        </p>
        <p>
          <p style={{padding: '1% 4%', color: 'white', fontFamily: 'Montserrat'}}>
          This is one of the best class for diploma n degree.I personally joined it,for diploma n degree too.If your concepts are not clear or you find difficulties in the understand you must join it.It start with basic.
          </p>
        </p>
        <h4 style={{fontFamily: 'Montserrat', color: 'white'}}>
          Hrishikesh Kulkarni
        </h4>
        </div>

        <div>
        <p>
        <Rate allowHalf disabled defaultValue={5}/>
        </p>
        <p>
          <p style={{padding: '1% 4%', color: 'white', fontFamily: 'Montserrat'}}>
          This is one of the best class for diploma n degree.I personally joined it,for diploma n degree too.If your concepts are not clear or you find difficulties in the understand you must join it.It start with basic.
          </p>
        </p>
        <h4 style={{fontFamily: 'Montserrat', color: 'white'}}>
          Hrishikesh Kulkarni
        </h4>
          </div>

          <div>
         
        <p>
        <Rate allowHalf disabled defaultValue={5}/>
        </p>
        <p>
          <p style={{padding: '1% 4%', color: 'white', fontFamily: 'Montserrat'}}>
          This is one of the best class for diploma n degree.I personally joined it,for diploma n degree too.If your concepts are not clear or you find difficulties in the understand you must join it.It start with basic.
          </p>
        </p>
        <h4 style={{fontFamily: 'Montserrat', color: 'white'}}>
          Hrishikesh Kulkarni
        </h4>
          </div>

          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    
    </div>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      // dispatch(loadRepos());
    }
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(HomePage);
