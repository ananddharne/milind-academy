import React, { useEffect, useState, useRef } from 'react';
import { Card, Button, Modal, Typography, List, Tabs, Avatar, Upload, message, Icon, Popconfirm } from 'antd'
import "./index.css"
import { Auth, Hub, Storage } from "aws-amplify";
import { FileImageFilled, FileImageTwoTone, DeleteTwoTone, InboxOutlined } from '@ant-design/icons';
import 'ant-design-pro/dist/ant-design-pro.css';
import CountDown from 'ant-design-pro/lib/CountDown';


const { Dragger } = Upload;





export default function DownloadsPage() {

    const [user, setUser] = useState(null);

    const [files, setFiles] = useState([])

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [current, setCurrent] = useState(null);

    const targetTime = new Date().getTime() + 45000;


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };



    const listS3Files = async () => {
        const result = await Storage.list('') // for listing ALL files without prefix, pass '' instead
        console.log(result)
        setFiles(result)
    }

    const downloadS3 = async (itemKey) => {
        const result = await Storage.get(itemKey, { download: true });
        // result.Body.text().then(string => {
            downloadBlob(result.Body, itemKey);
            alert(result.Body)
        // })
    }

    const deleteFile = async (key) => {
        await Storage.remove(key)
        location.reload()
    }

    function downloadBlob(blob, filename) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename || 'download';
        const clickHandler = () => {
            setTimeout(() => {
                URL.revokeObjectURL(url);
                a.removeEventListener('click', clickHandler);
            }, 150);
        };
        a.addEventListener('click', clickHandler, false);
        a.click();
        return a;
    }

    const uploadS3 = async () => {
        const result = await Storage.put('test.txt', 'Hello');
        console.log(result)
    }

    function cancel(e) {
        console.log(e);
        message.error('Click on No');
    }

    // const onChanges = async (name, file) => {
    //     console.log(file)
    //     const { key } = await Storage.put(name, file,
    //     )
    //     setFiles(files => [...files, file])
    //     // location.reload()
    //     console.log('S3 Object key', key)
    // }

    // const props = {
    //     name: 'file',
    //     multiple: false,
    //     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    //     async onChange(info) {
    //         console.log(info)
    //       const { status } = info.file;
    //       if (status !== 'uploading') {
    //         console.log(info.file, info.fileList);
    //       }
    //       if (status === 'done') {
    //         message.success(`${info.file.name} file uploaded successfully.`);
    //         onChanges(info.file.name, info.file.originFileObj)
    //       } else if (status === 'error') {
    //           console.log
    //         message.error(`${info.file.name} file upload failed.`);
    //       }
    //     },
    //   };

    function getUser() {
        return Auth.currentAuthenticatedUser()
            .then(userData => {
                userData;
                setUser(userData);
            })
            .catch(() => console.log("Not signed in"));
    }

    useEffect(() => {
        getUser();
        listS3Files()
        showModal()
    }, files);
    return (
        <div style={{ textAlign: 'center' }}>

            <Modal title="Basic Modal" visible={isModalVisible}
                // onOk={handleOk} 
                onCancel={handleCancel}
                footer={null}
                closable={false}
            >
                <span>{current}</span>
                {/* <CountDown style={{ fontSize: 20 }} target={targetTime} /> */}

            </Modal>
            <List
                itemLayout="horizontal"
                dataSource={files}
                style={{ margin: '5%' }}
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 5,
                }}
                size={"large"}
                renderItem={item => (
                    <List.Item>
                        {/* <img src={FileImageTwoTone}></img>
                         */}
                        <FileImageTwoTone style={{ fontSize: '150%' }} />
                        <List.Item.Meta
                            // avatar={<Avatar icon={<FileImageTwoTone />} />}
                            title={<a style={{ fontSize: '150%' }} onClick={() => downloadS3(item.key)}>{item.key || item.name}</a>}
                        // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                        { user ?
                            <Popconfirm
                                title="Are you sure to delete this file?"
                                onConfirm={() => deleteFile(item.key)}
                                onCancel={cancel}
                                okText="Yes"
                                cancelText="No"
                            >
                                <DeleteTwoTone style={{ fontSize: '150%' }} />
                            </Popconfirm> : null

                        }

                    </List.Item>
                )}
            />

            {
                user ?
                    <input
                        type='file'
                        onChange={(e) => onChange(e.target.files[0])}
                    />
                //     <Dragger {...props}>
                //     <p className="ant-upload-drag-icon">
                //       <InboxOutlined />
                //     </p>
                //     <p className="ant-upload-text">Click or drag file to this area to upload</p>
                //     <p className="ant-upload-hint">
                //       Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                //       band files
                //     </p>
                //   </Dragger> 
                     : null

            }
        </div>
    );
}
