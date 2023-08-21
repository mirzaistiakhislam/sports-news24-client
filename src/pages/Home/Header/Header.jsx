import React, { useEffect, useState } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import Banner from '../Banner/Banner/Banner';
import BreakingNews from '../BreakingNews/BreakingNews';

const Header = () => {

    return (
        <div>
            <Banner></Banner>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
        </div>
    );
};

export default Header;