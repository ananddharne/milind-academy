import React, { useEffect, useState, useRef } from 'react';
import { Card, Button, Modal, Form, Input, InputNumber, Typography, List, Tabs, Avatar, Upload, message, Icon, Popconfirm, Spin } from 'antd'
import "./index.css"
import { Auth, Storage } from "aws-amplify";
import { DeleteOutlined, UploadOutlined, CloudDownloadOutlined, PaperClipOutlined } from '@ant-design/icons';
import 'ant-design-pro/dist/ant-design-pro.css';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function DownloadsPage() {

    const [user, setUser] = useState(null);
    const [adminUser, setAdminUser] = useState(false);
    const [files, setFiles] = useState([])

    const [urlBlob, setUrlBlob] = useState(null)
    const [pageCount, setPageCount] = useState([])
    const [currentPage, setCurrentPage] = useState(1)


    const [isTimerPlaying, setIsTimerPlaying] = useState(false)

    const inputRef = useRef(null)

    const [cancelBtnModalState, setCancelState] = useState(true)

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [itemKey, setItemKey] = useState(null);
    const [key, setKey] = useState(0);

    const [form] = Form.useForm();

    const [current, setCurrent] = useState(null);

    const [urls, setUrl] = useState(null);

    const targetTime = new Date().getTime() + 45000;


    const showModal = (itemKey) => {
        setItemKey(itemKey)
        setIsModalVisible(true);
        setIsTimerPlaying(true)
        setCancelState(true)
    };



    const listS3Files = async () => {
        const result = await Storage.list('') // for listing ALL files without prefix, pass '' instead
        setFiles(result)
    }

    const downloadS3 = async (itemKey) => {
        console.log(itemKey)
        setCurrentPage(1)
        const result = await Storage.get(itemKey, { download: true });
        setItemKey(itemKey)
        window.scrollTo({ top: 0, behavior: 'smooth' });
        downloadBlob(result.Body, itemKey);
    }

    const deleteFile = async (key) => {
        await Storage.remove(key)
        message.success('File Deleted successfully!');
        listS3Files()
    }

    const convertIntToArray = async (count) => {
        const array = []
        for (let i = 1; i <= count; i++) {
            array.push(i)
        }
        setPageCount(array)
    }


    function downloadBlob(blob, filename) {
        const url = URL.createObjectURL(blob);
        console.log('url is ' + url)
        setUrlBlob(url)
        var reader = new FileReader();
        reader.readAsBinaryString(blob);
        reader.onloadend = function () {
            var count = reader.result.match(/\/Type[\s]*\/Page[^s]/g).length;
            convertIntToArray(count)
        }

        // if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        //     || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        //     downloadBlob2(blob, filename)

        // } else {
        //     const a = document.createElement('a');
        //     a.href = url;
        //     a.download = filename || 'download';
        //     const clickHandler = () => {
        //         setTimeout(() => {
        //             URL.revokeObjectURL(url);
        //             a.removeEventListener('click', clickHandler);
        //         }, 150);
        //     };
        //     // a.addEventListener('click', clickHandler, false);
        //     //  turn on to download
        //     // a.click();
        //     // message.success('File Downloaded successfully!');
        //     return a;

        // }

    }

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
    }


    function cancel(e) {
        console.log(e);
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
    }

    const triggerInputClick = (e) => {
        const elem = document.getElementsByClassName('input-file')
        elem[0].click()
    }

    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const nextPage = () => {
        if (currentPage < pageCount.length) {
            setCurrentPage(currentPage + 1)
        }
    }

    function getUser() {
        return Auth.currentAuthenticatedUser()
            .then(userData => {
                userData;
                setUser(userData);
                if (userData.attributes.email === "milindacademy13@gmail.com") setAdminUser(true)
            })
            .catch(() => console.log("Not signed in"));
    }

    useEffect(() => {
        getUser();
        listS3Files()
    }, files);
    return (
        <div style={{ textAlign: 'center' }}>
            <Document file={urlBlob}
             onContextMenu={(e) => e.preventDefault()}
            >
                <div style={{ marginTop: '5%' }}>
                    <Button onClick={prevPage}> Previous</Button>
                    <Button onClick={nextPage}>Next</Button>
                </div>

                <div style={{marginTop: '2.5%', fontWeight: 'bold'}}>{itemKey}</div>
                {
                    <Page pageNumber={currentPage} />
                }
                <div> Page {currentPage} of {pageCount.length} </div>
            </Document>
            {
                files.length ?
                    <List
                        itemLayout="horizontal"
                        dataSource={files}
                        style={{ margin: '2.5%' }}
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
                                                onClick={() => user ? downloadS3(item.key) : window.location.replace('/login')}>{
                                                    <PaperClipOutlined style={{ fontSize: '130%', marginRight: '1%', color: 'black' }} />
                                                } {item.key || item.name}
                                            </a>

                                        </div>
                                    }

                                />
                                <a ></a>
                                <div onClick={() => user ? downloadS3(item.key) : showModal(item.key)} style={{ cursor: 'pointer', margin: "1.5%" }}>
                                    {/* <CloudDownloadOutlined className="download-icon" style={{}} /> */}
                                </div>


                                { adminUser ?
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
                    /> : <Spin size="large" style={{ marginTop: '10%', marginLeft: '10%', paddingBottom: '30%' }} />
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

                    : null

            }
        </div>
    );
}


