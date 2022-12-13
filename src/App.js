import React, { useState, useEffect } from 'react'
import { About } from './components/About';
import { Affiliates } from './components/Affiliates';
import { Contact } from './components/Contact';
import { Features } from './components/Features';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Modal } from './components/Modal';
import { Footer } from './components/Footer';
import aos from 'aos';
import 'aos/dist/aos.css';
import Pricing from './components/Pricing';

function App() {

  useEffect(() => {
    aos.init({
      duration: 1000
    });
  },[]);

  return (
    <div className='overflow-hidden'>
      <Modal />
      <Navbar />
      <Home />
      <Affiliates />
      <About />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
