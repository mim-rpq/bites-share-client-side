import React, { use } from 'react';
import { Link, Navigate, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import defaultUser from '../assets/images/defaultUser.png'
import { toast } from 'react-toastify';

const Navbar = () => {

    const {user, userLoading, logOut} = use(AuthContext)

     const handleLogOut = () => {
        logOut().then(() => {
            toast.error('You logged out successfully')
            Navigate('/')

        }).catch((error) => {
            toast.error(error)
        })
    }

    const links = <>
        <li className='mr-4'>
            <NavLink
                className={({ isActive }) =>
                    `${isActive ? "text-secondary border-b-2 pb-2" : " text-primary hover:border-b-2 border-base-200 pb-2"}`
                }
                to='/'
            >
                Home
            </NavLink>
        </li>
        <li className='mr-4'>
            <NavLink
                className={({ isActive }) =>
                    `${isActive ? "text-secondary border-b-2 pb-2" : "text-primary hover:border-b-2 border-base-200 pb-2"}`
                }
                to='/myFoodRequest'
            >
                My Food Request
            </NavLink>
        </li>
        <li className='mr-4'>
            <NavLink
                className={({ isActive }) =>
                    `${isActive ? "text-secondary border-b-2 pb-2" : "text-primary hover:border-b-2 border-base-200 pb-2"}`
                }
                to='/availableFoods'
            >
                Available Foods
            </NavLink>
        </li>
        <li className='mr-4'>
            <NavLink
                className={({ isActive }) =>
                    `${isActive ? "text-secondary border-b-2 pb-2" : "text-primary hover:border-b-2 border-base-200 pb-2"}`
                }
                to='/manageMyFoods'
            >
                Manage My Foods
            </NavLink>
        </li>
        <li className='mr-4'>
            <NavLink
                className={({ isActive }) =>
                    `${isActive ? "text-secondary border-b-2 pb-2" : "text-primary hover:border-b-2 border-base-200 pb-2"}`
                }
                to='/addFood'
            >
                Add Food
            </NavLink>
        </li>
    </>

    return (

        <div className="navbar bg-base-100 shadow-sm h-[80px]">
            <div className="navbar-start">


                <h1 className='text-primary font-bold text-4xl'>BitesShare</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" flex items-center gap-5 px-1">


                    {links}

                </ul>
            </div>
            <div className="navbar-end">
                {userLoading ? null : user ? (

                    <div className='flex gap-2'>
                        <a data-tooltip-id="my-tooltip"><img
                             src={user?.photoURL || defaultUser}
                            alt="Profile"
                            className="md:w-11 w-9 h-9 md:h-11 rounded-full border-2 border-primary"
                        /></a>
                        <Link onClick={handleLogOut} className=" btn px-2 py-2 rounded-sm lg:font-medium md:rounded-md transition hover:scale-110 duration-300 bg-primary lg:mr-4 text-white lg:px-6 hover:bg-secondary">Logout</Link>
                    </div>

                ) : (

                    <>
                        <Link to='/auth/register' className="btn  bg-primary mr-4 text-white md:px-6 pt-2 hidden md:block hover:bg-secondary">Register</Link>
                        <Link to='/auth/login' className="btn bg-primary mr-4 text-white lg:px-6 hover:bg-secondary">Login</Link>
                    </>)}

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;