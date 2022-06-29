import React from 'react';
import { Layout, Menu, Col, Row } from 'antd';
import { Link, animateScroll as Scroll } from 'react-scroll';

import './style.css';

const { Header, Content} = Layout;

function Home() {
    return (
        <Layout className="layout">
            <div className="home__bg">
                 <Header className="header"
                 style={{
                    position: 'fixed',
                    zIndex: 1,
                    width: '100%',
                  }}>
                 <Row>
                <Col span={12} offset={1}>
                    <img src="https://nurhamdirostina.github.io/profile/user.png" alt="logo" className="logo" />
                </Col>

                <Col span={8}>
                    <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="home">
                        <Link activeClass="active" to="layout" spy={true} smooth={true} offset={-50} duration={500} /> Home
                    </Menu.Item>
                    <Menu.Item key="about">
                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} /> About
                    </Menu.Item>
                    <Menu.Item key="portofolio">
                        <Link activeClass="active" to="portofolio" spy={true} smooth={true} offset={-50} duration={500} /> Portofolio
                    </Menu.Item>
                    <Menu.Item key="contact">
                        <Link activeClass="active" to="footer" spy={true} smooth={true} offset={-50} duration={500} /> Contact
                    </Menu.Item>
                    </Menu>
                </Col>
                </Row>
                </Header>
                <Content className=" container home__content" >
                    <div className="text">
                        <h1 className="home__text pz__10">
                            WELCOME TO MY WEBSITE 
                        </h1>
                        <h2 className="home__text pz__10">
                           Hi, I'm Nurhamdi Rostina
                        </h2>
                        <h3 className="home__text sweet pz__10">
                            I am a student of SMKN 11 Bandung 
                        </h3>
                        <h4 className="home__text pz__10">
                          RPL expertise competency
                        </h4>
                    </div>
                </Content>
            </div>
        </Layout>
    )
}

export default Home
