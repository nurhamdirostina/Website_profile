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
                        <Meta title="Clodeo Login" description="in this application I created a login form and forgot password according to the existing figma design" />
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
                        <Meta title="Clodeo Employee" description="clodeo employee" />
                    </Card>
                    </Col>                    
                </Row>
            </Content>
        </Layout>

    );
}

export default Portofolio;