
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, Input, InputNumber, Popconfirm, Form, Typography, Button, Modal } from 'antd'
import './index.css'
import { Auth, Hub } from "aws-amplify";
import { API } from 'aws-amplify';


const originData = [];

  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

 


  const EditableTable = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');
    const [user, setUser] = useState(null);

    // Modal stuff
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
      addRow()
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    const onFinish = (values) => {
      setIsModalVisible(false);
      addRow(values)
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

  function id () {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

    async function addRow(values) {
      let key = id()
      setData(originData => [...originData, {
        key: key,
        subject: values.subject,
        professor: values.professor,
        fees: values.fees,
        time: values.time,
        day: values.day,
        zoom: values.zoom
      }]);
      const data = {
        body: {
          key: key,
          subject: values.subject,
          professor: values.professor,
          fees: values.fees,
          time: values.time,
          day: values.day,
          zoom: values.zoom
        }
      };
      const apiData = await API.post('ttapi', '/timetable', data);
      console.log({ apiData });
    }
    
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


    useEffect(() => {
      getUser();
      getTableRows()
      }, data);
  
    const isEditing = (record) => record.key === editingKey;
  
    const edit = (record) => {
      console.log(record)
      form.setFieldsValue({
        subject: '',
        fees: '',
        professor: '',
        ...record,
      });
      setEditingKey(record.key);
    };
  
    const cancel = () => {
      setEditingKey('');
    };

    const deleteRow = async (record) => {
      console.log(record)
      const datas = {
        body: {
          key: record.key,
        }
      }
      const apiData = await API.del('ttapi', '/timetable', datas);
      const newData = [...data];
      const index = newData.findIndex((item) => record.key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1);
        setData(newData);
        setEditingKey('');
      }
    };


    const save = async (key) => {
        try {
          const row = await form.validateFields();
          const newData = [...data];
          const index = newData.findIndex((item) => key === item.key);
    
          if (index > -1) {
            const item = newData[index];
            newData.splice(index, 1, { ...item, ...row });
            setData(newData);
            setEditingKey('');
          } else {
            newData.push(row);
            setData(newData);
            setEditingKey('');
          }
        } catch (errInfo) {
          console.log('Validate Failed:', errInfo);
        }
      };


      const columns = [
        {
          title: 'Subject',
          dataIndex: 'subject',
          width: '100',
          editable: true,
        },
        {
          title: 'Professor',
          dataIndex: 'professor',
          width: '100',
          editable: true,
        },
        {
          title: 'Fees',
          dataIndex: 'fees',
          // width: '10%',
          editable: true,
        },
        {
            title: 'Time',
            dataIndex: 'time',
            // width: '10%',
            editable: true,
          },
          {
            title: 'Day',
            dataIndex: 'day',
            // width: '10%',
            editable: true,
          },
          {
            title: 'Zoom video link',
            dataIndex: 'zoom',
            // width: '20%',
            editable: true,
          },
        // {
        //   title: 'operation',
        //   dataIndex: 'operation',
        //   render: (_, record) => {
        //     const editable = isEditing(record);
        //     return editable && user ? (
        //       <span>
        //         <a
        //           href="javascript:;"
        //           onClick={() => save(record)}
        //           style={{
        //             marginRight: 8,
        //           }}
        //         >
        //           Save
        //         </a>
        //         <Popconfirm title="Sure to Cancel?" onConfirm={cancel}>
        //           <a>Cancel</a>
        //         </Popconfirm>
        //       </span>
        //     ) : (
        //       <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
        //         Edit
        //       </Typography.Link>
        //     );
        //   },
        // },
        {
          title: 'Delete',
          // width: '100z',
          dataIndex: 'operation',
          render: (_, record) => {
            const editable = isEditing(record);
            return editable && user ? (
              <span>
                <a
                  href="javascript:;"
                  onClick={cancel}
                  style={{
                    marginRight: 8,
                  }}
                >
                  Cancel
                </a>
                  <a  onClick={() => deleteRow(record)} style={{color: 'red'}}>Confirm?</a>
              </span>
            ) : (
              <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                Delete
              </Typography.Link>
            );
          },
        },
      ];

      async function getTableRows() {
        const apiData = await API.get('ttapi', '/timetable');
        setData(apiData.data.Items)
      }
      
      const mergedColumns = columns.map((col) => {
        if (!col.editable) {
          return col;
        }
        return {
            ...col,
            onCell: (record) => ({
              record,
              inputType: col.dataIndex === 'age' ? 'number' : 'text',
              dataIndex: col.dataIndex,
              title: col.title,
              editing: isEditing(record),
            }),
          };
        });

        return (
          <div>
          
            <Form form={form} component={false}>
              <Table
                id="ant-table-timetable"
                components={{
                  body: {
                    cell: EditableCell,
                  },
                }}
                bordered
                dataSource={data}
                scroll={{ x: 1000 }}
                columns={mergedColumns}
                rowClassName="editable-row"
                pagination={{
                  onChange: cancel,
                }}
              />
            </Form>
            {
            user ?   
            <Button style={{margin: '2.5% 45%'}} onClick={showModal}>Add a new row!</Button> : null
            }
      <Modal title="Add new timetable row" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
       footer={[
        <Button form="basic" key="submit" htmlType="submit">
            Submit
        </Button>
        ]}
      >
      <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Sub"
        name="subject"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Prof."
        name="professor"
        rules={[{ required: true, message: 'Please input !' }]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label="Fees"
        name="fees"
        rules={[{ required: true, message: 'Please input !' }]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label="Time"
        name="time"
        rules={[{ required: true, message: 'Please input !' }]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label="Day"
        name="day"
        rules={[{ required: true, message: 'Please input !' }]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label="Zoom"
        name="zoom"
        rules={[{ required: true, message: 'Please input !' }]}
      >
        <Input/>
      </Form.Item>
      </Form>
      </Modal>
            </div>
          );
        };

export default EditableTable;
