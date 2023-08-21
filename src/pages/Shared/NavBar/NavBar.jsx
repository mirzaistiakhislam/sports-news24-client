import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div className='d-none d-sm-block'>
            <div className='d-flex justify-content-center'>
                <Navbar collapseOnSelect expand="lg" className="my-4 py-3 rounded bg-transparent opacity-50 border w-75">
                    <Container>
                        <Navbar.Toggle className='bg-white' aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className='' id="responsive-navbar-nav">
                            <Nav className="navbar-collapse justify-content-center">
                                {
                                    categories.map(category => <Link
                                        to={`category/${category.id}`}
                                        className='text-decoration-none ms-2 pe-2'
                                        key={category.id}
                                    ><span className='text-light hover-overlay'>{category.name}</span></Link>)
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default NavBar;