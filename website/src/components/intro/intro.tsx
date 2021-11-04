import React from 'react';
import './stars.scss';
import Typed from 'react-typed';
import ScrollLink from '../scroll-link/scroll-link';

const HIGHLIGHT_TITLES = ['Software Engineer', 'Sports Fan', 'Stargazer'];

const Intro = () => (
  <div
    id={'home'}
    className={'intro route bg-image background'}
  >
    <div id={'stars'} />
    <div id={'stars2'} />
    <div id={'stars3'} />

    <div className={'intro-content display-table'}>
      <div className={'table-cell'}>
        <div className={'container'}>
          <h1 className={'intro-title mb-4'}>
            Bonjour/Hi, I&apos;m Alvyn.
          </h1>
          <p className={'intro-subtitle'}>
            <span className={'text-slider-items'} />
            <strong className={'text-slider'}>
              <Typed
                strings={HIGHLIGHT_TITLES}
                typeSpeed={80}
                backDelay={1100}
                backSpeed={30}
                loop
              />
            </strong>
          </p>
          <p className={'pt-3'}>
            <ScrollLink
              to={'work'}
              title={(
                <span
                  className={
                    'btn btn-primary btn js-scroll px-4'
                  }
                  role={'button'}
                >
                  View My Work
                </span>
              )}
            />
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Intro;
