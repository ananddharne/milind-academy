import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import "./index.css"

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

    this.state = {
      opened: true
    };
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
      message: values[1],
      // reply_to: values[2]
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
            message: 'What is your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}! What are you interested in?',
            trigger: 'course',
          },
          {
            id: 'course',
            options: [
              { value: 'engg', label: 'Engineering', trigger: '5' },
              { value: 'diploma', label: 'Diploma', trigger: '5' },
            ],
          },
          {
            id: '5',
            message: 'What is your phone number',
            trigger: 'phone',
          },
          {
            id: 'phone',
            user: true,
            trigger: '7',
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
          {
            id: '7',
            message: 'Great! Check out your summary',
            trigger: 'review',
          },
          {
            id: 'review',
            component: <Review />,
            asMessage: true,
            trigger: 'update',
          },
          {
            id: 'update',
            message: 'Would you like to update some field?',
            trigger: 'update-question',
          },
          {
            id: 'update-question',
            options: [
              { value: 'yes', label: 'Yes', trigger: 'update-yes' },
              { value: 'no', label: 'No', trigger: 'end-message' },
            ],
          },
          {
            id: 'update-yes',
            message: 'What field would you like to update?',
            trigger: 'update-fields',
          },
          {
            id: 'update-fields',
            options: [
              { value: 'name', label: 'Name', trigger: 'update-name' },
              { value: 'course', label: 'Course', trigger: 'update-course' },
              { value: 'phone', label: 'Phone', trigger: 'update-phone' },
            ],
          },
          {
            id: 'update-name',
            update: 'name',
            trigger: '7',
          },
          {
            id: 'update-course',
            update: 'course',
            trigger: '7',
          },
          {
            id: 'update-phone',
            update: 'phone',
            trigger: '7',
          },
          {
            id: 'end-message',
            message: 'Thanks! Your data was submitted successfully!',
            end: true,
          },
        ]}
      />
    );
  }
}

export default SimpleForm;