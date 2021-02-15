
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, Input, InputNumber, Popconfirm, Form, Typography, Button } from 'antd'
import './index.css'
import { Auth, Hub } from "aws-amplify";
import { API } from 'aws-amplify';


const originData = [];


for (let i = 0; i < 6; i++) {
    originData.push({
      key: i.toString(),
      subject: `Engg Maths ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }



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
    // const [tableArray, setTableArray] = useState([
   
    // ]);

    function addRow() {
      // setData([...originData, {
        // key: originData.length,
        // subject: 'bla bla',
        // age: 32,
        // address: 'dolores'
      // }])
      setData(originData => [...originData, {
        key: originData.length,
        subject: '',
        age: 0,
        address: ''
      }]);
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
        Hub.listen("auth", ({ payload: { event, data } }) => {
          switch (event) {
            case "signIn":
            case "cognitoHostedUI":
              getUser().then(userData => {
                console.log(userData)
              
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
    
        // getUser().then(userData => {});
         getUser().then(s => {console.log(s)})
      }, []);
  
    const isEditing = (record) => record.key === editingKey;
  
    const edit = (record) => {
      form.setFieldsValue({
        name: '',
        age: '',
        address: '',
        ...record,
      });
      setEditingKey(record.key);
    };
  
    const cancel = () => {
      setEditingKey('');
    };

    const deleteRow = async (key) => {
      console.log(key)
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
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
          width: '25%',
          editable: true,
        },
        {
          title: 'Professor',
          dataIndex: 'age',
          width: '15%',
          editable: true,
        },
        {
          title: 'Fees',
          dataIndex: 'address',
          width: '20%',
          editable: true,
        },
        {
            title: 'Time',
            dataIndex: 'time',
            width: '10%',
            editable: true,
          },
          {
            title: 'Day',
            dataIndex: 'day',
            width: '10%',
            editable: true,
          },
        {
          title: 'operation',
          dataIndex: 'operation',
          render: (_, record) => {
            const editable = isEditing(record);
            return editable && user ? (
              <span>
                <a
                  href="javascript:;"
                  onClick={() => save(record.key)}
                  style={{
                    marginRight: 8,
                  }}
                >
                  Save
                </a>
                <Popconfirm title="Sure to Cancel?" onConfirm={cancel}>
                  <a>Cancel</a>
                </Popconfirm>
              </span>
            ) : (
              <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                Edit
              </Typography.Link>
            );
          },
        },
        {
          title: 'Delete',
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
                  <a  onClick={() => deleteRow(record.key)} style={{color: 'red'}}>Confirm , you want to delete?</a>
              </span>
            ) : (
              <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                Delete
              </Typography.Link>
            );
          },
        },
      ];
      async function createContact() {
        const data = {
          body: {
            name: formState.name,
            phone: formState.phone
          }
        };
        const apiData = await API.post('formapi', '/contact', data);
        console.log({ apiData });
      }
      async function getContact() {
        const apiData = await API.get('formapi', '/contact', data);
        console.log({ apiData });
      }
      async function getContacts(name, id) {
        name = "hgyt"
        // id = "0vcvjnr38jkkl30gquy"
        const data = {
          body: {
            // id: id,
            name: name
          }
        };
        const apiData = await API.get('formapi', '/contact', data);
        console.log({ apiData });
      }
      const formState = { phone: '', name: '' };
      function updateFormState(key, value) {
        formState[key] = value;
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
          <Button onClick={addRow}>Add</Button>
          <input placeholder="phone" onChange={e => updateFormState('phone', e.target.value)} />
          <input placeholder="name" onChange={e => updateFormState('name', e.target.value)} />
          <button onClick={createContact}>Create New Contact</button>
          <button onClick={getContacts}>Get Contact</button>
            <Form form={form} component={false}>
              <Table
                components={{
                  body: {
                    cell: EditableCell,
                  },
                }}
                bordered
                dataSource={data}
                columns={mergedColumns}
                rowClassName="editable-row"
                pagination={{
                  onChange: cancel,
                }}
              />
            </Form>
            </div>
          );
        };

export default EditableTable;
