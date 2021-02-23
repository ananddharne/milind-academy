/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Form, Input, Button, Select } from 'antd';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './index.css';
import MainFeatures from 'components/MainFeatures';
import ReviewsPanel from 'components/ReviewsPanel';
import video from './homepage_bgg.mp4'
import Footer from "components/Footer";


const key = 'home';

export function HomePage({ username, onSubmitForm }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  const onFinish = values => {
    console.log(values);
  };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 25 },
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
  };

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>

      
        {/* <div className="home-text">
        <div style={{ textAlign: 'center' }}>
            <p>Lorem ipsum lorem ipsum</p>
            <p>Lorem ipsum lorem ipsum</p>
            <p>Lorem ipsum lorem ipsum</p>
            <p>Lorem ipsum lorem ipsum</p>
            <p>Lorem ipsum lorem ipsum</p>
            <p>Lorem ipsum lorem ipsum</p>
          </div>
          <H2>Welcome to Milind Academy!</H2>
          </div> */}
          <MainFeatures/>
          {/* <MainFeatures/> */}
         
          <div className="master-container">
          <video className='videoTag' autoPlay loop muted>
          <source src={video} type='video/mp4' />
          </video>
          </div>
     
      {/* <Footer /> */}
        
    
        {/* <div className="home-form">
          <Form
            {...layout}
            name="form-antd"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={['user', 'name']}
              label="Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['user', 'email']}
              label="Email"
              rules={[{ type: 'email', required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Course">
              <Select>
                <Select.Option value="Engineering">Engineering</Select.Option>
                <Select.Option value="Diploma">Diploma</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Semester">
              <Select>
                <Select.Option value="Sem1">Sem 1</Select.Option>
                <Select.Option value="Sem2">Sem 2</Select.Option>
                <Select.Option value="Sem3">Sem 3</Select.Option>
                <Select.Option value="Sem4">Sem 4</Select.Option>
                <Select.Option value="Sem5">Sem 5</Select.Option>
                <Select.Option value="Sem6">Sem 6</Select.Option>
                <Select.Option value="Sem7">Sem 7</Select.Option>
                <Select.Option value="Sem8">Sem 8</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name={['subjects', 'interested']} label="Subjects">
              <Input.TextArea />
            </Form.Item>
            <Form.Item name={['message', 'io']} label="Message">
              <Input.TextArea />
            </Form.Item>
            <Form.Item name={['ph', 'ki']} label="Phone">
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form> 
        </div>  */}
        {/* <ReviewsPanel/> */}
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      // dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
