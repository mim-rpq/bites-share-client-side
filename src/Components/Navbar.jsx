import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

    const links = <>
        <li className='mr-4'>
            <NavLink
                className={({ isActive }) =>
                    `${isActive ? "text-primary border-b-2 pb-2" : " hover:border-b-2 border-base-200 pb-2"}`
                }
                to='/'
            >
                Home
            </NavLink>
        </li>
        <li className='mr-4'>
            <NavLink
                className={({ isActive }) =>
                    `${isActive ? "text-primary border-b-2 pb-2" : " hover:border-b-2 border-base-200 pb-2"}`
                }
                to='/myFoodRequest'
            >
                My Food Request
            </NavLink>
        </li>
        <li className='mr-4'>
            <NavLink
                className={({ isActive }) =>
                    `${isActive ? "text-primary border-b-2 pb-2" : " hover:border-b-2 border-base-200 pb-2"}`
                }
                to='/availableFoods'
            >
                Available Foods
            </NavLink>
        </li>
        <li className='mr-4'>
            <NavLink
                className={({ isActive }) =>
                    `${isActive ? "text-primary border-b-2 pb-2" : " hover:border-b-2 border-base-200 pb-2"}`
                }
                to='/manageMyFoods'
            >
                Manage My Foods
            </NavLink>
        </li>
        <li className='mr-4'>
            <NavLink
                className={({ isActive }) =>
                    `${isActive ? "text-primary border-b-2 pb-2" : " hover:border-b-2 border-base-200 pb-2"}`
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

                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" flex items-center gap-5 px-1">


                {links}

                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>

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