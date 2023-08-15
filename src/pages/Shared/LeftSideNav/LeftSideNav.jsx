import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';


const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h2>Categories: {categories.length}</h2>
            {
                categories.map(category =>
                    <ListGroup key={category.id}
                    >
                        <ListGroup.Item>
                            <Link to={`category/${category.id}`}>{category.name}</Link>
                        </ListGroup.Item>
                    </ListGroup>)
            }
        </div>
    );
};

export default LeftSideNav;