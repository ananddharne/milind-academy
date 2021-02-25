import React, { useEffect, useState, useRef } from 'react';
import { Card, Button, Modal, Typography, List, Tabs, Avatar, Upload, message, Icon, Popconfirm, Spin } from 'antd'
import "./index.css"
import { Auth, Hub, Storage } from "aws-amplify";
import { FileImageFilled, FileImageOutlined, DeleteOutlined, InboxOutlined, UploadOutlined, CloudDownloadOutlined, LinkOutlined, PaperClipOutlined } from '@ant-design/icons';
import 'ant-design-pro/dist/ant-design-pro.css';
import CountDown from 'ant-design-pro/lib/CountDown';
var fileDownload = require('js-file-download');
import {isMobile} from 'react-device-detect';


const { Dragger } = Upload;





export default function DownloadsPage() {

    const [user, setUser] = useState(null);

    const [files, setFiles] = useState([])

    const inputRef = useRef(null)

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [current, setCurrent] = useState(null);

    const [urls, setUrl] = useState(null);


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
        setFiles(result)
    }

    const downloadS3 = async (itemKey) => {
        const result = await Storage.get(itemKey, { download: true });
        // result.Body.text().then(string => {
            // alert(urls)
            downloadBlob(result.Body, itemKey);
            // downloadBlob2(result.Body, itemKey)
    //         console.log(result)
    //         var reader = new FileReader();
    // reader.onload = function(e) {
    //    var bdata = btoa(reader.result);
    //    var datauri = 'data:' + result.Body.type + ';base64,' + bdata;
    //     open(datauri, itemKey);
    // //    const newWindow = setTimeout(function() {
    // //        newWindow.document.title = itemKey;
    // //    }, 10);
    // };
    // reader.readAsBinaryString(result.Body);



    // var FileSaver = require('file-saver');
    // var blob = new Blob([result.Body], {type: result.Body.type});
    // FileSaver.saveAs(blob, itemKey);
        // })
    }

    const deleteFile = async (key) => {
        await Storage.remove(key)
        message.success('File Deleted successfully!');
        listS3Files()
    }

    function downloadBlob(blob, filename) {
        const url = URL.createObjectURL(blob);
        // setUrl(url)
        // const b = `<a href=${url}></a>`
        if(screen.width > 500) {
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
            // alert(url)
            // prompt(url)
            a.click();
            message.success('File Downloaded successfully!');
            return a;
        } else {
            // var blobUrl = URL.createObjectURL(blob);
            // setUrl(blobUrl)
            // fileDownload(blob, filename)
            alert('mobile')
            downloadBlob2(blob)
            // location.replace(blobUrl)

        }
       
    }

    function downloadBlob2(blob, name) {
        // var blobUrl = URL.createObjectURL(blob);
        // setUrl(blobUrl)
    var reader = new FileReader();
    reader.onload = function(e) {
       var bdata = btoa(reader.result);
       var datauri = 'data:' + blob.type + ';base64,' + bdata;
        open(datauri, itemKey);
       const newWindow = setTimeout(function() {
           newWindow.document.title = name;
       }, 10);
    };
    reader.readAsBinaryString(blob);

        // showModal()
        // alert(blobUrl)
        // open(blobUrl, '_blank');
        // location.replace(blobUrl)
    }


    function cancel(e) {
        console.log(e);
        // message.error('Click on No');
    }

    const onChanges = async (info) => {
        try {
            console.log(info)
            await Storage.put(info.name, info,
            )
        message.success('File Uploaded successfully!');
        } catch (e) {
            console.log(e)
        message.error('File Upload failed! Please upload a valid file');
        }
       
        listS3Files()
        // setFiles(files => [...files, info])
        // location.reload()
        // console.log('S3 Object key', key)
    }

    const triggerInputClick = (e) => {
       const elem = document.getElementsByClassName('input-file')
       elem[0].click()
    }

    // const props = {
    //     name: 'file',
    //     multiple: false,
    //     // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    //     async onChange(info) {
    //         console.log(info)
    //       const { status } = info.file;
    //       if (status !== 'uploading') {
    //         console.log(info.file, info.fileList);
    //       }
    //       if (status === 'done') {
    //         // await Storage.put(info.file.name, info.file,
    //         //     )
    //         //     setFiles(files => [...files, info.file])
    //         message.success(`${info.file.name} file uploaded successfully.`);
    //         // location.reload()
    //         // onChange(info.file.name, info.file)
    //       } else if (status === 'error') {
    //           console.log(info)
    //         message.error(`${info.file.originFileObj.name} file upload failed.`);
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
        // showModal()
    }, files);
    return (
        <div style={{ textAlign: 'center' }}>

            <Modal title="Basic Modal" visible={isModalVisible}
                // onOk={handleOk} 
                onCancel={handleCancel}
                footer={null}
                closable={false}
            >
                {/* <span>{urls}</span> */}
                <a href={urls}>ju</a>
                {/* <CountDown style={{ fontSize: 20 }} target={targetTime} /> */}

            </Modal>
           {
               files.length?
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
                    <List.Item className="download-list-item" id="down-list-itm">
                        <List.Item.Meta
                            title={
                            <div>
                                   
                                <a 
                                className={'list-item-name'}
                                id={'list-itm-name'}
                                // style={{ fontSize: '125%', color: 'black' }} 
                                onClick={() => downloadS3(item.key)}>{
                                     <PaperClipOutlined style={{ fontSize: '130%', marginRight: '1%', color:'black' }} />
                                } {item.key || item.name}
                                </a> 
                                   
                                </div>
                        }

                        // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                        <a ></a>
                        <div onClick={() => downloadS3(item.key)} style={{cursor: 'pointer', margin: "1.5%"}}>
                                    <CloudDownloadOutlined className="download-icon" style={{  }}/>
                         </div>
                        { user ?
                            <Popconfirm
                                title="Are you sure to delete this file?"
                                onConfirm={() => deleteFile(item.key)}
                                onCancel={cancel}
                                okText="Yes"
                                cancelText="No"
                            >
                                <DeleteOutlined className="delete-icon"/>
                            </Popconfirm> : null

                        }

                    </List.Item>
                )}
            /> : <Spin/>
                    }

            {
                user ?
                <div>
                    <Button onClick={triggerInputClick}>
                    <UploadOutlined style={{ fontSize: '135%', color: '#1890ff', cursor: 'pointer' }}>
                       </UploadOutlined>
                       Upload file
                    </Button>
                    
                    <input
                     id="input-file"
                     className="input-file"
                     ref={inputRef}
                     style={{display: 'none'}}
                     type='file'
                     onClick={() => {}}
                     onChange={(e) => onChanges(e.target.files[0])}
                 />
                    </div>
                    
                    // <Dragger 
                //     name={'file'}
                //     onChange={(e) => onChanges(e)}
                //     >
                //     <p className="ant-upload-drag-icon">
                //       <InboxOutlined />
                //     </p>
                //     <p className="ant-upload-text">Click or drag file to this area to upload</p>
                //     <p className="ant-upload-hint">
                //       Support for a single upload only; Strictly prohibit from uploading company data or other
                //       band files
                //     </p>
                //   </Dragger> 
                     : null

            }
        </div>
    );
}
