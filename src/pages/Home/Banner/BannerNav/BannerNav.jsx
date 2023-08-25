import React, { useContext } from 'react';
import './BannerNav.css';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider';

const BannerNav = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    const handleLogout = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <Navbar className="bg-dark">
            <Container className=''>
                <Link to='/category/0' className='text-white text-decoration-none align-middle fs-5'>Sports News <span style={{ color: 'orange' }}>24</span></Link>
                <Navbar.Toggle />
                {
                    user ?
                        <>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title={<>Signed in as: <b>{user.displayName}</b></>}
                                menuVariant="dark"
                                align="end"
                            >
                                <NavDropdown.Item className='' onClick={handleLogout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </>
                        :
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text className='text-white'>
                                <Link to='/login'><Button variant="secondary">Login</Button></Link>
                            </Navbar.Text>
                        </Navbar.Collapse>
                }
            </Container>
        </Navbar>
    );
};

export default BannerNav;