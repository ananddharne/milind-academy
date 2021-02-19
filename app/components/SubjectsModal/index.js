import React, { useState } from 'react';
import { Modal, Checkbox, List, Typography, Tabs} from 'antd';
import './index.css';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
  }
  

const SubjectsModal = ({ isShowing, hide, FE, SE, TE, BE }) => {
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
        setButtonDisabled(!buttonDisabled);
    };

    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
      ];

    return (
        <>
            <Modal
                title="Subjects List"
                visible={isShowing}
                // onOk={hide}
                onCancel={hide}
                // okText="Cancel"
                // cancelText="OK"
                footer={null}
                closable={true}
                id="join-pool-modal"
                // cancelButtonProps={{ disabled: buttonDisabled }}
            >
                  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="FE" key="1">
    <List
      bordered
      dataSource={FE}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark></Typography.Text> {item}
        </List.Item>
      )}
    />
    </TabPane>
    <TabPane tab="SE" key="2">
    <List
      bordered
      dataSource={SE}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark></Typography.Text> {item}
        </List.Item>
      )}
    />
    </TabPane>
    <TabPane tab="TE" key="3">
    <List
      bordered
      dataSource={TE}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark></Typography.Text> {item}
        </List.Item>
      )}
    />
    </TabPane>
    <TabPane tab="BE" key="4">
    <List
      bordered
      dataSource={BE}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark></Typography.Text> {item}
        </List.Item>
      )}
    />
    </TabPane>
  </Tabs>
             
                {/* <p style={{ fontSize: '2vh' }}><b>Are you sure you want to enter this pool?</b></p> */}
            </Modal>
        </>
    );
};

export default SubjectsModal;
