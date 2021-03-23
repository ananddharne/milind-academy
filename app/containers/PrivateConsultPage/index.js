import React, { useEffect } from 'react';
import { Form, Row, Checkbox, Input, Button, Col, message } from 'antd'
import "./index.css"

export default function PrivateConsultPage() {

  return (
    <Row type="flex" justify="center" align="middle"
      style={{
        padding: '5%',
        fontSize: '140%'
      }}
    >
      <Col>
        <p>
          We conduct online exams for Engineering degree & Engineering diploma based on past papers and important questions. The papers are checked and result is sent back to the students.The students can have a discussion with our lecturers about their performance
          We solve doubts of students and clear their basic concepts
</p>
        <p>
          We solve tutorials given in the college along with discussion.
          Paid career consultation
</p>
        <p>
          We give career guidance to the students .This is in connection with Gate exam,MPSC exam,GRE exam and other career opportunities.
          Admission Councilling
          We do councilling for students and help them for school & college admissions
  </p>
      </Col>
    </Row>
  );
}
