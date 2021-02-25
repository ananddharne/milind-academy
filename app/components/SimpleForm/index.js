import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import "./index.css"
import {isMobile} from 'react-device-detect';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      course: '',
      phone: '',
    };
  }


  componentWillMount() {
    const { steps } = this.props;
    const { name, course, phone } = steps;

    this.setState({ name, course, phone });
  }

  render() {
    const { name, course, phone } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Course</td>
              <td>{course.value}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{phone.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class SimpleForm extends Component {
  constructor(props) {
    super(props);
// if(!isMobile) {
//   this.state = {
//     opened: false
//   };
// } else {
  // this.state = {
  //   opened: true
  // };
// }
console.log(navigator.userAgent)
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    // isMobile = true;
  this.state = {
    opened: false
  }
 } else {
   this.state = {
     opened: true
   }
 }
}
   

  toggleFloating = ({ opened }) => {
    this.setState({ opened }); 
  }
  componentDidMount() {
    this.handleEnd = this.handleEnd.bind(this);
  }

  handleEnd({ steps, values }) {
    // console.log(steps);
    // console.log(values);
    // alert(`Chat handleEnd callback! Number: ${values[0]}`);
    console.log(values)
    const data = {
      name: values[0],
      email: values[1],
      degree: values[2],
      subject: values[3],
      phone: values[4]
    }
    console.log(data)
    var xhr = new XMLHttpRequest();
    xhr.open('POST', ' https://hz03bsqszl.execute-api.us-east-1.amazonaws.com/default/SendEmailMilindAcademy', true);
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // Send the collected data as JSON
    xhr.send(JSON.stringify(data));

    // Callback function
    xhr.onloadend = response => {
      if (response.target.status === 200) {
        // The form submission was successful
      }
    };
    // location.reload()
  }

  render() {
    const { opened } = this.state;
    return (
      <ChatBot
      floating={true}
      handleEnd={this.handleEnd}
      opened={opened}
      toggleFloating={this.toggleFloating}
        steps={[
          {
            id: '1',
            message: 'Welcome to Milind Academy! Can we get your name please?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '20',
          },
          {
            id: '20',
            message: 'Hi {previousValue}! Please type in your email address',
            trigger: 'email',
          },
          {
            id: 'email',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'What are you interested in?',
            trigger: 'course',
          },
          {
            id: 'course',
            options: [
              { value: 'engg', label: 'Engineering classes', trigger: '50' },
              { value: 'diploma', label: 'Diploma Classes', trigger: '50' },
              { value: 'assignment', label: 'Assignment help', trigger: '50' },
              { value: 'consult', label: 'One off consultation', trigger: '50' },
            ],
          },
          {
            id: '50',
            message: 'Got it! Which subject and course? If you chose assignment/consult please add additional info',
            trigger: 'subject',
          },
          {
            id: 'subject',
            user: true,
            trigger: '5',
          },
          {
            id: '5',
            message: 'What is your phone number (Press enter to skip)',
            trigger: 'phone',
          },
          {
            id: 'phone',
            user: true,
            trigger: 'end-message',
            // validator: (value) => {
            //   if (isNaN(value)) {
            //     return 'value must be a number';
            //   } else if (value < 0) {
            //     return 'value must be positive';
            //   } else if (value > 120) {
            //     return `${value}? Come on!`;
            //   }

            //   return true;
            // },
          },
          // {
          //   id: '7',
          //   message: 'Great! Check out your summary',
          //   trigger: 'review',
          // },
          // {
          //   id: 'review',
          //   component: <Review />,
          //   asMessage: true,
          //   trigger: 'update',
          // },
          // {
          //   id: 'update',
          //   message: 'Would you like to update some field?',
          //   trigger: 'update-question',
          // },
          // {
          //   id: 'update-question',
          //   options: [
          //     { value: 'yes', label: 'Yes', trigger: 'update-yes' },
          //     { value: 'no', label: 'No', trigger: 'end-message' },
          //   ],
          // },
          // {
          //   id: 'update-yes',
          //   message: 'What field would you like to update?',
          //   trigger: 'update-fields',
          // },
          // {
          //   id: 'update-fields',
          //   options: [
          //     { value: 'name', label: 'Name', trigger: 'update-name' },
          //     { value: 'course', label: 'Course', trigger: 'update-course' },
          //     { value: 'phone', label: 'Phone', trigger: 'update-phone' },
          //   ],
          // },
          // {
          //   id: 'update-name',
          //   update: 'name',
          //   trigger: '7',
          // },
          // {
          //   id: 'update-course',
          //   update: 'course',
          //   trigger: '7',
          // },
          // {
          //   id: 'update-phone',
          //   update: 'phone',
          //   trigger: '7',
          // },
          {
            id: 'end-message',
            message: 'Thanks! Your information was submitted successfully! We will contact you very soon :) ',
            end: true,
          },
        ]}
      />
    );
  }
}

export default SimpleForm;