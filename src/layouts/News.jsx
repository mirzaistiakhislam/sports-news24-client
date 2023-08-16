import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../pages/Home/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import RightSideNav from '../pages/Shared/RightSideNav/RightSideNav';
import LeftSideNav from '../pages/Shared/LeftSideNav/LeftSideNav';

const News = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Header></Header>
                    </Col>
                </Row>
                <Row>
                    <Col md={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col md={3}>
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Footer></Footer>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default News;