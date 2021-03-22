import React, { Component } from 'react';
import Footers from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';

class Footer extends Component {
  renderBottom = () => <div />;

  renderBold = text => <b> {text} </b>;

  render() {
    return (
      <Footers
        style={{ marginTop: '60px' }}
        columns={[
          {
            title: 'Address',
            items: [
              {
                title: '11, Chinar Apartment, Shivajinagar,',
                url:
                  'https://www.google.com/maps/place/Milind+Academy/@18.5325278,73.8462393,15z/data=!4m2!3m1!1s0x0:0xa034e8199e478e36?sa=X&ved=2ahUKEwiLjruKxpTuAhWfFFkFHUuAD6oQ_BIwCnoECBIQBQ',
              },
              {
                title: 'Pune, Maharashtra 411005, India',
                url:
                  'https://www.google.com/maps/place/Milind+Academy/@18.5325278,73.8462393,15z/data=!4m2!3m1!1s0x0:0xa034e8199e478e36?sa=X&ved=2ahUKEwiLjruKxpTuAhWfFFkFHUuAD6oQ_BIwCnoECBIQBQ',
              },
            ],
          },
          {
            title: 'Work with us',
            items: [
              {
                title: 'Openings',
                url: 'https://linkedin.com',
              },
              {
                title: 'Our Reviews',
                url: '/aboutus',
              }
            ],
          },
          {
            title: 'Pay Per Consultation',
            items: [
              {
                title: 'Assignment Solutions',
                url: '/privateconsultpage' ,
              },
              {
                title: 'Private Coaching',
                url: '/privateconsultpage',
              },
              {
                title: 'Contact Us',
                url: '/privateconsultpage',
              }
            ],
          },
          // {
          //   title: 'Creators',
          //   items: [
          //     {
          //       title: 'Anand (Development)',
          //       url: 'https://github.com/ananddharne/',
          //     },
          //     {
          //       title: 'Payal (Design)',
          //       url: '',
          //     },
          //     {
          //       title: 'Komal (Business)',
          //       url: '',
          //     }
          //   ],
          // }
        ]}
      />
    );
  }
}

export default Footer;
