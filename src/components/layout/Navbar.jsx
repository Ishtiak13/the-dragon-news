import React from 'react';
import { NavLink } from 'react-router';
import ProfilePic from '../../assets/user.png'

const Navbar = () => {
    const links = <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/about'}>About</NavLink></li>
    <li><NavLink to={'/career'}>Career</NavLink></li>
    </>
    return (

        <div className='flex justify-between items-center'>
            <div className='hidden sm:flex' ></div>
            <div className=''>
                <ul id='navbarLink' className='flex gap-4 '>
                {links}
                </ul>
            </div>
            <div className='flex gap-4 items-center'>
                <img className='rounded-full' src={ProfilePic} alt="" />
                <button className='btn btn-primary rounded-xl'> Login</button>
            </div>
        </div>
    );
};

export default Navbar;