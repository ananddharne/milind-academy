import React, { useEffect } from 'react';
import { Form, Row, Checkbox, Input, Button, Col, message } from 'antd'
import "./index.css"
import { Collapse} from 'antd'
import {
       CaretRightOutlined
      } from "@ant-design/icons";
import "./index.css"

const { Panel } = Collapse;

export default function PrivateConsultPage() {

  return (
//     <Row type="flex" justify="center" align="middle"
//       style={{
//         padding: '5%',
//         fontSize: '140%'
//       }}
//     >
//       <Col>
//         <p>
//           We conduct online exams for Engineering degree & Engineering diploma based on past papers and important questions. The papers are checked and result is sent back to the students.The students can have a discussion with our lecturers about their performance
//           We solve doubts of students and clear their basic concepts
// </p>
//         <p>
//           We solve tutorials given in the college along with discussion.
//           Paid career consultation
// </p>
//         <p>
//           We give career guidance to the students .This is in connection with Gate exam,MPSC exam,GRE exam and other career opportunities.
//           Admission Councilling
//           We do councilling for students and help them for school & college admissions
//   </p>
//       </Col>
//     </Row>

<Collapse
accordion
bordered={false}
defaultActiveKey={['1', '2', '3', '4']}
expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
className="site-collapse-custom-collapse"
>
<Panel showArrow={true} header="Paid Exams" key="1" className="site-collapse-custom-panel">
  <p>
  We conduct online exams for Engineering degree & Engineering diploma .The papers are checked and result is sent back to the students.The students can have a discussion with our lecturers about their performance
  </p>
</Panel>
<Panel header="Paid doubts" key="2" className="site-collapse-custom-panel">
  <p>
  We solve doubts of students and clear their basic concepts
The student can contact us and solve the doubts.
  </p>
</Panel>
<Panel header="Career Consultation" key="3" className="site-collapse-custom-panel">
  <p>We give career guidance to the students .This is in connection with Gate exam,MPSC exam,GRE exam and other career opportunities.</p>
</Panel>
<Panel header="Admission Counselling" key="4" className="site-collapse-custom-panel">
  <p>We do counselling for students and help them for school & college admissions </p>
</Panel>
</Collapse>
  );
}
