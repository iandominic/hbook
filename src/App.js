import React, { useState } from 'react'
import { About } from './components/About';
import { Affiliates } from './components/Affiliates';
import { Contact } from './components/Contact';
import { Features } from './components/Features';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Modal } from './components/Modal';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Modal />
      <Navbar />
      <Home />
      <Affiliates />
      <About />
      <Features />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
