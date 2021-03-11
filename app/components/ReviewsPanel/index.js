
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Carousel, Button, Rate } from 'antd'
import './index.css'

function ReviewsPanel() {
    const [reviews, setReviews] = useState([
        {
            name: 'Shraddha Kadam',
            stars: '⭐⭐⭐⭐⭐',
            review: 'Best ... Sir Builds our foundation of basic subjects . and also helps learning in easy methods . Sir has a higher patience level to tolerate all kind of students.'
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
        <h1 style={{color: 'black', fontSize: '180%', color: 'white'}}> Our Glowing Reviews  </h1>
        <h2 style={{color: 'black'}}>
          Shraddha Kadam
        </h2>
        <p>
        <Rate allowHalf disabled defaultValue={5}/>
        </p>
        <p>
          <p style={{fontSize: '120%'}}>
          Best ... Sir Builds our foundation of basic subjects . and also helps learning in easy methods . 
          Sir has a higher patience level to tolerate all kind of students.
          </p>
        </p>
        <h1 style={{color: 'black', fontSize: '110%', padding: '0.5%'}}> <p> As seen on <a style={{color: 'white'}} href="https://www.justdial.com/Pune/Milind-Academy-Opp-Bhavkar-Bhavan-Shivaji-Nagar/020PXX20-XX20-090626131541-H9A8_BZDET" target="_blank"> Justdial </a></p> </h1>
        </div>
        <div className="carousel-item-div">
        <h1 style={{color: 'black', fontSize: '180%', color: 'white'}}> Our Glowing Reviews   </h1>
        <h2 style={{color: 'black'}}>
          Ankit Mohite
        </h2>
        <p>
        <Rate allowHalf disabled defaultValue={4}/>
        </p>
        <p>
          <p style={{fontSize: '120%'}}>
          Best Class for diploma and engineering technical subjects,teaching method of milind sir is very good,each topic explained in detail and all doubts is cleared after every class. Overall very nice experience here
          </p>
        </p>
        <h1 style={{color: 'black', fontSize: '110%'}}> <p> As seen on <a style={{color: 'white'}} href="https://www.justdial.com/Pune/Milind-Academy-Opp-Bhavkar-Bhavan-Shivaji-Nagar/020PXX20-XX20-090626131541-H9A8_BZDET" target="_blank"> Justdial </a></p> </h1>
        </div>
        <div className="carousel-item-div">
        <h1 style={{color: 'black', fontSize: '180%', color: 'white'}}> Our Glowing Reviews </h1>       
        <h2 style={{color: 'black'}}>
          Hrishikesh Kulkarni
        </h2>
        <p>
        <Rate allowHalf disabled defaultValue={5}/>
        </p>
        <p>
          <p style={{fontSize: '120%'}}>
          This is one of the best class for diploma n degree.I personally joined it,for diploma n degree too.If your concepts are not clear or you find difficulties in the understand you must join it.It start with basic.
          </p>
        </p>
        <h1 style={{color: 'black', fontSize: '110%'}}> <p> As seen on <a style={{color: 'white'}} href="https://www.justdial.com/Pune/Milind-Academy-Opp-Bhavkar-Bhavan-Shivaji-Nagar/020PXX20-XX20-090626131541-H9A8_BZDET" target="_blank"> Justdial </a></p> </h1>
        </div>
        <div className="carousel-item-div">
        <h1 style={{color: 'black', fontSize: '180%', color: 'white'}}> Our Glowing Reviews  </h1>        
        <h2 style={{color: 'black'}}>
          Harsh Munot
        </h2>
        <p>
        <Rate allowHalf disabled defaultValue={4.5}/>
        </p>
        <p>
          <p style={{fontSize: '120%'}}>
          This is one of the best class for degree and diploma. I joined it for diploma, they always teach you from basic and if there are any doubts, they always clear it. One must join this class if there is need to complete diploma or degree
          </p>
        </p>
        <h1 style={{color: 'black', fontSize: '110%'}}> <p> As seen on <a style={{color: 'white'}} href="https://www.justdial.com/Pune/Milind-Academy-Opp-Bhavkar-Bhavan-Shivaji-Nagar/020PXX20-XX20-090626131541-H9A8_BZDET" target="_blank"> Justdial </a></p> </h1>
        </div>

      </Carousel>
    )
}
 export default ReviewsPanel;
