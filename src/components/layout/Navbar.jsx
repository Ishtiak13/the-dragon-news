import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import ProfilePic from '../../assets/user.png'
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const {user,logOut}=use(AuthContext)

const handleSignOut=()=>{
    logOut().then(() => {
        alert("Sign-out successful.")
      }).catch((error) => {
        console.log("An error happened:" , error)

      });
}

    const links = <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/about'}>About</NavLink></li>
    <li><NavLink to={'/career'}>Career</NavLink></li>
    </>
    return (

        <div className='flex justify-between items-center'>
            <div className='font-bold cursor-default' >
                {user&& user.displayName}
            </div>
            <div className=''>
                <ul id='navbarLink' className='flex gap-4 '>
                {links}
                </ul>
            </div>
            <div className='flex gap-4 items-center'>
                <img  className='rounded-full w-10 h-10 object-cover' src={user?user?.photoURL:ProfilePic} alt="" />
                {user? <Link onClick={handleSignOut} className='btn btn-primary rounded-xl'> Log Out</Link>: <Link to={'/auth/login'} className='btn btn-primary rounded-xl'> Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;