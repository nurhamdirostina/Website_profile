import React from 'react';
import { Layout, Menu, Button, Row, Col} from 'antd';

import './style.css';
import aboutImg from '../../img/about.jpg';

const {Content} = Layout;

function About() {
    return (
        <Layout className="about component__space">
            <Content className="container">
                <Row>
                    <Col xs={14} sm={16} md={17} lg={8} xl={8} offset={2}>
                        <img src={aboutImg} alt="" className="about__img" />
                    </Col>
                    <Col xs={19} sm={20} md={20} lg={12} xl={11} offset={2} >
                        <h1 className="about__heading">
                            About Me
                        </h1>
                            <p className=" p__color">
                                hello, my name is Nurhamdi Rostina, usually called Tina. 
                                I was born in Bandung on November 3, 2004.Now I am studying at SMKN 11 Bandung with a competency in Software Engineering skills, 
                                and I will graduate in 2023.
                            </p>
                            <p className=" p__color left">
                                I'm a web developer, although I'm not good at it, but I always try so that I can and of course want to learn.<br/>
                                In the world of work, I can work well in a team and I can accept criticism, 
                                suggestions and opinions from others. Because of my principles, 
                                everyone has the rights they have. Especially the right to an opinion.
                            </p>
                                {/* <p className=" p__color">
                                I am a person who can make decisions quickly and accurately, even in critical situations.
                                For me, every job is important. Doing it carefully and as 
                                much as possible is a form of my responsibility.
                            </p> */}
                            <Button>
                                <a href="https://drive.google.com/file/d/1HVg5_EcsxJmQ7pfePWgDW1u6WpV2qlCs/view?usp=drivesdk">Download CV</a>
                            </Button>
                        </Col>
                    </Row>
            </Content>
        </Layout>
    )
}

export default About;