import React from 'react';
import Spinner from '../Components/Spinner';
import { Outlet } from 'react-router';


import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const AuthLayouts = () => {
    return (
        <div>
            <header>
               <Navbar></Navbar>
            </header>
            <main className='min-h-[calc(100vh-380px)] bg-gradient-to-r from-[#d4edda] via-[#ffe0b2] to-[#d4edda]'>
                <div>
                    {
                        navigation.state === 'loading' ? (
                            <Spinner></Spinner>
                        ) : (
                            <Outlet></Outlet>
                        )
                    }
                </div>
            </main>

            <footer>
                    <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayouts;