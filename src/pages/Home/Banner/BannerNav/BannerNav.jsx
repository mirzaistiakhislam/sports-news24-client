import React from 'react';
import './BannerNav.css';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BannerNav = () => {
    return (
        <Navbar className="bg-dark">
            <Container className=''>
                <Link to='/category/0' className='text-white text-decoration-none align-middle fs-5'>Sports News <span style={{ color: 'orange' }}>24</span></Link>
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