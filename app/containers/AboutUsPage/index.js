import React, { useEffect, useState, useRef } from 'react';
import { Collapse } from 'antd'
import ReviewsPanel from 'components/ReviewsPanel';
import FacultyTable from 'components/FacultyTable';
import "./index.css"
import students1 from "./students1.svg"
import students2 from "./students2.svg"

const { Panel } = Collapse;

const callback = (key) => {
  console.log(key);
}

const text = `
      Today, while we are celebrating 30 years of excellence in teaching and guiding
      students, the alumnae of Milind Academy are spreading knowledge and wisdom
      all over`;

const text1 = ` From conducive eco-system to excellent faculties, from study material to overall
      development of the students, Milind Academy is committed to give best learning
      
      experience to the students`

const text2 = `
      `

export default function AboutUsPage() {
  return (
    <div>
    <div>
    <div className="aboutus-page">
      <div className="about-us-section">
        <div className="about-us-heading">
          About us
        </div>
        <div className="about-us-content">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </div>
      </div>

      <div className="photo-container">
        <img className="img-1" src={students1}>

        </img>

        <img src={students2} className="img-2">

        </img>

      </div>


      <div className="founders-message-section">
        <div className="founder-message-heading">
          Founder's Message
        </div>
        <div className="founder-message-content">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
        </div>

      </div>
      {/* <ReviewsPanel/> */}
      {/* <div className="hana" style={{textAlign: 'center', padding: '4%', fontSize: '140%'}}>
        <p>
        Established in 1991, Milind Academy is the most sought-after brand amongst coaching classes in Pune. So far more than 100000 students have experienced the quality education at our academy, under the guidance of  Professor Milind Darekar.Professor Milind Darekar was a faculty at Government polytechnic as College of Engineering Pune(COEP)
        </p>
        <p>
        Today, while we are celebrating 30 years of excellence in teaching and guiding
students, the alumnae of Milind Academy are spreading knowledge and wisdom

all over.
        </p>
        <p>
        From conducive eco-system to excellent faculties, from study material to overall
development of the students, Milind Academy is committed to give best learning

experience to the students.
        </p>
        <p>
        Enriched with experience and 700 students abroad, the academy also serves the

purposes of study abroad and corporate lingual trainings.
        </p>
    </div> */}

      {
    /* <Collapse
    bordered={false}
    defaultActiveKey={['1', '2', '3']}
    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
    className="site-collapse-custom-collapse"
  >
    <Panel showArrow={true} header="30 years of excellence" key="1" className="site-collapse-custom-panel">
      <p>{text}</p>
    </Panel>
    <Panel header="Commitment to students" key="2" className="site-collapse-custom-panel">
      <p>{text1}</p>
    </Panel>
    <Panel header="Paid Counselling and Study Abroad Consultation" key="3" className="site-collapse-custom-panel">
      <p>Enriched with experience and 700 students abroad, the academy also serves the

purposes of study abroad and corporate lingual trainings. Click <a href="/privateconsultpage">here </a> for more information</p>
    </Panel>
  </Collapse>

    

<ReviewsPanel/> */}

    </div>
      </div>

      <div>
      <FacultyTable style={{marginTop: '2%'}}/>

      </div>
      </div>

  )

}


