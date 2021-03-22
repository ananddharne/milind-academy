import React, { useEffect, useState, useRef } from 'react';
import { Card, Button, Modal, Form, Input, InputNumber, Typography, List, Tabs, Avatar, Upload, message, Icon, Popconfirm, Spin } from 'antd'
import "./index.css"
import { Auth, Hub, Storage } from "aws-amplify";
import { FileImageFilled, FileImageOutlined, DeleteOutlined, InboxOutlined, UploadOutlined, CloudDownloadOutlined, LinkOutlined, PaperClipOutlined } from '@ant-design/icons';
import 'ant-design-pro/dist/ant-design-pro.css';
import CountDown from 'ant-design-pro/lib/CountDown';
var fileDownload = require('js-file-download');
import { isMobile } from 'react-device-detect';
import { set } from 'lodash';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { ToastContainer, toast } from 'react-toastify';
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
import axios from 'axios';
const { Dragger } = Upload;





export default function DownloadsPage() {

    const [user, setUser] = useState(null);
    const [adminUser, setAdminUser] = useState(false);


    const [files, setFiles] = useState([])

    const [isTimerPlaying, setIsTimerPlaying] = useState(false)

    const inputRef = useRef(null)

    const [cancelBtnModalState, setCancelState] = useState(true)

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [itemKey, setItemKey] = useState(null);
    const [key, setKey] = useState(0);

    const [form] = Form.useForm();

    const closeAfter7 = () => toast("Will close after 7s", { autoClose: 7000 });



    const [current, setCurrent] = useState(null);

    const [urls, setUrl] = useState(null);


    const targetTime = new Date().getTime() + 45000;


    const showModal = (itemKey) => {
        setItemKey(itemKey)
        setIsModalVisible(true);
        setIsTimerPlaying(true)
        // toast("Will close after 15s", { autoClose: 15000 })
        setCancelState(true)

        // downloadS3(itemKey)
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        form.resetFields()
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
        setItemKey(itemKey)
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

    const layout = {
        labelCol: {
            span: 10,
        },
        wrapperCol: {
            span: 10,
        },
    };
    const validateMessages = {
        required: 'This field is required!',
        types: {
            email: 'email is not a valid email!',
            phone: 'phone is not a valid number!',
        },
    };

    const onFinish = (values) => {
        downloadS3(itemKey)
        const data = {
            name: values.user.name,
            email: values.user.email,
            degree: values.user.subject,
            subject: values.user.subject,
            phone: values.user.phone
          }
          console.log(data)
          var xhr = new XMLHttpRequest();
          xhr.open('POST', ' https://hz03bsqszl.execute-api.us-east-1.amazonaws.com/default/SendEmailMilindAcademy', true);
          xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
          xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      
          // Send the collected data as JSON
          xhr.send(JSON.stringify(data));
      
          // Callback function
          xhr.onloadend = response => {
            if (response.target.status === 200) {
              // The form submission was successful
            }
          };
        setIsModalVisible(false)
        form.resetFields();
        console.log(values);
    };

    function downloadBlob(blob, filename) {
        const url = URL.createObjectURL(blob);
        // setUrl(url)
        // const b = `<a href=${url}></a>`
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
            downloadBlob2(blob, filename)

        } else {
            // var blobUrl = URL.createObjectURL(blob);
            // setUrl(blobUrl)
            // fileDownload(blob, filename)
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

            // location.replace(blobUrl)

        }

    }

    // const handleAttachment = (blob, name) => {

    //     downloadBlob(blob, name)

    // }

    function downloadBlob2(blob, name) {
        var blobUrl = URL.createObjectURL(blob);
        setUrl(blobUrl)
        var reader = new FileReader();
        reader.onload = function (e) {
            var bdata = btoa(reader.result);
            var datauri = 'data:' + blob.type + ';base64,' + bdata;
            open(datauri, name);
            const newWindow = setTimeout(function () {
                newWindow.document.title = name;
            }, 10);
        };
        reader.readAsBinaryString(blob);
        // showModal(blob, name)


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
                if(userData.attributes.email === "milindacademy13@gmail.com") setAdminUser(true)
            })
            .catch(() => console.log("Not signed in"));
    }

    useEffect(() => {
        getUser();
        listS3Files()
        // const options = {
        //     domain: "sessionm.testrail.com",
        //     username: "vprysiazhniuk+testci@sessionm.com",
        //     password: "yKsihn6tQJSSEfYgS8OM-icN0FHOMfy8.33V0taPP",
        //   };
        // // showModal()
        // axios.get('https://sessionm.testrail.com/index.php?/api/v2/get_case/47535', {
        //     auth: {
        //       username: options.username,
        //       password: options.password
        //     }
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   })
    }, files);
    return (
        <div style={{ textAlign: 'center' }}>
{
       !user ?
            <Modal 
            title={
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div> Enter your contact details... </div>
                     <CountdownCircleTimer
    isPlaying={isTimerPlaying}
    style={{marginLeft: '90%'}}
    key={key}
    duration={30}
    size={30}
    strokeWidth={1.5}
     onComplete={() => {
               setCancelState(false)
               setKey(prevKey => prevKey + 1)
               setIsTimerPlaying(false)
              }}
    trailColor={'white'}
    trailStrokeWidth={1.5}
    // strokeLinecap={square}
    colors={[
      ['#efefef', 0.33],
      ['#cdcdcd', 0.33],
      ['#cdcdcd ', 0.33],
    ]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
                </div>
            } visible={isModalVisible}
             okButtonProps = { {style: { display: 'none' } }}
                // onOk={handleOk} 
                cancelButtonProps = {
                {disabled: cancelBtnModalState} 
                }
                onCancel={handleCancel}
                // footer={null}
                maskClosable={false}
                closable={false}
            >
                
                {<Form form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item
                        name={['user', 'name']}
                        // label={"Name"}
                            rules={[{ required: true, message: 'Please input your Name!' }]}
                   
                    >
                        <Input placeholder="Enter your name..." />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'email']}
                        // label={"Email"}
                        rules={[
                            {
                                type: 'email',
                                required: true
                            },
                        ]}
                    >
                        <Input placeholder="Enter your email..." />
                    </Form.Item>
                    <Form.Item
                         name={['user', 'phone']}
                        // label={"Phone"}
                        rules={[
                            {
                              required: true,
                              message: 'Phone is required!',
                            },
                            ({ getFieldValue }) => ({
                              validator(_, value) {
                                var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                                if(value.match(phoneno)) {
                                    return Promise.resolve('all good')
                                } else {
                                    return Promise.reject('Invalid phone number');
                                }
                                
                                

                              },
                            }),
                          ]}
                    >
                        <Input placeholder="Enter your phone number..." />
                    </Form.Item>
                    <Form.Item name={['user', 'subject']} 
                    // label="Subject and Course"
                    >
                        <Input placeholder="Subject and Course" />
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']}>
                        <Input.TextArea placeholder="Additional info" />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
                        <Button type="primary" htmlType="submit">
                        <PaperClipOutlined style={{ fontSize: '120%' }} />
                            Download attachment
                        </Button>
                    </Form.Item>
                </Form>
                }
            </Modal> : null
}

            {
                files.length ?
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

                                            {/* <a
                                                className={'list-item-name'}
                                                id={'list-itm-name'}
                                                // style={{ fontSize: '125%', color: 'black' }} 
                                                onClick={() => user? downloadS3(item.key) : showModal(item.key)}>{
                                                    <PaperClipOutlined style={{ fontSize: '130%', marginRight: '1%', color: 'black' }} />
                                                } {item.key || item.name}
                                            </a> */}

                                            <a
                                                className={'list-item-name'}
                                                id={'list-itm-name'}
                                                // style={{ fontSize: '125%', color: 'black' }} 
                                                onClick={() => user? downloadS3(item.key) : window.location.replace('/login')}>{
                                                    <PaperClipOutlined style={{ fontSize: '130%', marginRight: '1%', color: 'black' }} />
                                                } {item.key || item.name}
                                            </a>

                                        </div>
                                    }

                                // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                />
                                <a ></a>
                                <div onClick={ () => user? downloadS3(item.key) : showModal(item.key)} style={{ cursor: 'pointer', margin: "1.5%" }}>
                                    <CloudDownloadOutlined className="download-icon" style={{}} />
                                </div>


                                { adminUser === "milindacademy13@gmail.com" ?
                                    <Popconfirm
                                        title="Are you sure to delete this file?"
                                        onConfirm={() => deleteFile(item.key)}
                                        onCancel={cancel}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <DeleteOutlined className="delete-icon" />
                                    </Popconfirm> : null

                                }

                            </List.Item>
                        )}
                    /> : <Spin size="large" style={{ marginTop: '10%', marginLeft: '10%', paddingBottom: '30%'}}/>
            }

            {
                adminUser ?
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
                            style={{ display: 'none' }}
                            type='file'
                            onClick={() => { }}
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


