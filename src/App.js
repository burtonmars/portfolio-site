import React from 'react';

import Footer from './containers/footer/Footer';
import Blog from './containers/blog/Blog';
import Features from './containers/features/Features';
import Header from './containers/header/Header';
import Possibility from './containers/possibility/Possibility';
import WhatGPT3 from './containers/whatGPT3/WhatGPT3';
import CTA from './components/cta/CTA';
import Navbar from './components/navbar/Navbar';
import Brand from './components/brand/Brand';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand></Brand>
      <WhatGPT3></WhatGPT3>
      <Features></Features>
      <Possibility></Possibility>
      <CTA></CTA>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  )
};

export default App;
