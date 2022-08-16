import React, { useRef, useState } from 'react';
import {MenuOutlined, CloseOutlined } from '@ant-design/icons';
import homebookLogo from '../img/homebook.png';

export const Navbar = () => {
    const [nav, setNav] = useState(true);

    const about = useRef(null);
    const home = useRef(null);
    const features = useRef(null);
    const contact = useRef(null);

    const scrollToSection = (sectionRef) => {
        window.scrollTo({
            top: sectionRef.current.offsetTop,
            behavior: 'smooth',
        });
    };

    const handleNav = () => setNav(!nav);

  return (
    <div className='bg-white drop-shadow-md z-50 fixed w-full'>
       <nav className='flex items-center justify-between max-w-[1340px] px-4 mx-auto'>
        <img src={homebookLogo} className='w-20 cursor-pointer' alt=''/>
            <ul className='hidden md:flex text-blue-900 space-x-8 tracking-light text-sm items-center uppercase'>
                <li id='navlink'><a href='#'>Home</a></li>
                <li id='navlink'><a href='#'>About</a></li>
                <li id='navlink'><a href='#'>Features</a></li>
                <li id=''> <a className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Contact</a></li>
            </ul>
            <div onClick={handleNav} className='md:hidden block text-gray-600'>
                {nav ? <MenuOutlined className='text-2xl cursor-pointer'/> : <CloseOutlined className='text-2xl cursor-pointer' />}
            </div>
            <div className={nav ? 'fixed left-[-100%]' : 'z-50 fixed left-0 top-0 w-[70%] h-screen bg-white drop-shadow-xl ease-in duration-300 md:hidden'} >
                <img src={homebookLogo} className='w-20 cursor-pointer ' alt=''/>
                <ul className='uppercase text-blue-900'>
                    <li className='p-4'>Home</li>
                    <li className='p-4'>About</li>
                    <li className='p-4'>Features</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
       </nav>
    </div>
  )
}