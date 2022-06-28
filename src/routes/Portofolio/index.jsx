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
                    <Col span={9} offset={4}>
                    <Card
                        hoverable
                        style={{
                        width: 350,
                        }}
                        cover={<img alt="project" src="https://nurhamdirostina.github.io/profile/project1.PNG" />}
                    >
                        <Meta title="Clodeo Login" description="clodeo login" />
                    </Card>
                    </Col>

                    <Col span={9} offset={0}>
                    <Card
                        hoverable
                        style={{
                        width: 350,
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