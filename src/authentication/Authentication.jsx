import React from 'react';
import Login from '../Pages/Login';
import Navbar from '../components/Navbar';
import Register from '../Pages/Register';
import { Outlet } from 'react-router';

const Authentication = () => {
    return (
        <div className='bg-base-200 h-screen pt-4'>
            <div className=''>
                <div className='w-10/12 mx-auto px-3 py-3 rounded-xl shadow-md bg-white'><Navbar></Navbar></div>
            </div>
            <main>
                <Outlet></Outlet>
            </main>

        </div>
    );
};

export default Authentication;