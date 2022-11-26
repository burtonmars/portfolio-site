import React from 'react';

import Footer from './containers/footer/Footer';
import Contact from './containers/contact/Contact';
import Features from './containers/features/Features';
import Header from './containers/header/Header';
import CTA from './components/cta/CTA';
import Navbar from './components/navbar/Navbar';
import Brand from './components/brand/Brand';

import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
      </div>
      <Header />
      <Brand></Brand>
      <Features></Features>
      <CTA></CTA>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
};

export default App;
