import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';

const Main = () => {
    return (
        <div className='min-h-screen'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;