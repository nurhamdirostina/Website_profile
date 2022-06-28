import React from 'react';
import { Layout, Menu, Col, Row } from 'antd';
import {CheckCircleTwoTone} from '@ant-design/icons';

import './style.css'

function Skill(){
    return(
        <div className="skill component__space">
            <div className="container">
                <Row>
                    <Col span={6} offset={2}>
                        <div className="box">
                            <div className="icon">
                              <img src="https://nurhamdirostina.github.io/Website_profile/competence.png" alt="icon" />
                            </div>
                            <div className="padding-top">
                                <h1>Skill</h1>
                                <p className="p__color">
                                <CheckCircleTwoTone /> HTML <br/>
                                <CheckCircleTwoTone /> Javascript <br/>
                                <CheckCircleTwoTone /> PHP <br/>
                                <CheckCircleTwoTone /> Java <br/>
                                <CheckCircleTwoTone /> Git
                                </p>
                            </div>
                        </div>
                        </Col>

                    <Col span={6} offset={1}>
                        <div className="box">
                            <div className="icon">
                              <img src="https://nurhamdirostina.github.io/Website_profile/education.png" alt="icon" />
                            </div>
                            <div className="padding-top">
                                <h1>Education</h1>
                                <p className="p__color">
                                    class: XI <br/>
                                    SMK Negeri 11 Bandung <br/><br/>
                                    skill competency <br/> Software Engineering
                                </p>    
                            </div>
                        </div>
                    </Col>

                    <Col span={6} offset={1}>
                        <div className="box">
                            <div className="icon">
                              <img src="https://nurhamdirostina.github.io/Website_profile/experience.png" alt="icon" />
                            </div>
                            <div className="padding-top">
                                <h1>Experience</h1>
                                <p className="p__color">
                                    PT. Clodeo Indonesia Jaya <br/>
                                    Internship, Front-end Developer • April - Juni 2022
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