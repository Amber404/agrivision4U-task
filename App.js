import React from 'react';

import Hero from './components/hero';
import Navbar from './components/navbar';
import Analytics from './components/analytics';
import Cards from './components/cards';
import Newsletter from './components/Newsletter';
import Footer from './components/footer';


function App() {
  return (
    <div>
      
      <Navbar />
      <Hero />
      <Analytics />
      <Cards />
      <Newsletter />
      <Footer />
      
      
    </div>
  );
}

export default App;