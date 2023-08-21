import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import ads from '../../../assets/bg.png';
import { Button } from 'react-bootstrap';
import './LeftSideNav.css';
import ActiveLink from '../ActiveLink/ActiveLink';


const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);


    return (
        <div className='sticky-md-top'>
            <div className='d-md-none d-lg-none my-4 w-100'>
                <h4 className='text-center text-decoration-underline'>Categories</h4>
                {
                    categories.map(category =>
                        <ListGroup className='rounded-0' key={category.id}
                        >
                            <ListGroup.Item className='bg-dark border-0'>
                                <ActiveLink className='ms-2 pe-2 text-light hover-overlay' to={`category/${category.id}`}>{category.name}</ActiveLink>
                            </ListGroup.Item>
                        </ListGroup>
                    )
                }
            </div>
            <div className='text-center p-5 d-none d-sm-block rounded' style={{ backgroundImage: `url(${ads})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
                <h2>Create an Amazing Newspaper</h2>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button variant="danger">Learn More</Button>
            </div>
        </div>
    );
};

export default LeftSideNav;