import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';

const RootLayouts = () => {
    return (
        <div>

            <header>
               <Header></Header>
            </header>
            <main className='min-h-screen'>
                <section>
                    <Outlet></Outlet>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayouts;