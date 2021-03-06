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
import { ABOUT_INFO, SOCIAL_INFO } from './data';

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
            libraries={ABOUT_INFO.libraries}
            skills={ABOUT_INFO.skills}
            timeline={ABOUT_INFO.timeline}
          />
        )}
      />
      <Section
        id={'work'}
        content={(
          <Portfolio
            githubLink={SOCIAL_INFO.githubLink}
          />
        )}
      />
      <Section
        id={'contact'}
        content={(
          <Contact
            github={SOCIAL_INFO.githubLink}
            linkedin={SOCIAL_INFO.linkedinLink}
            email={SOCIAL_INFO.email}
          />
        )}
      />
      <BackToTop />
      <Preloader />
    </div>
  );
};

export default App;
