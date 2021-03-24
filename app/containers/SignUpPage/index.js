import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import EditableTable from 'components/EditableTable';
import {Form, Row, Checkbox, Input, Button, Col, message, Card } from 'antd'
import "./index.css"
import { Auth, Hub } from "aws-amplify";

const formItemLayout = {
    labelCol: {
      xs: {
        span: 0,
      },
      sm: {
        span: 0,
      },
    },
    wrapperCol: {
      xs: {
        span: 300,
      },
      sm: {
        span: 740,
      },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 10,
        offset: 6,
      },
      sm: {
        span: 16,
        offset: 10,
      },
    },
  };

export default function SignUpPage() {

    const confirmSignUp = async (username, code, password) => {
        try {
          await Auth.confirmSignUp(username, code);
        //   await Auth.signIn(username, password);
        //   location.reload()
          window.location.replace("/login")
          message.success('Sign Up successful')
        } catch (error) {
            message.error('Uh Oh! Error signing up, ' + error.message)
            console.log('error confirming sign up ', error);
        }
    }

    const onFinish = async (values) => {
        console.log('Success:', values);
        let phone = '+91' + values.phone
        let name = values.first_name + ' ' + values.last_name
        console.log(phone)
        try {
            const user = {
              username: values.email,
              password: values.password,
              attributes: {
                email: values.email, // optional
                phone_number: phone, // optional - E.164 number convention
                name: name, 
              }
            };
            await Auth.signUp(user);
            console.log(user);
            var code = prompt("Enter the code sent to your email for confirmation");
            confirmSignUp(values.email, code, values.password)
          } catch (error) {
            message.error('Uh Oh! Error signing up, ' + error.message)
            console.log("error signing up:", error);
          }
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  
  return (
      <Card className="signup-container">
    <Row id="signup-form-row" type="flex" justify="center" align="middle" 
    >
    <Col>
    <Form
    id="signup-form"
    // {...formItemLayout}
    name="basic"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >

    <Form.Item
      name="email"
      rules={[
        {
          required: true,
          type: 'email',
          message: 'Please enter a valid email!',
        },
      ]}
    >
      <Input style={{width: '150%'}}  placeholder="Your Email" size={'large'} />
    </Form.Item>

    <Form.Item
      name="first_name"
      rules={[
        {
          required: true,
          message: 'Please enter a name!',
        },
      ]}
    >
      <Input style={{width: '150%'}}  placeholder="Your name" size={'large'} />
    </Form.Item>


    <Form.Item
      name="last_name"
      rules={[
        {
          required: true,
          message: 'Please enter a last name!',
        },
      ]}
    >
      <Input style={{width: '150%'}}  placeholder="Your last name" size={'large'} />
    </Form.Item>

    <Form.Item
    //   label="Phone"
      name="phone"
      rules={[
        {
        //   required: true,
          message: 'Please input your phone!',
        },
        ({ getFieldValue }) => ({
            validator(_, value) {
              var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
              if(value.match(phoneno)) {
                  return Promise.resolve('all good')
              } else {
                  return Promise.reject('Invalid phone number');
              }
              
              

            },
          }),
      ]}
    >
      <Input style={{width: '150%'}} placeholder="Your Phone" size={'large'} />
    </Form.Item>

    <Form.Item
    //   label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password style={{width: '150%'}}  placeholder="Create your password" size={'large'} />
    </Form.Item>

    <Form.Item
        name="confirm"
        // label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password style={{width: '150%'}}  placeholder="Confirm your password" size={'large'} />
      </Form.Item>

    <Form.Item 
    // {...tailFormItemLayout}
    
    >
      <Button style={{width: '150%', borderRadius: '0.1em'}} size={'large'} type="primary" htmlType="submit">
        Sign Up
      </Button>
    </Form.Item>
  </Form>
  </Col>
  </Row>
  </Card>
  );
}
