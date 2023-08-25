import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../pages/Shared/NavBar/NavBar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import BannerNav from '../pages/Home/Banner/BannerNav/BannerNav';

const LoginLayouts = () => {

    return (
        <div className='bg-dark text-white'>

            <Container>
                <Row>
                    <Col>
                        <BannerNav></BannerNav>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Outlet></Outlet>
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

export default LoginLayouts;