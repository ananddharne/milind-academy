import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Courses from 'components/Courses';
import { Card, Button, Modal, Typography, List, Tabs } from 'antd'
import "./index.css"
import civil1 from "./civil.svg"
import mech from "./mech.svg"
import electrical from "./electrical.svg"
import computer from "./computer.svg"
import auto from "./auto.svg"
import elex from "./electronics.svg"



export default function EnggCoursesPage() {
  const { Meta } = Card;
  const { TabPane } = Tabs;

  const [isCivilModalVisible, setIsCivilModalVisible] = useState(false);
  const [isMechModalVisible, setIsMechModalVisible] = useState(false);
  const [isCompModalVisible, setIsCompModalVisible] = useState(false);
  const [isItModalVisible, setIsItModalVisible] = useState(false);

  const toTitleCase = (phrase) => {
    return phrase
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };


  const showCivilModal = () => {
    setIsCivilModalVisible(true);
  };

  const handleOkCivil = () => {
    setIsCivilModalVisible(false);
  };

  const showMechModal = () => {
    setIsMechModalVisible(true);
  };

  const handleOkMech = () => {
    setIsMechModalVisible(false);
  };

  const showCompModal = () => {
    setIsCompModalVisible(true);
  };

  const handleOkComp = () => {
    setIsCompModalVisible(false);
  };


  const showItModal = () => {
    setIsItModalVisible(true);
  };

  const handleOkIt = () => {
    setIsItModalVisible(false);
  };
  const civilSubjectsFESem1 = [
    'Engineering Mechanics', 'M1'
  ];

  const civilSubjectsFESem2 = [
    'M2'
  ];

  const civilSubjectsSE = [
    'M3', 'MECHANICS OF STRUCTURES', 'FLUID MECHANICS', 'STRUCTURAL ANALYSIS', 'STRUCTURAL ANALYSIS 1', 'FLUID MECHANICS 1'
  ];

  const civilSubjectsTE = [
    'STRUCTURAL ANALYSIS 2', 'FLUID MECHANICS 2', 'STRUCTURAL DESIGN AND DRAWING 1', 'STRUCTURAL DESIGN AND DRAWING 2'
  ];

  const civilSubjectsBE = [
    'STRUCTURAL DESIGN AND DRAWING 3'
  ];

  const mechSubjectsFE = [
    'ENGINEERING MECHANICS', 'M1', 'M2'
  ];

  const mechSubjectsSE = [
    'M3', 'SOLID MECHANICS', 'ENGINEERING THERMODYNAMICS', 'EEE'
  ];

  const mechSubjectsTE = [
    'DESIGN OF MACHINE ELEMENTS 1', 'HEAT TRANSFER', 'TOM 2', 'TURBO MACHINES', 'DESIGN OF MACHINE ELEMENTS 2', 'MECHATRONICS'
  ];

  const mechSubjectsBE = [
    'RAC', 
    'DYNAMICS OF MACHINERY',
'POWER PLANT ENGINEERING',
'MECHANICAL SYSTEM DESIGN'
  ];


  const compSubjectsFE = [
    'ENGINEERING MECHANICS', 'M1', 'M2'
  ];

  const compSubjectsSE = [
    "DISCRETE MATHEMATICS",
    "FUNDAMENTALS OF DATA STRUCTURES",
    "OBJECT ORIENTED PROGRAMMING",
    "COMPUTER GRAPHICS",
    "DIGITAL ELECTRONICS AND LOGIC DESIGN",
    "M3",
    "DATA STRUCTURES AND ALGORITHMS",
    "SOFTWARE ENGINEERING",
   " MICROPROCESSOR"
  ];

  const compSubjectsTE = [
    "COMPUTER NETWORKS",
"THEORY OF COMPUTATION",
"DBMS",
"SOFTWARE ENGINEERING & PROJECT MANAGEMENT",
"DESIGN AND ANALYSIS OF ALGORITHMS",
"EMBEDDED SYSTEMS",
"WEB TECHNOLOGY",
"SOFTWARE MODELLING AND DESIGN"
  ];

  const compSubjectsBE = [
    "DATA ANALYTICS",
   " HIGH PERFORMANCE COMPUTING",
   " ARTIFICIAL INTELLIGENCE AND ROBOTICS",
    "INFORMATION AND CYBER SECURITY"
  ];


  const itSubjectsFE = [
    'ENGINEERING MECHANICS', 'M1', 'M2'
  ];

  const itSubjectsSE = [
    "DISCRETE MATHEMATICS",
    "OOPS",
    "DATA STRUCTURES AND ALGORITHMS",
    "M3",
   "COMPUTER FRAPHICS",
    "SOFTWARE ENGINEERING"
  ];

  const itSubjectsTE = [
    "OPERATING SYSTEMS",
    "THEORY OF COMPUTATION",
   " DATABASE MANAGEMENT SYSTEMS",
    "DESIGN AND ANALYSIS OF ALGORITHMS",
    "SYSTEMS PROGRAMMING"
  ];

  const itSubjectsBE = [
    "SOFTWARE DESIGN AND MODELLING",
"INFORMATION AND CYBER SECURITY"
  ];

  return (
    <div>
    <div style={{ backgroundColor: '#226872', textAlign: 'center', color: 'white'}} className="large-div">
        <div style={{ padding: '10%', fontSize: '200%' }}> Degree Engineering Courses </div>
    </div>
    <div className="gallery-grid">
    <Card
        hoverable
                style={{ textAlign: 'center', width: '100%' }}

      >
        <img 
        
        style={{marginBottom: '8%',  marginTop: '9%'}} 
        
        alt="example" src={civil1} />
        <div>
          <div> Civil </div>
          <div> Engineering </div>
        </div>
        <button className="view-subjects-button" onClick={showCivilModal} style={{ marginTop: '15%' }}> <span> View Subjects </span> </button>
        <Modal
          title="Subjects List"
          visible={isCivilModalVisible}
          onCancel={handleOkCivil}
          footer={null}
          closable={true}
          id="join-pool-modal"
          width={1000}
        >
          <Tabs tabBarGutter={8} type="card" defaultActiveKey="1" >
            <TabPane tab="First Year" key="1">
              <List
                // bordered
                header={<div style={{ fontFamily: 'Montserrat', fontWeight: '800', paddingBottom: '0.5%', color: '#226872', borderBottom: `0.08em solid black`}}>
                  
                  SEMESTER 1

                </div>}
                dataSource={civilSubjectsFESem1}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text>{toTitleCase(item)}</Typography.Text>
                  </List.Item>
                )}
              />
              <List
                // bordered
                header={<div style={{ fontFamily: 'Montserrat', fontWeight: '800', paddingBottom: '0.5%', color: '#226872', borderBottom: `0.08em solid black`}}>
                  
                  SEMESTER 2

                </div>}
                dataSource={civilSubjectsFESem2}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text>{toTitleCase(item)}</Typography.Text>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="Second Year" key="2">
              <List
                // bordered
                dataSource={civilSubjectsSE}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text>{toTitleCase(item)}</Typography.Text>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="Third Year" key="3">
              <List
                // bordered
                dataSource={civilSubjectsTE}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text> {toTitleCase(item)} </Typography.Text>
                  </List.Item>
                )}
              />
            </TabPane>
          </Tabs>

        </Modal>
      </Card>
      <Card
        hoverable
                style={{ textAlign: 'center', width: '100%' }}

      >
        <img 
        // style={{marginBottom: '-6%'}} 
        alt="example" src={mech} />
        <div> Mechanical </div>
        <div> Engineering </div>
        <button className="view-subjects-button" onClick={showMechModal} style={{ marginTop: '15%' }}> <span> View Subjects </span> </button>
        <Modal
          title="Subjects List"
          visible={isMechModalVisible}
          onCancel={handleOkMech}
          footer={null}
          closable={true}
          id="join-pool-modal"
          width={1000}
        >
          <Tabs tabBarGutter={8} type="card" defaultActiveKey="1" >
            <TabPane tab="First Year" key="1">
              <List
                // bordered
                dataSource={mechSubjectsFE}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text>{toTitleCase(item)} </Typography.Text>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="Second Year" key="2">
              <List
                // bordered
                dataSource={mechSubjectsSE}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text>{toTitleCase(item)}</Typography.Text>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="Third Year" key="3">
              <List
                // bordered
                dataSource={mechSubjectsTE}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text> {toTitleCase(item)}</Typography.Text>
                  </List.Item>
                )}
              />
            </TabPane>
          </Tabs>

        </Modal>
      </Card>
      <Card
        hoverable
                style={{ textAlign: 'center', width: '100%' }}

      >
        <img style={{marginBottom: '5%',  marginTop: '17%'}} alt="example" src={electrical} />
        {/* <Meta style={{marginBottom: '10%'}} title="civil Engineering" description="" /> */}
        <div> Electrical </div>
        <div> Engineering </div>
      </Card>
      <Card
        hoverable
                style={{ textAlign: 'center', width: '100%' }}

      >
        <img style={{marginBottom: '5%',  marginTop: '17%'}} alt="example" src={computer} />
        <div> Computer </div>
        <div> Engineering </div>
        <button className="view-subjects-button" onClick={showCompModal} style={{ marginTop: '15%' }}> <span> View Subjects </span> </button>
        <Modal
          title="Subjects List"
          visible={isCompModalVisible}
          onCancel={handleOkComp}
          footer={null}
          closable={true}
          id="join-pool-modal"
          width={1000}
        >
          <Tabs tabBarGutter={8} type="card"tabBarGutter={8} defaultActiveKey="1" >
            <TabPane tab="First Year" key="1">
              <List
                // bordered
                dataSource={compSubjectsFE}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text>{toTitleCase(item)} </Typography.Text>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="Second Year" key="2">
              <List
                // bordered
                dataSource={compSubjectsSE}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text>{toTitleCase(item)}</Typography.Text>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="Third Year" key="3">
              <List
                // bordered
                dataSource={compSubjectsTE}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text> {toTitleCase(item)}</Typography.Text>
                  </List.Item>
                )}
              />
            </TabPane>
          </Tabs>

        </Modal>
      </Card>

    </div>
    </div>
  );
}
