import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActiveLink.css';

const ActiveLink = ({ to, children }) => {

    // className='text-decoration-none ms-2 pe-2'
    return (
        <NavLink
            to={to}
            style={{ marginLeft: '6px', paddingRight: '6px', textDecoration: 'none' }}
            className={`${({ isActive }) => isActive ? "active" : null}`
            }
        >
            <span className='text-light hover-overlay'>{children}</span>
        </NavLink>
    );
};

export default ActiveLink;