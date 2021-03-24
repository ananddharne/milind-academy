import React, { useEffect } from 'react';
import {Form, Row, Input, Button, Col, message } from 'antd'
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
        span: 600,
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

export default function LoginPage() {

  const signIn = async (username, password) => {
    try {
      const user = await Auth.signIn(username, password);
      location.reload()
      window.location.replace("/")
      message.success('Signed in successfully!');
  } catch (error) {
      message.error('Uh Oh, something went wrong! ' + error.message);
      console.log('error signing in', error);
  }
  }

    const onFinish = async (values) => {
        console.log('Success:', values);
        signIn(values.email, values.password)
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  
  return (
    <div className="signin-container">

    <Row id="signin-form-row" type="flex" justify="center" align="middle" 
    >
    <Col>
    <Form
    id="login-form"
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
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password style={{width: '150%'}}  placeholder="Input your password" size={'large'} />
    </Form.Item>

    <Form.Item 
    // {...tailFormItemLayout}
    
    >
      <Button type="primary" style={{width: '150%', borderRadius: '0.1em'}} size={'large'} htmlType="submit">
        Login
      </Button>
    </Form.Item>
  </Form>
  </Col>
  </Row>
  </div>
  );
}
