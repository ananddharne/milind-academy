import React, { useEffect, useState, useRef } from 'react';
import { Card, Button, Modal, Form, Input, InputNumber, Typography, List, Tabs, Avatar, Upload, message, Icon, Popconfirm, Spin } from 'antd'
import ReviewsPanel from 'components/ReviewsPanel';

import "./index.css"




export default function AboutUsPage() {
return (
    <div>
    <div className="hana" style={{textAlign: 'center', padding: '4%', fontSize: '140%'}}>
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
    </div>

<ReviewsPanel/>
</div>

)

}


