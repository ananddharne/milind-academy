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

export default function DiplomaCoursesPage() {
  const { Meta } = Card;
  const { TabPane } = Tabs;
  const [isCivilModalVisible, setIsCivilModalVisible] = useState(false);
  const [isMechModalVisible, setIsMechModalVisible] = useState(false);
  const [isCompModalVisible, setIsCompModalVisible] = useState(false);
  const [isAutoModalVisible, setIsAutoModalVisible] = useState(false);
  const [isElexModalVisible, setIsElexModalVisible] = useState(false);



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

  const handleOkElex = () => {
    setIsElexModalVisible(false);
  };

  const handleOkAuto = () => {
    setIsAutoModalVisible(false);
  };

  const handleCancelCivil = () => {
    setIsCivilModalVisible(false);
  };


  const showMechModal = () => {
    setIsMechModalVisible(true);
  };


  const showAutoModal = () => {
    setIsAutoModalVisible(true);
  };

  const showElexModal = () => {
    setIsElexModalVisible(true);
  };

  const showCompModal = () => {
    setIsCompModalVisible(true);
  };

  const handleOkMech = () => {
    setIsMechModalVisible(false);
  };

  const handleOkComp = () => {
    setIsCompModalVisible(false)
  }

  const civilSubjectsFESem1 = [
    "BASIC MATHEMATICS(M1)",
    "BASIC PHYSICS",
    "BASIC CHEMISTRY",
    "ENGINEERING MECHANICS"
  ];
  const civilSubjectsFESem2 = [
    "APPLIED MATHEMATICS (M2)",
    "APPLIED MECHANICS",
    "APPLIED PHYSICS",
    "APPLIED CHEMISTRY"
  ];
  const civilSubjectsSE = [
    " MECHANICS OF STRUCTURES(MOS)",
    "M3(AUTONOMOUS)",
    "THEORY OF STRUCTURES",
    "HYDRAULICS"
  ];

  const civilSubjectsTE = [
    "DESIGN OF STEEL AND RCC STRUCTURES",
    "ANALYSIS AND DESIGN OF RCC STRUCTURES",
    "ESTIMATING COSTING AND VALUATION",
    "PRECAST AND PRESTRESSED CONCRETE"
  ];


  const mechSubjectsFE = [
    "BASIC MATHEMATICS(M1)",
    "BASIC PHYSICS",
    "BASIC CHEMISTRY",
    "ENGINEERING MECHANICS",
    "APPLIED MATHEMATICS (M2)",
    " APPLIED MECHANICS",
    "ENGINEERING MECHANICS",
    "APPLIED PHYSICS",
    "APPLIED CHEMISTRY",
    "ENGINEERING DRAWING"
  ];

  const mechSubjectsSE = [
    "STRENGTH OF MATERIALS(SOM)",
    "M3(AUTONOMOUS)",
    "MECHANICAL WORKING DRAWING",
    "MECHANICAL ENGINEERING DRAWING",
    "THERMAL ENGINEERING",
    "THEORY OF MACHINES (TOM)",
    "FLUID MECHANICS",
    "THEORY OF MACHINES(TOM)",
  ];

  const mechSubjectsTE = [
    "ELEMENTS OF MACHINE DESIGN",
    "POWER ENGINEERING",
    "TOOL ENGINEERING",
    "INDUSTRIAL HYDAULICS AND PNEUMATICS",
    "AUTOMOBILE ENGINEERING",
    "REFRIGERATION AND AIRCONDITIONING"
  ];

  const compSubjectsFE = [
    "BASIC MATHEMATICS(M1)",
    "BASIC PHYSICS",
    "BASIC CHEMISTRY",
    "APPLIED MATHEMATICS (M2)",
    "BASIC ELECTRONICS",
    "ELEMENTS OF ELECTRICAL ENGINEERING",
   " PROGRAMMING IN C"
  ];

  const compSubjectsSE = [
   "C++",
"DATA STRUCTURES USING ACA",
"DIGITAL TECHNIQUES",
"MICROPROCESSORS",
"JAVA PROGRAMMING",
"DATA COMMUNICATION AND COMPUTER NETWORK",
"Computer Network (IT)"
  ];

  const compSubjectsTE = [
    "OPERATING SYSTEMS",
    "ADVANCED JAVA PROGRAMMING",
   " PROGRAMMING WITH PYTHON (Computer)",
   "MOBILE APPLICATION DEVELOPMENT (IT)"
  ];


  const autoSubjectsFE = [
    "M1",
   " BASIC SCIENCE",
    "APPLIED MATHEMATICS(M2)",
    "APPLIED MECHANICS",
    "APPLIED SCIENCE",
    "ENGINEERING DRAWING",
  ];

  const autoSubjectsSE = [

    "SOM",
"BASIC ELECTRICAL AND ELECTRONICS ENGINEERING",
"AUTOMOBILE ENGINES",
"AUTOMOBILE TRANSMISSION SYSTEM",
"TOM",
"ADVANCED AUTOMOBILE ENGINES",
"HEAT POWER ENGINEERING",
"AUTOMOBILE SYSTEMS AND BODY ENGINEERING"

  ];

  const autoSubjectsTE = [
    "AUTOMOBILE COMPONENT DESIGN",
"    TWO AND THREE WHEELER TECHNOLOGIES",
  "  HYDRAULIC AND PNEUMATIC CONTROLS",
 "   VEHICLE SYSTEM MAINTENANCE",
   " AUTOMOTIVE ELECTRICAL ANDELECTRONICS SYSTEM",
   " AUTOMOBILE AIR CONDITIONING"
  ];

  const elexSubjectsFE = [
    "M1",
   " BASIC SCIENCE",
  "  APPLIED MATHEMATICS(M2)",
    "BASIC ELECTRONICS",
    "ELEMENTS OF ELECTRICAL ENGINEERING",
    "C PROGRAMMING"

  ];
  const elexSubjectsSE = [
   " DIGITAL TECHNIQUES",
"APPLIED ELECTRONICS",
"ELECTRIC CIRCUITS AND NETWORKS",
"LIC",
"MICROCONTROLLER AND APPLICATIONS",
"BASIC POWER ELECTRONICS",
"DIGITAL COMMUNICATION SYSTEMS"
  ];
  const elexSubjectsTE = [

"    EMBEDDED SYSTEMS",
"CONTROL SYSTEMS AND PLC",
"MOBILE AND WIRELESS COMMUNICATION",
"MICROWAVE AND RADAR",
"COMPUTER NETWORKING AND DATA COMMUNICATION",
"VLSI WITH VHDL",
"MECHATRONICS",
"OPTICAL NETWORKS ANDSATELLITE COMMUNICATION"
  ];



  return (
    <div>
    <div style={{ backgroundColor: '#226872', textAlign: 'center', color: 'white'}} className="large-div">
        <div style={{ padding: '10%', fontSize: '200%' }}> Diploma Engineering Courses </div>
    </div>
    <div className="gallery-grid">
    <Card
        hoverable
                style={{ textAlign: 'center', width: '100%' }}

      >
        <img style={{padding: '5%'}}
        alt="example" src={civil1} />
        <div>
          <div> Civil </div>
          <div> Engineering </div>
        </div>
        <button className="view-subjects-button" onClick={showCivilModal} style={{ marginTop: '18%' }}> <span> View Subjects </span> </button>
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
        alt="example" src={mech} />
        <div> Mechanical </div>
        <div> Engineering </div>
        <button className="view-subjects-button" onClick={showMechModal}> <span> View Subjects </span> </button>
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
        <img alt="example" style={{padding: '5%'}} src={electrical} />
        {/* <Meta style={{marginBottom: '10%'}} title="civil Engineering" description="" /> */}
        <div> Electrical </div>
        <div> Engineering </div>
      </Card>
      <Card
        hoverable
                style={{ textAlign: 'center', width: '100%' }}

      >
        <img style={{padding: '5%'}} alt="example" src={computer} />
        <div> Computer </div>
        <div> Engineering </div>
        <button className="view-subjects-button" onClick={showCompModal} style={{ marginTop: '18%' }}> <span> View Subjects </span> </button>
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


      <Card
        hoverable
                style={{ textAlign: 'center', width: '100%' }}

      >
        <img alt="example" src={auto} />
        <div> Automobile </div>
        <div> Engineering </div>
        <button className="view-subjects-button" onClick={showAutoModal} style={{ marginTop: '18%' }}> <span> View Subjects </span> </button>
        <Modal
          title="Subjects List"
          visible={isAutoModalVisible}
          onCancel={handleOkAuto}
          footer={null}
          closable={true}
          id="join-pool-modal"
          width={1000}
        >
          <Tabs tabBarGutter={8} type="card" defaultActiveKey="1" >
            <TabPane tab="First Year" key="1">
              <List
                // bordered
                dataSource={autoSubjectsFE}
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
                dataSource={autoSubjectsSE}
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
                dataSource={autoSubjectsTE}
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
        <img style={{padding: '3.5%'}}  alt="example" src={elex} />
        <div> Electronics </div>
        <div> Engineering </div>
        <button style={{ marginTop: '18%' }} className="view-subjects-button" onClick={showElexModal}> <span> View Subjects </span> </button>
        <Modal
          title="Subjects List"
          visible={isElexModalVisible}
          onCancel={handleOkElex}
          footer={null}
          closable={true}
          id="join-pool-modal"
          width={1000}
        >
          <Tabs type="card" defaultActiveKey="1" >
            <TabPane tab="First Year" key="1">
              <List
                // bordered
                dataSource={elexSubjectsFE}
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
                dataSource={elexSubjectsSE}
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
                dataSource={elexSubjectsTE}
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
