import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/shared/Navbar';

const Mainlayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;