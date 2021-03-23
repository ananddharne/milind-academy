import React, { useState, useEffect } from "react";
import { useClearCache } from 'react-clear-cache';
import { Link } from "react-router-dom";
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
  UserOutlined,
  LoginOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import { Menu, Carousel, Tooltip } from "antd";
import SocialMediaSection from "./SocialMediaSection";
import logo from './logo.svg'

import A from "./A";
import "./index.css";
import { Auth, Hub } from "aws-amplify";

// import {AntButton} from 'anandharne-storybook-poc-design-system';

const { SubMenu } = Menu;

function Header() {
  const [currentNav, setCurrentNav] = useState("home");
  const [user, setUser] = useState(null);
  const [offset, setOffset] = useState(0);
  const [speed, setAnimationSpeed] = useState(3);


  const handleClick = e => {
    // console.log('click ', e);
    setCurrentNav(e.key);
  };

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then(userData => {
        userData;
        console.log(userData);
        setUser(userData);
        // const btn = document.getElementById('login-account')
        // btn.innerHTML = userData.attributes.email;
      })
      .catch(() => console.log("Not signed in"));
  }

  function signOut() {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
      location.reload()
  }

  // in useEffect, we create the listener

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
        case "cognitoHostedUI":
          getUser().then(userData => {
            console.log(userData)
            //   setUser(userData)
            // console.log(userData)
            // const btn = document.getElementById('login-account')
            // btn.innerHTML = userData.attributes.email;
            // console.log(user)
          });

          break;
        case "signOut":
          setUser(null);
          break;
        case "signIn_failure":
        case "cognitoHostedUI_failure":
          console.log("Sign in failure", data);
          break;
      }
    });

    // getUser().then(userData => {});
     getUser().then(s => {console.log(s)})
    setAnimationSpeed(5)
  }, []);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
      let s = document.getElementById("navbar")
      // if(offset > 30) {
      //   console.log(offset)
      //   console.log(s)
      //   s.style.position = 'fixed';
      //   s.style.top = '0%';
      //   s.style.zIndex = 999;
      //   s.style.background = 'black';
      //   s.style.color = 'white';
      // } 
      // else 
      //  {
      //   s.style.top = '10%';
      //   // s.style.background = '#F1F8FF';
      //   // s.style.color = 'black';
      //   s.style.zIndex = 10;

      // }
    }
  }, [offset])

  
  const { isLatestVersion, emptyCacheStorage } = useClearCache();

  return (
    <div>
      {/* <SocialMediaSection>
        <FacebookOutlined style={{ fontSize: "150%" }} />
        <TwitterOutlined
          style={{ marginLeft: "3%", marginRight: "3%", fontSize: "150%" }}
        />
        <InstagramOutlined style={{ fontSize: "150%" }} />
      </SocialMediaSection> */}
      {/* <div className="grid-container">
        <div className="Logo-and-name">
          <img className="rotate" src={logo}></img>
          <span className="name">Milind Academy of Engineering</span>
        </div>
        <div className="phone-section">
          <PhoneOutlined className="phone-logo" />
          <div className="phone-no">+91 20 2551 0982</div>
        </div>
        <div className="clock-section">
          <ClockCircleOutlined className="phone-logo" />
          <div className="phone-no">Mon-Sun: 9am-5pm</div>
        </div>
      </div> */}

      <div />
      <Menu
        id="navbar"
        theme="light"
        onClick={handleClick}
        selectedKeys={[currentNav]}
        mode="horizontal"
      >
         <Menu.Item key="logo">
         <div className="Logo-and-name">
          <img className="rotate" src={logo}></img>
          <span className="name">Milind Academy of Engineering</span>
        </div>
          <Link to="/" />
        </Menu.Item>

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
        <Menu.Item
          // onClick={getUser}
          key="timetable"
          icon={<ClockCircleFilled />}
        >
          TimeTable
          <Link to="/timetable" />
        </Menu.Item>
        <Menu.Item key="downloads" icon={<DownloadOutlined />}>
          Free Downloads
          <Link to="downloads/" />
        </Menu.Item>
        {user === null ? (
          <Menu.Item
            id="login-accounts"
            // onClick={signIn}
            key="login"
            icon={<LoginOutlined />}
          >
          <Link to="/login"/>
            Login
          </Menu.Item>
        ) : (
          <SubMenu
            key="SubMenus"
            icon={<UserOutlined />}
            title={user.attributes.email}
          >
            <Menu.ItemGroup>
              <Menu.Item
                onClick={signOut}
                key="settings:2"
                icon={<LogoutOutlined />}
              >
                Sign out
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        )}

{
  !user ?
        <Menu.Item
          id="login-accounts"
          // onClick={signUp}
          key="loginfr"
          icon={<LoginOutlined />}
        >
          <Link to="/signup"/>
          Sign up
        </Menu.Item> : null
}

      {(
    <Menu.Item 
      onClick={e => {
      emptyCacheStorage();
    }}
    >
      <Tooltip
                  placement="bottom"
                  title={'Click here if you dont see the latest updates'}
                  className="tooltip"
                >
                    Update Version
                </Tooltip>
  </Menu.Item>
      )}
</Menu>

      {/* <div className="students-image" /> */}

      {/* <div className="carousel"> */}
      {/* </div> */}
    </div>
  );
}

export default Header;
