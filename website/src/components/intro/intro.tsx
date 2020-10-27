import React from 'react';
import './stars.scss';
import Typed from 'react-typed';
import ScrollLink from '../scroll-link/scroll-link';

class Intro extends React.Component {
  render() {
    return (
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
              <h1 className={'intro-title mb-4'}>Hello, I am XYZ</h1>
              <p className={'intro-subtitle'}>
                <span className={'text-slider-items'} />
                <strong className={'text-slider'}>
                  <Typed
                    strings={[
                      'Front End Developer',
                      'Back End Developer',
                      'Software Engineer',
                    ]}
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
                    <a
                      className={'btn btn-primary btn js-scroll px-4'}
                      role={'button'}
                    >
                      View My Work
                    </a>
                  )}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;