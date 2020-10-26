import React from 'react';
import './App.min.css';
import Navbar from './components/navbar/navbar';
import Intro from './components/intro/intro';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import BackToTop from './components/back-top/back-top';
import Preloader from './components/preloader/preloader';
import { ABOUT_INFO } from './data';

const App = () => {
  return (
    <div className={'App'}>
      <Navbar />
      <Intro />
      <About
        about={ABOUT_INFO.about}
        skills={ABOUT_INFO.skills}
      />
      <Portfolio />
      <Contact />
      <BackToTop />
      <Preloader />
    </div>
  );
};

export default App;
