import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  ClockCircleFilled,
  PhoneOutlined,
  ContactsOutlined,
  UnorderedListOutlined,
  HomeOutlined,
  DownloadOutlined,
  ClockCircleOutlined,
  LoginOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import SocialMediaSection from './SocialMediaSection';
import A from './A';
import './index.css';
import { Auth } from 'aws-amplify'


const { SubMenu } = Menu;

function Header() {
  const handleClick = e => {
    // console.log('click ', e);
    setCurrentNav(e.key);
  };

  const [currentNav, setCurrentNav] = useState('home');
  return (
    <div>
      <A href="https://www.reactboilerplate.com/" />
      <SocialMediaSection>
        <FacebookOutlined style={{ fontSize: '150%' }} />
        <TwitterOutlined
          style={{ marginLeft: '3%', marginRight: '3%', fontSize: '150%' }}
        />
        <InstagramOutlined style={{ fontSize: '150%' }} />
      </SocialMediaSection>
      <div className="grid-container">
        <div className="Logo-and-name">
          <div className="name">Milind Academy of Engineering</div>
        </div>
        <div className="phone-section">
          <PhoneOutlined className="phone-logo" />
          <div className="phone-no">+91 20 2551 0982</div>
        </div>
        <div className="clock-section">
          <ClockCircleOutlined className="phone-logo" />
          <div className="phone-no">Mon-Sun: 9am-5pm</div>
        </div>
      </div>

      <div />
      <Menu
        id="navbar"
        theme="light"
        onClick={handleClick}
        selectedKeys={[currentNav]}
        mode="horizontal"
      >
        <Menu.Item key="home" icon={<HomeOutlined />}>
          Home
          <Link to="/" />
        </Menu.Item>
        <Menu.Item key="about" icon={<ContactsOutlined />}>
          About us
          <Link to="/aboutus" />
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<UnorderedListOutlined />} title="Courses">
          <Menu.ItemGroup>
            <Menu.Item key="setting:1">
              Engineering
              <Link to="/engineering" />
            </Menu.Item>
            <Menu.Item key="setting:2">
              Diploma
              <Link to="/diploma" />
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="timetable" icon={<ClockCircleFilled />}>
          TimeTable
          <Link to="/timetable" />
        </Menu.Item>
        <Menu.Item key="downloads" icon={<DownloadOutlined />}>
          Downloads
          <Link to="downloads/" />
        </Menu.Item>
        <Menu.Item onClick={() => Auth.federatedSignIn()} key="login" icon={ <LoginOutlined />}>
          Login
        </Menu.Item>
      </Menu>
      <div className="students-image" />
    </div>
  );
}

export default Header;
