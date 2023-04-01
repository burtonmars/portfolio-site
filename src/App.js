import React from 'react';

import Footer from './containers/footer/Footer';
import Contact from './containers/contact/Contact';
import Projects from './containers/projects/Projects';
import Header from './containers/header/Header';
import Navbar from './components/navbar/Navbar';
import Skills from './containers/skills/Skills';

import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <div className='header__nav'>
        <Navbar />
        <Header />
      </div>
      <Projects></Projects>
      <Skills/>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
};

export default App;
