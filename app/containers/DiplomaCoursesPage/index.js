import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Courses from 'components/Courses';
import { Card, Button, Modal, Typography, List, Tabs } from 'antd'
import "./index.css"
import civil from "./civil.jpg"
import mechanical from "./mechanical-engg.jpg"
import electrical from "./electrical-engg.jpg"
import computer from "./computer-engg.jpg"



export default function DiplomaCoursesPage() {
  const { Meta } = Card;
  const { TabPane } = Tabs;

  const [isCivilModalVisible, setIsCivilModalVisible] = useState(false);
  const [isMechModalVisible, setIsMechModalVisible] = useState(false);
  const [isCompModalVisible, setIsCompModalVisible] = useState(false);



  const showCivilModal = () => {
    setIsCivilModalVisible(true);
  };

  const handleOkCivil = () => {
    setIsCivilModalVisible(false);
  };

  const handleCancelCivil = () => {
    setIsCivilModalVisible(false);
  };


  const showMechModal = () => {
    setIsMechModalVisible(true);
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

  const handleCancelMech = () => {
    setIsMechModalVisible(false);
  };

  const civilSubjectsFE = [
    "BASIC MATHEMATICS(M1)",
    "BASIC PHYSICS",
    "BASIC CHEMISTRY",
    "ENGINEERING MECHANICS",
    "APPLIED MATHEMATICS (M2)",
    "APPLIED MECHANICS",
    "ENGINEERING MECHANICS",
    "APPLIED PHYSICS",
    "APPLIED CHEMISTRY",
    "SY DIPLOMA (CIVIL)"
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
"DATA COMMUNICATION AND COMPUTER NETWORK"
  ];

  const compSubjectsTE = [
    "OPERATING SYSTEMS",
    "ADVANCED JAVA PROGRAMMING",
   " PROGRAMMING WITH PYTHON"
  ];


  return (
    <div className="gallery-grid">
      <Card
        hoverable
        style={{ width: 275 }}
        cover={<img alt="example" src={civil} />}
      >
        <Meta title="Civil Engineering Diploma" description="" />
        <Button onClick={showCivilModal} style={{ marginTop: '5%', fontWeight: 'bold' }}>View Subjects</Button>
        <Modal
          title="Subjects List"
          visible={isCivilModalVisible}
          onCancel={handleOkCivil}
          footer={null}
          closable={true}
          id="join-pool-modal"
        >
          <Tabs defaultActiveKey="1" >
            <TabPane tab="FY" key="1">
              <List
                // bordered
                dataSource={civilSubjectsFE}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text strong>{item}</Typography.Text>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="SY" key="2">
              <List
                // bordered
                dataSource={civilSubjectsSE}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text strong>{item}</Typography.Text>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="TY" key="3">
              <List
                // bordered
                dataSource={civilSubjectsTE}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text strong> {item} </Typography.Text>
                  </List.Item>
                )}
              />
            </TabPane>
          </Tabs>

        </Modal>
      </Card>
      <Card
        hoverable
        style={{ width: 275 }}
        cover={<img alt="example" src={mechanical} />}
      >
        <Meta title="Mechanical Engg. Diploma" description="" />
        <Button onClick={showMechModal} style={{ marginTop: '5%', fontWeight: 'bold' }}>View Subjects</Button>
        <Modal
          title="Subjects List"
          visible={isMechModalVisible}
          onCancel={handleOkMech}
          footer={null}
          closable={true}
          id="join-pool-modal"
        >
          <Tabs defaultActiveKey="1" >
            <TabPane tab="FY" key="1">
              <List
                // bordered
                dataSource={mechSubjectsFE}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text strong>{item} </Typography.Text>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="SY" key="2">
              <List
                // bordered
                dataSource={mechSubjectsSE}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text strong>{item}</Typography.Text>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="TY" key="3">
              <List
                // bordered
                dataSource={mechSubjectsTE}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text strong> {item}</Typography.Text>
                  </List.Item>
                )}
              />
            </TabPane>
          </Tabs>

        </Modal>
      </Card>
      <Card
        hoverable
        style={{ width: 275 }}
        cover={<img alt="example" src={electrical} />}
      >
        <Meta title="Electrical Engg. Diploma" description="" />
      </Card>
      {/* <Card
    hoverable
    style={{ width: 275 }}
    cover={<img alt="example" src={mechanical} />}
  >
    <Meta title="Production Engg. Diploma" description="" />
    <Button style={{marginTop: '5%', fontWeight: 'bold'}}>View Subjects</Button>

  </Card> */}
      <Card
        hoverable
        style={{ width: 275 }}
        cover={<img alt="example" src={computer} />}
      >
        <Meta title="Computer/IT Engg Diploma" description="" />
        <Button onClick={showCompModal} style={{ marginTop: '5%', fontWeight: 'bold' }}>View Subjects</Button>
        <Modal
          title="Subjects List"
          visible={isCompModalVisible}
          onCancel={handleOkComp}
          footer={null}
          closable={true}
          id="join-pool-modal"
        >
          <Tabs defaultActiveKey="1" >
            <TabPane tab="FY" key="1">
              <List
                // bordered
                dataSource={compSubjectsFE}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text strong>{item} </Typography.Text>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="SY" key="2">
              <List
                // bordered
                dataSource={compSubjectsSE}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text strong>{item}</Typography.Text>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="TY" key="3">
              <List
                // bordered
                dataSource={compSubjectsTE}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text strong> {item}</Typography.Text>
                  </List.Item>
                )}
              />
            </TabPane>
          </Tabs>

        </Modal>
      </Card>
    </div>
  );
}
