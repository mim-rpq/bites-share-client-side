import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Spinner from '../Components/Spinner';

const RootLayouts = () => {
    const navigation = useNavigation();
    return (
        <div>

            <header>
                <Header></Header>
            </header>
            <main className='min-h-screen'>
                <section>
                    {
                        navigation.state === 'loading' ? (
                            <Spinner></Spinner>
                        ) : (
                            <Outlet></Outlet>
                        )
                    }
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayouts;