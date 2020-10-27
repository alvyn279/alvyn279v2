import React from 'react';
import './App.min.css';
import Navbar from './components/navbar/navbar';
import Intro from './components/intro/intro';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import BackToTop from './components/back-top/back-top';
import Preloader from './components/preloader/preloader';
import Section from './components/section/section';
import { ABOUT_INFO } from './data';

const App = () => {
  return (
    <div className={'App'}>
      <Navbar />
      <Section
        id={'home'}
        content={<Intro />}
      />
      <Section
        id={'about'}
        content={(
          <About
            about={ABOUT_INFO.about}
            skills={ABOUT_INFO.skills}
          />
        )}
      />
      <Section
        id={'work'}
        content={<Portfolio />}
      />
      <Section
        id={'contact'}
        content={<Contact />}
      />
      <BackToTop />
      <Preloader />
    </div>
  );
};

export default App;
