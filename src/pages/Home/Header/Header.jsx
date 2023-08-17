import React, { useEffect, useState } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import Banner from '../Banner/Banner/Banner';

const Header = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div>
            <Banner></Banner>
            <NavBar categories={categories}></NavBar>
        </div>
    );
};

export default Header;