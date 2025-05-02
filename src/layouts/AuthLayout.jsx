import React from 'react';
import Navbar from '../components/layout/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className="w-11/12 mx-auto py-6">
                <Navbar></Navbar>
                <main className="w-11/12 mx-auto my-6">
                    <Outlet></Outlet>
                </main>
            </header>
            
        </div>
    );
};

export default AuthLayout;