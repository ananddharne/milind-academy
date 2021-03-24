import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Courses from 'components/Courses';
import {Card, Button, Modal, Typography, List, Tabs, Collapse} from 'antd'
import "./index.css"
import civil from "./civil.jpg"
import mechanical from "./mechanical-engg.jpg"
import electrical from "./electrical-engg.jpg"
import computer from "./computer-engg.jpg"
import it from "./it-engg.jpg"

import SubjectsModal from 'components/SubjectsModal';
import useModal from 'components/SubjectsModal/useModal';



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

  const civilSubjectsFE = [
    'Engineering Mechanics', 'M1', 'M2'
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
      <div className="gallery-grid">
    <Card
    hoverable
    style={{ width: 275 }}
    cover={<img alt="example" src={civil} />}
  >
    <Meta title="Civil Engineering" description="" />
    <Button onClick={showCivilModal} style={{marginTop: '5%', fontWeight: 'bold'}}>View Subjects</Button>
    <Modal
                title="Subjects List"
                visible={isCivilModalVisible}
                onCancel={handleOkCivil}
                footer={null}
                closable={true}
                id="join-pool-modal"
            >
                  <Tabs defaultActiveKey="1" >
    <TabPane tab="FE" key="1">
    <List
      // // bordered
      dataSource={civilSubjectsFE}
      renderItem={item => (
        <List.Item>
          <Typography.Text strong>{toTitleCase(item)}</Typography.Text>
        </List.Item>
      )}
    />
    </TabPane>
    <TabPane tab="SE" key="2">
    <List
      // bordered
      dataSource={civilSubjectsSE}
      renderItem={item => (
        <List.Item>
          <Typography.Text strong>{toTitleCase(item)}</Typography.Text>
        </List.Item>
      )}
    />
    </TabPane>
    <TabPane tab="TE" key="3">
    <List
      // bordered
      dataSource={civilSubjectsTE}
      renderItem={item => (
        <List.Item>
          <Typography.Text strong> {toTitleCase(item)} </Typography.Text> 
        </List.Item>
      )}
    />
    </TabPane>
    <TabPane tab="BE" key="4">
    <List
      // bordered
      dataSource={civilSubjectsBE}
      renderItem={item => (
        <List.Item>
          <Typography.Text strong>{toTitleCase(item)}</Typography.Text> 
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
    <Meta title="Mechanical Engineering" description="" />
    <Button onClick={showMechModal} style={{marginTop: '5%' , fontWeight: 'bold'}}>View Subjects</Button>
    <Modal
                title="Subjects List"
                visible={isMechModalVisible}
                onCancel={handleOkMech}
                footer={null}
                closable={true}
                id="join-pool-modal"
            >
                  <Tabs defaultActiveKey="1" >
    <TabPane tab="FE" key="1">
    <List
      // bordered
      dataSource={mechSubjectsFE}
      renderItem={item => (
        <List.Item>
          <Typography.Text strong>{toTitleCase(item)} </Typography.Text> 
        </List.Item>
      )}
    />
    </TabPane>
    <TabPane tab="SE" key="2">
    <List
      // bordered
      dataSource={mechSubjectsSE}
      renderItem={item => (
        <List.Item>
          <Typography.Text strong>{toTitleCase(item)}</Typography.Text> 
        </List.Item>
      )}
    />
    </TabPane>
    <TabPane tab="TE" key="3">
    <List
      // bordered
      dataSource={mechSubjectsTE}
      renderItem={item => (
        <List.Item>
          <Typography.Text strong> {toTitleCase(item)}</Typography.Text>
        </List.Item>
      )}
    />
    </TabPane>
    <TabPane tab="BE" key="4">
    <List
      // bordered
      dataSource={mechSubjectsBE}
      renderItem={item => (
        <List.Item>
          <Typography.Text strong>{toTitleCase(item)}</Typography.Text> 
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
    <Meta title="Electrical Engineering" description="" />
  </Card>
  <Card
    hoverable
    style={{ width: 275 }}
    cover={<img alt="example" src={mechanical} />}
  >
    <Meta title="Production Engineering" description="" />
    <Button style={{marginTop: '5%', fontWeight: 'bold'}}>View Subjects</Button>

  </Card>
  <Card
    hoverable
    style={{ width: 275 }}
    cover={<img alt="example" src={computer} />}
  >
    <Meta title="Computer/IT Engineering" description="" />
    <Button onClick={showCompModal} style={{marginTop: '5%', fontWeight: 'bold'}}>View Subjects</Button>
    <Modal
                title="Subjects List"
                visible={isCompModalVisible}
                onCancel={handleOkComp}
                footer={null}
                closable={true}
                id="join-pool-modal"
            >
                  <Tabs defaultActiveKey="1" >
    <TabPane tab="FE" key="1">
    <List
      // bordered
      dataSource={compSubjectsFE}
      renderItem={item => (
        <List.Item>
          <Typography.Text strong>{toTitleCase(item)} </Typography.Text> 
        </List.Item>
      )}
    />
    </TabPane>
    <TabPane tab="SE" key="2">
    <List
      // bordered
      dataSource={compSubjectsSE}
      renderItem={item => (
        <List.Item>
          <Typography.Text strong>{toTitleCase(item)}</Typography.Text> 
        </List.Item>
      )}
    />
    </TabPane>
    <TabPane tab="TE" key="3">
    <List
      // bordered
      dataSource={compSubjectsTE}
      renderItem={item => (
        <List.Item>
          <Typography.Text strong> {toTitleCase(item)}</Typography.Text>
        </List.Item>
      )}
    />
    </TabPane>
    <TabPane tab="BE" key="4">
    <List
      // bordered
      dataSource={compSubjectsBE}
      renderItem={item => (
        <List.Item>
          <Typography.Text strong>{toTitleCase(item)}</Typography.Text> 
        </List.Item>
      )}
    />
    </TabPane>
  </Tabs>
             
            </Modal>
  </Card>


{/* it engg */}
<Card
    hoverable
    style={{ width: 275 }}
    cover={<img alt="example" src={it} />}
  >
    <Meta title="Computer/IT Engineering" description="" />
    <Button onClick={showItModal} style={{marginTop: '5%', fontWeight: 'bold'}}>View Subjects</Button>
    <Modal
                title="Subjects List"
                visible={isItModalVisible}
                onCancel={handleOkIt}
                footer={null}
                closable={true}
                id="join-pool-modal"
            >
                  <Tabs defaultActiveKey="1" >
    <TabPane tab="FE" key="1">
    <List
      // bordered
      dataSource={itSubjectsFE}
      renderItem={item => (
        <List.Item>
          <Typography.Text strong>{toTitleCase(item)} </Typography.Text> 
        </List.Item>
      )}
    />
    </TabPane>
    <TabPane tab="SE" key="2">
    <List
      // bordered
      dataSource={itSubjectsSE}
      renderItem={item => (
        <List.Item>
          <Typography.Text strong>{toTitleCase(item)}</Typography.Text> 
        </List.Item>
      )}
    />
    </TabPane>
    <TabPane tab="TE" key="3">
    <List
      // bordered
      dataSource={itSubjectsTE}
      renderItem={item => (
        <List.Item>
          <Typography.Text strong> {toTitleCase(item)}</Typography.Text>
        </List.Item>
      )}
    />
    </TabPane>
    <TabPane tab="BE" key="4">
    <List
      // bordered
      dataSource={itSubjectsBE}
      renderItem={item => (
        <List.Item>
          <Typography.Text strong>{toTitleCase(item)}</Typography.Text> 
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
