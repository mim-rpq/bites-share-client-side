import React from 'react';
import { Outlet } from 'react-router';

const RootLayouts = () => {
    return (
        <div>
            
            <header>

            </header>
            <main>
                <section>
                    <Outlet></Outlet>
                </section>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default RootLayouts;