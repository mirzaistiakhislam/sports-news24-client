import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import ads from '../../../assets/bg.png';
import { Button } from 'react-bootstrap';


const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <div className='d-md-none d-lg-none'>
                {
                    categories.map(category =>
                        <ListGroup key={category.id}
                        >
                            <ListGroup.Item>
                                <Link to={`category/${category.id}`}>{category.name}</Link>
                            </ListGroup.Item>
                        </ListGroup>
                    )
                }
            </div>
            <div className='text-center p-5' style={{ backgroundImage: `url(${ads})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
                <h2>Create an Amazing Newspaper</h2>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button variant="danger">Learn More</Button>
            </div>
        </div>
        // <div>
        //     <h2>Categories: {categories.length}</h2>

        //     <div>
        //         <img src={ads} alt="" />
        //     </div>
        // </div>
    );
};

export default LeftSideNav;