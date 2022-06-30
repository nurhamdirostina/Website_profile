import React from 'react';
import { Layout, Card,  Row, Col} from 'antd';

import './style.css';   

const {Content} = Layout;
const { Meta } = Card;

function Portofolio() {
    return (
        <Layout className="portofolio component__space">
            <Content>
                <h1 className="heading" >Portofolio</h1>
                <Row className="container">
                    <Col xs={14} sm={16} md={17} lg={10} xl={8} offset={3}>
                    <Card
                        hoverable
                        style={{
                        width: 450,
                        }}
                        cover={<img alt="project" src="https://nurhamdirostina.github.io/profile/project1.PNG" />}
                    >
                        <Meta 
                        title="Clodeo Login" 
                        description="in this application I created a login form and forgot the password according to the existing figma design. 
                        Inside the login there is an email and password input" />
                    </Card>
                    </Col>

                    <Col xs={19} sm={20} md={20} lg={12} xl={8} offset={3}>
                    <Card
                        hoverable
                        style={{
                        width: 450,
                        }}
                        cover={<img alt="example" src="https://nurhamdirostina.github.io/profile/project2.PNG" />}
                    >
                        <Meta 
                        title="Clodeo Employee" 
                        description="and in this application I also created an employee menu, this menu is a place to add new employees, 
                        when we add new employees we can create a new agenda. On the employee menu there is a list of 
                        employees containing photos, names, positions, emails and phone numbers, as well as employee updates." />
                    </Card>
                    </Col>                    
                </Row>
            </Content>
        </Layout>

    );
}

export default Portofolio;