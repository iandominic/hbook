import React from 'react'
import { About } from './components/About';
import { Affiliates } from './components/Affiliates';
import { Features } from './components/Features';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Affiliates />
      <About />
      <Features />
    </>
  );
}

export default App;
