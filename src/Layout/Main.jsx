import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';

const Main = () => {
    return (
        <div className='min-h-screen'>
            <Navbar />
          <div className='max-w-6xl mx-auto'>
          <Outlet />
          </div>
        </div>
    );
};

export default Main;