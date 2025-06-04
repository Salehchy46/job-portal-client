import React from 'react';
import { Outlet } from 'react-router';

const Mainlayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;