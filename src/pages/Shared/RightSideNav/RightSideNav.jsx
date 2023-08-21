import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaSquareTwitter, FaInstagram } from 'react-icons/fa6';

const RightSideNav = () => {
    return (
        <div className='sticky-top'>
            <div className='mb-4'>
                <h6>Login With</h6>
                <Button variant="outline-danger" className='mb-2 w-100'>Login With Google</Button>
                <Button variant="outline-secondary" className='w-100'>Login With Github</Button>
            </div>
            <div>
                <h6>Find Us On</h6>
                <ListGroup className='w-100'>
                    <ListGroup.Item className='mb-2 rounded'><FaFacebook size={20} /><span className='ms-2'>Facebook</span></ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded'><FaSquareTwitter size={20} /><span className='ms-2'>Twitter</span></ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded'><FaInstagram size={20} /><span className='ms-2'>Instagram</span></ListGroup.Item>
                </ListGroup>
            </div>

        </div>
    );
};

export default RightSideNav;