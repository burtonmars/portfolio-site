import React from 'react';

import Footer from './containers/footer/Footer';
import Contact from './containers/contact/Contact';
import Projects from './containers/projects/Projects';
import Header from './containers/header/Header';
import CTA from './components/cta/CTA';
import Navbar from './components/navbar/Navbar';
import Features from './containers/features/Features';

import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
      </div>
      <Header />
      <Projects></Projects>
      <Features/>
      <CTA></CTA>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
};

export default App;
