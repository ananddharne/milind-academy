import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Courses from 'components/Courses';
import {Card, Button} from 'antd'
import "./index.css"
import civil from "./civil.jpg"
import mechanical from "./mechanical-engg.jpg"
import electrical from "./electrical-engg.jpg"
import computer from "./computer-engg.jpg"
import SubjectsModal from 'components/SubjectsModal';
import useModal from 'components/SubjectsModal/useModal';



export default function EnggCoursesPage() {
  const { Meta } = Card;
  const { isShowing, toggle } = useModal();
  const civilSubjectsFE = [
    'Engineering Mechanics', 'M1', 'M2'
  ];
  const civilSubjectsSE = [
    'M3', 'MECHANICS OF STRUCTURES', 'FLUID MECHANICS'
  ];

  const civilSubjectsTE = [
    'STRUCTURAL ANALYSIS 2', 'FLUID MECHANICS 2', 'STRUCTURAL DESIGN AND DRAWING 1', 'STRUCTURAL DESIGN AND DRAWING 2'
  ];

  const civilSubjectsBE = [
    'STRUCTURAL DESIGN AND DRAWING 3'
  ];

  return (
      <div className="gallery-grid">
    <Card
    hoverable
    style={{ width: 275 }}
    cover={<img alt="example" src={civil} />}
  >
    <Meta title="Civil Engineering" description="" />
    <Button onClick={toggle} style={{marginTop: '5%', fontWeight: 'bold'}}>View Subjects</Button>
    <SubjectsModal FE={civilSubjectsFE} SE={civilSubjectsSE} TE={civilSubjectsTE} BE={civilSubjectsBE} isShowing={isShowing} hide={toggle}/>
  </Card>
  <Card
    hoverable
    style={{ width: 275 }}
    cover={<img alt="example" src={mechanical} />}
  >
    <Meta title="Mechanical Engineering" description="" />
    <Button style={{marginTop: '5%' , fontWeight: 'bold'}}>View Subjects</Button>
  </Card>
  <Card
    hoverable
    style={{ width: 275 }}
    cover={<img alt="example" src={electrical} />}
  >
    <Meta title="Electrical Engineering" description="" />
    <Button style={{marginTop: '5%', fontWeight: 'bold'}}>View Subjects</Button>
  </Card>
  <Card
    hoverable
    style={{ width: 275 }}
    cover={<img alt="example" src={mechanical} />}
  >
    <Meta title="Production Engineering" description="" />
    <Button style={{marginTop: '5%', fontWeight: 'bold'}}>View Subjects</Button>

  </Card>
  <Card
    hoverable
    style={{ width: 275 }}
    cover={<img alt="example" src={computer} />}
  >
    <Meta title="Computer/IT Engineering" description="" />
    <Button style={{marginTop: '5%', fontWeight: 'bold'}}>View Subjects</Button>

  </Card>
  </div>
  );
}
