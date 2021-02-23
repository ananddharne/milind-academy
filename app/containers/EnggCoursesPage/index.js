import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Courses from 'components/Courses';
import {Card, Button, Modal, Typography, List, Tabs} from 'antd'
import "./index.css"
import civil from "./civil.jpg"
import mechanical from "./mechanical-engg.jpg"
import electrical from "./electrical-engg.jpg"
import computer from "./computer-engg.jpg"
import SubjectsModal from 'components/SubjectsModal';
import useModal from 'components/SubjectsModal/useModal';



export default function EnggCoursesPage() {
  const { Meta } = Card;
  const { TabPane } = Tabs;

  const [isCivilModalVisible, setIsCivilModalVisible] = useState(false);
  const [isMechModalVisible, setIsMechModalVisible] = useState(false);


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

  const handleOkMech = () => {
    setIsMechModalVisible(false);
  };

  const handleCancelMech = () => {
    setIsMechModalVisible(false);
  };

  const civilSubjectsFE = [
    'Engineering Mechanics', 'M1', 'M2'
  ];
  const civilSubjectsSE = [
    'M3', 'Mechanics of Structures', 'Fluid Mechanics', 'Structural Analysis 1', 'Fluid Mechanics 1'
  ];

  const civilSubjectsTE = [
    'STRUCTURAL ANALYSIS 2', 'FLUID MECHANICS 2', 'STRUCTURAL DESIGN AND DRAWING 1', 'STRUCTURAL DESIGN AND DRAWING 2'
  ];

  const civilSubjectsBE = [
    'STRUCTURAL DESIGN AND DRAWING 3'
  ];

  const mechSubjectsFE = [
    'Engineering Mechanics', 'M1', 'M2'
  ];

  const mechSubjectsSE = [
    'M3', 'SOLID MECHANICS', 'ENGINEERING THERMODYNAMICS', 'EEE'
  ];

  const mechSubjectsTE = [
    'DESIGN OF MACHINE ELEMENTS 1', 'HEAT TRANSFER', 'TOM 2', 'TURBO MACHINES', 'DESIGN OF MACHINE ELEMENTS 2', 'RAC', 'MECHATRONICS'
  ];

  const mechSubjectsBE = [
    'STRUCTURAL DESIGN AND DRAWING 3'
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
          <Typography.Text strong>{item}</Typography.Text>
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
          <Typography.Text strong>{item}</Typography.Text>
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
          <Typography.Text strong> {item} </Typography.Text> 
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
          <Typography.Text strong>{item}</Typography.Text> 
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
          <Typography.Text strong>{item} </Typography.Text> 
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
          <Typography.Text strong>{item}</Typography.Text> 
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
          <Typography.Text strong> {item}</Typography.Text>
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
          <Typography.Text strong>{item}</Typography.Text> 
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
    <Button style={{marginTop: '5%', fontWeight: 'bold'}}>View Subjects</Button>

  </Card>
  </div>
  );
}
