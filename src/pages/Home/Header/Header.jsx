import React, { useEffect, useState } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import Banner from '../Banner/Banner/Banner';

const Header = () => {

    return (
        <div>
            <Banner></Banner>
            <NavBar></NavBar>
        </div>
    );
};

export default Header;