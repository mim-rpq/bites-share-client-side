
import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, NavLink, useLocation } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import defaultUser from '../assets/images/defaultUser.png'
import { toast } from 'react-toastify';
import logo from '../assets/images/logo2.png'
import ToggleThemeForAll from './ToggleThemeForAll';

const Navbar = () => {

    const { user, userLoading, logOut } = useContext(AuthContext)
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    const handleLogOut = () => {
        logOut().then(() => {
            toast.error('You logged out successfully')
            Navigate('/')

        }).catch((error) => {
            toast.error(error)
        })
    }
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        };
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => { window.removeEventListener('scroll', handleScroll) }
    }, [])

    // console.log(user);

    const links = <>
        <li className='mr-4'>
            <NavLink
                className={({ isActive }) =>
                    `${isActive
                        ? "text-secondary rounded-none border-b-2 pb-2"
                        : !isHome
                            ? "text-primary hover:border-b-2 pb-2 border-base-200"
                            : isScrolled
                                ? "text-primary hover:border-b-2 pb-2 border-base-200"
                                : "text-white hover:border-b-2 pb-2 border-base-200"
                    }`
                }
                to='/'
            >
                Home
            </NavLink>
        </li>

        <li className='mr-4'>
            <NavLink
                className={({ isActive }) =>
                    `${isActive
                        ? "text-secondary rounded-none border-b-2 pb-2"
                        : !isHome
                            ? "text-primary hover:border-b-2 pb-2 border-base-200"
                            : isScrolled
                                ? "text-primary hover:border-b-2 pb-2 border-base-200"
                                : "text-white hover:border-b-2 pb-2 border-base-200"
                    }`
                }
                to='/myFoodRequest'
            >
                My Food Request
            </NavLink>
        </li>

        <li className='mr-4'>
            <NavLink
                className={({ isActive }) =>
                    `${isActive
                        ? "text-secondary rounded-none border-b-2 pb-2"
                        : !isHome
                            ? "text-primary hover:border-b-2 pb-2 border-base-200"
                            : isScrolled
                                ? "text-primary hover:border-b-2 pb-2 border-base-200"
                                : "text-white hover:border-b-2 pb-2 border-base-200"
                    }`
                }
                to='/availableFoods'
            >
                Available Foods
            </NavLink>
        </li>

        <li className='mr-4'>
            <NavLink
                className={({ isActive }) =>
                    `${isActive
                        ? "text-secondary rounded-none border-b-2 pb-2"
                        : !isHome
                            ? "text-primary hover:border-b-2 pb-2 border-base-200"
                            : isScrolled
                                ? "text-primary hover:border-b-2 pb-2 border-base-200"
                                : "text-white hover:border-b-2 pb-2 border-base-200"
                    }`
                }
                to='/manageMyFoods'
            >
                Manage My Foods
            </NavLink>
        </li>

        <li className='mr-4'>
            <NavLink
                className={({ isActive }) =>
                    `${isActive
                        ? "text-secondary rounded-none border-b-2 pb-2"
                        : !isHome
                            ? "text-primary hover:border-b-2 pb-2 border-base-200"
                            : isScrolled
                                ? "text-primary hover:border-b-2 pb-2 border-base-200"
                                : "text-white hover:border-b-2 pb-2 border-base-200"
                    }`
                }
                to='/addFood'
            >
                Add Food
            </NavLink>
        </li>
        <li className='mr-4'>
            <NavLink
                className={({ isActive }) =>
                    `${isActive
                        ? "text-secondary rounded-none border-b-2 pb-2"
                        : !isHome
                            ? "text-primary hover:border-b-2 pb-2 border-base-200"
                            : isScrolled
                                ? "text-primary hover:border-b-2 pb-2 border-base-200"
                                : "text-white hover:border-b-2 pb-2 border-base-200"
                    }`
                }
                to='/contact'
            >
                Contact Us
            </NavLink>
        </li>
    </>

    return (

        <div
            className={`navbar h-[80px] transition-all duration-300 z-50 
    ${!isScrolled && isHome
                    ? "absolute top-0 bg-transparent"
                    : "fixed top-0 backdrop-blur-md bg-primary-100 bg-opacity-70 shadow-md"
                } 
    w-full`}
        >
            <div className="w-11/12 mx-auto flex justify-between items-center">
                {/* Dropdown menu */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>

                {/* Logo */}
                <div className="navbar-start">
                    <img src={logo} className="hidden md:block" alt="" />
                    <h1 className="text-primary ml-3 font-bold text-2xl lg:text-3xl">
                        Bites<span className="text-2xl lg:text-4xl text-secondary">Share</span>
                    </h1>
                </div>

                {/* Center links */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center gap-3 px-1">{links}</ul>

                </div>

                {/* Right side */}
                <div className="navbar-end">
                    <div className='mr-2'>
                        <ToggleThemeForAll></ToggleThemeForAll>
                    </div>
                    {userLoading ? null : user ? (
                        <div className="flex gap-2">
                            <a data-tooltip-id="my-tooltip">
                                <img
                                    src={user?.photoURL || defaultUser}
                                    alt="Profile"
                                    className="md:w-11 w-9 h-9 md:h-11 rounded-full border-2 border-primary"
                                />
                            </a>
                            <Link
                                onClick={handleLogOut}
                                className="btn px-2 py-2 border-0 rounded-sm lg:font-medium md:rounded-md transition hover:scale-110 duration-300 bg-primary lg:mr-4 text-white lg:px-6 hover:bg-secondary"
                            >
                                Logout
                            </Link>
                        </div>
                    ) : (
                        <>
                            <Link
                                to="/auth/register"
                                className="btn outline-0 border-0 bg-primary mr-4 text-white md:px-6 pt-2 hidden md:block hover:bg-secondary"
                            >
                                Register
                            </Link>
                            <Link
                                to="/auth/login"
                                className="btn bg-primary outline-0 border-0 mr-4 text-white lg:px-6 hover:bg-secondary"
                            >
                                Login
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>

    );
};

export default Navbar;