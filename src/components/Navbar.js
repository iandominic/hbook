import React, { useRef, useState } from 'react';
import {MenuOutlined, CloseOutlined } from '@ant-design/icons';
import homebookLogo from '../img/homebook.png';
import {Link as Scroll} from 'react-scroll';

export const Navbar = () => {
    const [nav, setNav] = useState(true);
    const [shadow, setShadow] = useState(false);
    const [homeSec, setHome] = useState(false);
    const [aboutSec, setAbout] = useState(false);
    const [featureSec, setFeature] = useState(false);

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

    const addShadow = () => {
        if(window.scrollY >= 80) {
            setShadow(true);
        }
        else {
            setShadow(false);
        }
    };

    window.addEventListener('scroll', addShadow);

    const activeSection = () => {
        if(window.scrollY >= 0 && window.scrollY <= 800) {
            setHome(true);
        }
        else {
            setHome(false);
        }
        if(window.scrollY >= 900 && window.scrollY <= 1900) {
            setAbout(true);
        }
        else {
            setAbout(false);
        }
        if(window.scrollY >= 2000 && window.scrollY <= 3000) {
            setFeature(true);
        }
        else {
            setFeature(false);
        }
        console.log(window.pageYOffset)
    };

    window.addEventListener('scroll', activeSection);

  return (
    <div className={shadow ? 'bg-white drop-shadow-md z-50 fixed w-full' : 'bg-white z-50 fixed w-full'}>
       <nav className={shadow ? 'flex items-center justify-between max-w-[1340px] px-4 mx-auto h-[4.5rem] transition-all ease-in duration-200' : 'flex items-center justify-between max-w-[1340px] px-4 mx-auto h-[6rem] transition-all ease-in duration-200'}>
        <Scroll to="Home" smooth={true} duration={300}><img src={homebookLogo} className='w-20 cursor-pointer' alt='' data-aos='fade-down' data-aos-duration="500"/></Scroll>
            <ul className='hidden md:flex text-blue-900 space-x-8 tracking-light text-sm items-center uppercase'>
                <li id='navlink' data-aos='fade-down' data-aos-duration="600"><a href='#' className={homeSec ? 'activeLink' : 'text-blue-900'}><Scroll to="Home" smooth={true} duration={300}>Home</Scroll></a></li>
                <li id='navlink' data-aos='fade-down' data-aos-duration="700"><a href='#' className={aboutSec ? 'activeLink' : 'text-blue-900'}><Scroll to="About" smooth={true} duration={300}>About</Scroll></a></li>
                <li id='navlink' data-aos='fade-down' data-aos-duration="800"><a href='#' className={featureSec ? 'activeLink' : 'text-blue-900'}><Scroll to="Features" smooth={true} duration={300}>Features</Scroll></a></li>
                <li id='' data-aos='fade-down' data-aos-duration="900"> <a className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" role="button">Contact</a></li>
            </ul>
            <div onClick={handleNav} className='md:hidden block text-gray-600'>
                {nav ? <MenuOutlined className='text-2xl cursor-pointer'/> : <CloseOutlined className='text-2xl cursor-pointer' />}
            </div>
            <div className={nav ? 'fixed left-[-100%]' : 'z-50 fixed left-0 top-0 w-[70%] h-screen bg-white drop-shadow-xl ease-in duration-300 md:hidden'} >
                <img src={homebookLogo} className='w-20 cursor-pointer ' alt=''/>
                <ul className='uppercase text-blue-900'>
                    <li className='p-4'><a href='#'><Scroll to="Home" smooth={true} duration={100}>Home</Scroll></a></li>
                    <li className='p-4'><a href='#'><Scroll to="About" smooth={true} duration={100}>About</Scroll></a></li>
                    <li className='p-4'><a href='#'><Scroll to="Features" smooth={true} duration={100}>Features</Scroll></a></li>
                    <li className='p-4 cursor-pointer' data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Contact</li>
                </ul>
            </div>
       </nav>
    </div>
  )
}
