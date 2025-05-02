import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftSide from '../components/HomeLayout/LeftSide';
import RightSide from '../components/HomeLayout/RightSide';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-9/12 mx-auto my-3'>
                <LatestNews></LatestNews>
                </section>
                <nav className='w-9/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            
            </header>
            <main className='w-9/12 mx-auto my-8 grid grid-cols-12'>
                <aside className='col-span-2 sticky top-4 h-fit'>
                    <LeftSide></LeftSide>
                </aside>
                <section className='main col-span-8'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-2 sticky top-4 h-fit'>
                    <RightSide></RightSide>
                </aside>
            </main>
            <footer className='sticky -bottom-100 bg-base-300'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;