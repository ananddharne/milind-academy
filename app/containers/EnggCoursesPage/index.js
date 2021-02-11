import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Courses from 'components/Courses';
import {Card} from 'antd'
import "./index.css"
import civil from "./civil.jpg"
import mechanical from "./mechanical-engg.jpg"
import electrical from "./electrical-engg.jpg"
import computer from "./computer-engg.jpg"





export default function EnggCoursesPage() {

  const { Meta } = Card;
  
  return (
      <div className="gallery-grid">
    <Card
    hoverable
    style={{ width: 275 }}
    cover={<img alt="example" src={civil} />}
  >
    <Meta title="Civil Engineering" description="civil" />
  </Card>
  <Card
    hoverable
    style={{ width: 275 }}
    cover={<img alt="example" src={mechanical} />}
  >
    <Meta title="Mechanical Engineering" description="Mechanical branchadasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdas" />
  </Card>
  <Card
    hoverable
    style={{ width: 275 }}
    cover={<img alt="example" src={electrical} />}
  >
    <Meta title="" description="www.instagram.com" />
  </Card>
  <Card
    hoverable
    style={{ width: 275 }}
    cover={<img alt="example" src={mechanical} />}
  >
    <Meta title="Production Engineering" description="Production Engineering" />
  </Card>
  <Card
    hoverable
    style={{ width: 275 }}
    cover={<img alt="example" src={computer} />}
  >
    <Meta title="Computer/IT Engineering" description="Computer/IT Engineering" />
  </Card>
  </div>
  );
}
