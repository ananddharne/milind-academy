import React, { useState, useEffect } from "react";

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
import { Menu, Carousel } from "antd";
import SocialMediaSection from "./SocialMediaSection";
import A from "./A";
import "./index.css";
import { Auth, Hub } from "aws-amplify";

const { SubMenu } = Menu;

function Header() {
  const [currentNav, setCurrentNav] = useState("home");
  const [user, setUser] = useState(null);
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
  }

  function signIn() {
    Auth.federatedSignIn().then(data => {
      console.log(data);
    });
  }

  async function signUp(username, password, email, phone_number) {
    try {
      const user = {
        username: "sharviltekani@gmail.com",
        password: "Mphasis$69",
        attributes: {
          email: "sharviltekani@gmail.com", // optional
          phone_number: "+16462098332" // optional - E.164 number convention
          // other custom attributes
        }
      };
      await Auth.signUp(user);
      console.log(user);
    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  async function signInn() {
    try {
      const user = await Auth.signIn("anand.dharne24@gmail.com", "password");
    } catch (error) {
      console.log("error signing in", error);
    }
  }

  // in useEffect, we create the listener

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      console.log(event);
      switch (event) {
        case "signIn":
        case "cognitoHostedUI":
          getUser().then(userData => {
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

    getUser().then(userData => {});
  }, []);

  return (
    <div>
      <SocialMediaSection>
        <FacebookOutlined style={{ fontSize: "150%" }} />
        <TwitterOutlined
          style={{ marginLeft: "3%", marginRight: "3%", fontSize: "150%" }}
        />
        <InstagramOutlined style={{ fontSize: "150%" }} />
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
        <Menu.Item
          onClick={getUser}
          key="timetable"
          icon={<ClockCircleFilled />}
        >
          TimeTable
          <Link to="/timetable" />
        </Menu.Item>
        <Menu.Item key="downloads" icon={<DownloadOutlined />}>
          Downloads
          <Link to="downloads/" />
        </Menu.Item>
        {user === null ? (
          <Menu.Item
            id="login-accounts"
            onClick={signIn}
            key="login"
            icon={<LoginOutlined />}
          >
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

        <Menu.Item
          id="login-accounts"
          onClick={signUp}
          key="loginfr"
          icon={<LoginOutlined />}
        >
          <Link to="/login" />
          Sign up
        </Menu.Item>
      </Menu>
      <div className="students-image" />
      <div className="carousel">
      <Carousel autoplay>

        <div className="carousel-item-div">
        <h1 style={{color: 'white', fontSize: '180%', color: '#ED7170'}}> OUR GLOWING REVIEWS! </h1>
        <h1 style={{color: 'white'}}>
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
        <h1 style={{color: 'white', fontSize: '110%'}}> <i> As seen on <a style={{color: '#ED7170'}} href="https://www.justdial.com/Pune/Milind-Academy-Opp-Bhavkar-Bhavan-Shivaji-Nagar/020PXX20-XX20-090626131541-H9A8_BZDET" target="_blank"> Justdial </a></i> </h1>
        </div>
        <div className="carousel-item-div">
        <h1 style={{color: 'white', fontSize: '180%', color: '#ED7170'}}> OUR GLOWING REVIEWS! </h1>
        <h1 style={{color: 'white'}}>
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
        <h1 style={{color: 'white', fontSize: '110%'}}> <i> As seen on <a style={{color: '#ED7170'}} href="https://www.justdial.com/Pune/Milind-Academy-Opp-Bhavkar-Bhavan-Shivaji-Nagar/020PXX20-XX20-090626131541-H9A8_BZDET" target="_blank"> Justdial </a></i> </h1>
        </div>
        <div className="carousel-item-div">
        <h1 style={{color: 'white', fontSize: '180%', color: '#ED7170'}}> OUR GLOWING REVIEWS! </h1>       
        <h1 style={{color: 'white'}}>
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
        <h1 style={{color: 'white', fontSize: '110%'}}> <i> As seen on <a style={{color: '#ED7170'}} href="https://www.justdial.com/Pune/Milind-Academy-Opp-Bhavkar-Bhavan-Shivaji-Nagar/020PXX20-XX20-090626131541-H9A8_BZDET" target="_blank"> Justdial </a></i> </h1>
        </div>
        <div className="carousel-item-div">
        <h1 style={{color: 'white', fontSize: '180%', color: '#ED7170'}}> OUR GLOWING REVIEWS! </h1>        
        <h1 style={{color: 'white'}}>
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
        <h1 style={{color: 'white', fontSize: '110%'}}> <i> As seen on <a style={{color: '#ED7170'}} href="https://www.justdial.com/Pune/Milind-Academy-Opp-Bhavkar-Bhavan-Shivaji-Nagar/020PXX20-XX20-090626131541-H9A8_BZDET" target="_blank"> Justdial </a></i> </h1>
        </div>
      </Carousel>
      </div>
    </div>
  );
}

export default Header;
