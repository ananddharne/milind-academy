import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Courses from 'components/Courses';
import { Card, Button, Modal, Typography, List, Tabs } from 'antd'
import "./index.css"
import civil from "./civil.jpg"
import mechanical from "./mechanical-engg.jpg"
import electrical from "./electrical.jpg"
import computer from "./computer-engg.jpg"
import auto from "./download.jpg"
import elex from "./electronics1.jpg"
import { ToastContainer, toast } from 'react-toastify';





export default function DiplomaCoursesPage() {
  const { Meta } = Card;
  const { TabPane } = Tabs;

  const [isCivilModalVisible, setIsCivilModalVisible] = useState(false);
  const [isMechModalVisible, setIsMechModalVisible] = useState(false);
  const [isCompModalVisible, setIsCompModalVisible] = useState(false);
  const [isAutoModalVisible, setIsAutoModalVisible] = useState(false);
  const [isElexModalVisible, setIsElexModalVisible] = useState(false);





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

  const civilSubjectsFE = [
    "BASIC MATHEMATICS(M1)",
    "BASIC PHYSICS",
    "BASIC CHEMISTRY",
    "ENGINEERING MECHANICS",
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


      <Card
        hoverable
        style={{ width: 275 }}
        cover={<img alt="example" src={auto} />}
      >
        <Meta title="Automobile Engineering" description="" />
        <Button onClick={showAutoModal} style={{ marginTop: '5%', fontWeight: 'bold' }}>View Subjects</Button>
        <Modal
          title="Subjects List"
          visible={isAutoModalVisible}
          onCancel={handleOkAuto}
          footer={null}
          closable={true}
          id="join-pool-modal"
        >
          <Tabs defaultActiveKey="1" >
            <TabPane tab="FY" key="1">
              <List
                // bordered
                dataSource={autoSubjectsFE}
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
                dataSource={autoSubjectsSE}
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
                dataSource={autoSubjectsTE}
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
        cover={<img alt="example" src={elex} />}
      >
        <Meta title="Electronics Engineering" description="" />
        <Button onClick={showElexModal} style={{ marginTop: '5%', fontWeight: 'bold' }}>View Subjects</Button>
        <Modal
          title="Subjects List"
          visible={isElexModalVisible}
          onCancel={handleOkElex}
          footer={null}
          closable={true}
          id="join-pool-modal"
        >
          <Tabs defaultActiveKey="1" >
            <TabPane tab="FY" key="1">
              <List
                // bordered
                dataSource={elexSubjectsFE}
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
                dataSource={elexSubjectsSE}
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
                dataSource={elexSubjectsTE}
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
