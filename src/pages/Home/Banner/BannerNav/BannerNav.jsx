import React from 'react';
import './BannerNav.css';
import { Container, Navbar } from 'react-bootstrap';

const BannerNav = () => {
    return (
        <Navbar className="bg-dark">
            <Container className=''>
                <Navbar.Brand className='text-white' href="#home">Sports News <span style={{ color: 'orange' }}>24</span></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className='text-white'>
                        Signed in as: <a className='text-white' href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default BannerNav;