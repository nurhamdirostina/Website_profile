import React from 'react';
import { Layout, Menu, Col, Row } from 'antd';
import {CheckCircleTwoTone} from '@ant-design/icons';

import './style.css'

function Skill(){
    return(
        <div className="skill component__space">
            <div className="container">
                <Row>
                    <Col xs={14} sm={16} md={17} lg={6} xl={6} offset={2}>
                        <div className="box">
                            <div className="icon">
                              <img src="https://nurhamdirostina.github.io/profile/competence.png" alt="icon" />
                            </div>
                            <div className="padding-top">
                                <h1>Skill</h1>
                                <p className="p__color">
                                <CheckCircleTwoTone /> HTML <br/>
                                <CheckCircleTwoTone /> Javascript <br/>
                                <CheckCircleTwoTone /> PHP <br/>
                                <CheckCircleTwoTone /> Java <br/>
                                <CheckCircleTwoTone /> Git <br/>
                                <CheckCircleTwoTone /> React
                                </p>
                            </div>
                        </div>
                        </Col>

                    <Col xs={14} sm={16} md={17} lg={6} xl={6} offset={2}>
                        <div className="box">
                            <div className="icon">
                              <img src="https://nurhamdirostina.github.io/profile/education.png" alt="icon" />
                            </div>
                            <div className="padding-top">
                                <h1>Education</h1>
                                <p className="p__color">
                                    class: XI <br/>
                                    SMK Negeri 11 Bandung <br/><br/><br/>
                                    skill competency <br/> Software Engineering
                                </p>    
                            </div>
                        </div>
                    </Col>

                    <Col xs={14} sm={16} md={17} lg={6} xl={6} offset={2}>
                        <div className="box">
                            <div className="icon">
                              <img src="https://nurhamdirostina.github.io/profile/experience.png" alt="icon" />
                            </div>
                            <div className="padding-top">
                                <h1>Experience</h1>
                                <p className="p__color">
                                    PT. Clodeo Indonesia Jaya <br/>
                                    Internship, Front-end Developer <br/><br/>
                                    • April - Juni 2022
                                </p>
                            </div>
                        </div>
                    </Col>

                </Row>
            </div>
        </div>
    );
}

export default Skill;