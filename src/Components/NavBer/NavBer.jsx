import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';

const NavBer = () => {

    const {user, signOutAuth} = useContext(AuthContext);

    const handelSignOut = () =>{
        signOutAuth()
        .then(result =>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
    } 
    console.log(user)
    const link = <>
        <NavLink to ="/">Home</NavLink>
        <NavLink to ="/Login">Login</NavLink>
        <NavLink to ="/Register">Register</NavLink>
        {
            user && <>
                <NavLink to="/Oder">Oder</NavLink>
            </>
        }
    </>
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <div className="btn btn-ghost text-xl"><Link to="/">Firebase auth</Link></div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 m-4">
                       {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                        <>
                            <a className="btn">{user?.email}</a>
                            <a className='btn ml-2' onClick={handelSignOut}>SignUot</a>
                        </>
                        :   <Link className='btn' to="/Login">Login</Link>
                    }
                </div>
            </div>
        </>
    );
};

export default NavBer;