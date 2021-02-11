
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Carousel, Button } from 'antd'
import './index.css'

function ReviewsPanel() {
    const [reviews, setReviews] = useState([
        {
            name: 'Deepika',
            stars: '⭐⭐⭐⭐⭐',
            review: 'Superb class for engineering students. Milind sir teaches very well and clears all the doubts of students.'
        },
        {
            name: 'Harsh Munot',
            stars: '⭐⭐⭐⭐⭐',
            review: 'This is one of the best class for degree and diploma. I joined it for diploma, they always teach you from basic and if there are any doubts, they always clear it. One must join this class if there is need to complete diploma or degree'
        },
        {
            name: ' Hrishikesh Kulkarni',
            stars: '⭐⭐⭐⭐⭐',
            review: 'This is one of the best class for diploma n degree.I personally joined it,for diploma n degree too.If your concepts are not clear or you find difficulties in the understand you must join it.It start with basic.'
        },
        {
            name: 'Ankit Mohite',
            stars: '⭐⭐⭐⭐⭐',
            review: 'Best Class for diploma and engineering technical subjects,teaching method of milind sir is very good,each topic explained in detail and all doubts is cleared after every class. Overall very nice experience here'
        },
        {
            name: 'Deepika',
            stars: '⭐⭐⭐⭐⭐',
            review: 'Superb class for engineering students. Milind sir teaches very well and clears all the doubts of students.'
        }
    ])
    return (
        <Carousel classname="reviews" arrows autoplay
        >
             <div className="carousel-item-div">
        <h1 style={{color: 'black', fontSize: '180%', color: '#ED7170'}}> OUR GLOWING REVIEWS! </h1>
        <h1 style={{color: 'black'}}>
          Deepika
        </h1>
        <p>
        ⭐⭐⭐⭐⭐
        </p>
        <p>
          <i style={{fontSize: '120%'}}>
          Superb class for engineering students. Milind sir teaches very well and clears all the doubts of students.
          </i>
        </p>
        <h1 style={{color: 'black', fontSize: '110%'}}> <i> As seen on <a style={{color: '#ED7170'}} href="https://www.justdial.com/Pune/Milind-Academy-Opp-Bhavkar-Bhavan-Shivaji-Nagar/020PXX20-XX20-090626131541-H9A8_BZDET" target="_blank"> Justdial </a></i> </h1>
        </div>
        <div className="carousel-item-div">
        <h1 style={{color: 'black', fontSize: '180%', color: '#ED7170'}}> OUR GLOWING REVIEWS! </h1>
        <h1 style={{color: 'black'}}>
          Ankit Mohite
        </h1>
        <p>
        ⭐⭐⭐⭐
        </p>
        <p>
          <i style={{fontSize: '120%'}}>
          Best Class for diploma and engineering technical subjects,teaching method of milind sir is very good,each topic explained in detail and all doubts is cleared after every class. Overall very nice experience here
          </i>
        </p>
        <h1 style={{color: 'black', fontSize: '110%'}}> <i> As seen on <a style={{color: '#ED7170'}} href="https://www.justdial.com/Pune/Milind-Academy-Opp-Bhavkar-Bhavan-Shivaji-Nagar/020PXX20-XX20-090626131541-H9A8_BZDET" target="_blank"> Justdial </a></i> </h1>
        </div>
        <div className="carousel-item-div">
        <h1 style={{color: 'black', fontSize: '180%', color: '#ED7170'}}> OUR GLOWING REVIEWS! </h1>       
        <h1 style={{color: 'black'}}>
          Hrishikesh Kulkarni
        </h1>
        <p>
        ⭐⭐⭐⭐⭐
        </p>
        <p>
          <i style={{fontSize: '120%'}}>
          This is one of the best class for diploma n degree.I personally joined it,for diploma n degree too.If your concepts are not clear or you find difficulties in the understand you must join it.It start with basic.
          </i>
        </p>
        <h1 style={{color: 'black', fontSize: '110%'}}> <i> As seen on <a style={{color: '#ED7170'}} href="https://www.justdial.com/Pune/Milind-Academy-Opp-Bhavkar-Bhavan-Shivaji-Nagar/020PXX20-XX20-090626131541-H9A8_BZDET" target="_blank"> Justdial </a></i> </h1>
        </div>
        <div className="carousel-item-div">
        <h1 style={{color: 'black', fontSize: '180%', color: '#ED7170'}}> OUR GLOWING REVIEWS! </h1>        
        <h1 style={{color: 'black'}}>
          Harsh Munot
        </h1>
        <p>
        ⭐⭐⭐⭐
        </p>
        <p>
          <i style={{fontSize: '120%'}}>
          This is one of the best class for degree and diploma. I joined it for diploma, they always teach you from basic and if there are any doubts, they always clear it. One must join this class if there is need to complete diploma or degree
          </i>
        </p>
        <h1 style={{color: 'black', fontSize: '110%'}}> <i> As seen on <a style={{color: '#ED7170'}} href="https://www.justdial.com/Pune/Milind-Academy-Opp-Bhavkar-Bhavan-Shivaji-Nagar/020PXX20-XX20-090626131541-H9A8_BZDET" target="_blank"> Justdial </a></i> </h1>
        </div>

      </Carousel>
    )
}
 export default ReviewsPanel;
