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
                footer={null}
                closable={true}
                id="join-pool-modal"
            >
                  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="FE" key="1">
    <List
      bordered
      style={{minHeight: '50%'}}
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
      style={{minHeight: '50%'}}
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
      style={{minHeight: '50%'}}
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
      style={{minHeight: '307px'}}
      dataSource={BE}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark></Typography.Text> {item}
        </List.Item>
      )}
    />
    </TabPane>
  </Tabs>
             
            </Modal>
        </>
    );
};

export default SubjectsModal;
