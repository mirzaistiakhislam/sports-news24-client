import React from 'react';
import { Button } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';


const BreakingNews = () => {
    return (
        <div className='d-flex bg-transparent bg-gradient mt-4 p-2 rounded'>
            <Link to='/0282e0e58a5c404fbd15261f11c2ab9b'><Button variant="danger" className='me-2'>Latest</Button></Link>
            <Marquee speed='100' pauseOnHover autoFill>
                &nbsp; Al Nassr emerged as frontrunners and on Saturday AEDT the 37-year-old's transfer was officially confirmed. According to transfer authority Fabrizio Romano, Ronaldo has signed a two-and-a-half-year deal and will earn €200 million (A$315m) per season.
            </Marquee>
        </div>
    );
};

export default BreakingNews;