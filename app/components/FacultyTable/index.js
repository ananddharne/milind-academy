
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, Input, InputNumber, Popconfirm, Form, Typography, Button, Modal, Spin } from 'antd'
import './index.css'

const dataSource = [
  {
    key: '1',
    name: 'Milind Darekar',
    qualification: "BE [CIVIL], BE [MECH]",
    experience: '30 years',
  },
  {
    key: '2',
    name: 'Mahesh Deo',
    qualification: "MTECH (Thermal)",
    experience: '30 years',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Qualification',
    dataIndex: 'qualification',
    key: 'qualification',
  },
  {
    title: 'Experience',
    dataIndex: 'experience',
    key: 'experience',
  },
  {
    title: 'Subjects',
    dataIndex: 'subjects',
    key: 'subjects',
    render: (_, record) => {
      if(record.name === 'Milind Darekar') {
        return (
          <div classname="subjects-faculty">
          <div>
          Engineering Mechanics
          </div>
            <div>
            SA1
           </div>
           <div>SA2</div>
           <div>SD1</div>
           <div>SD2</div>
           <div>SD3</div>
           <div>Metrix Methods</div>
           <div>SAdvanced Structural Design</div>


          </div>
        
        ) 
      }
      if(record.name === 'Mahesh Deo') {
        return (
          <div classname="subjects-faculty">
          <div>
          Engineering Mechanics
          </div>
           <div>Thermal</div>
           <div>EOY</div>
           <div>SD2</div>
           </div>
        ) 
      }
      
    }
  },
];



 const FacultyTable = () => {
   return <Table id={'faculty-table'} 
   rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' :  'table-row-dark'}
   dataSource={dataSource} columns={columns} />;
 }

export default FacultyTable;
