import React from 'react';
import $ from 'jquery';
import './back-top.scss';

interface BackTopState {
  show: boolean
}

class BackToTop extends React.Component<any, BackTopState> {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  componentDidMount() {
    $('.back-to-top').click(() => {
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
      return false;
    });
    window.addEventListener('scroll', () => {
      this.setState({ show: window.pageYOffset >= 100 });
    });
  }

  render() {
    const { show } = this.state;

    return (
      <span
        className={`back-to-top ${show ? 'fadeInBackTopButton' : 'fadeOutBackTopButton'}`}
        style={{
          display: 'block',
          width: '44px',
          height: '44px',
        }}
      >
        <i className={'fa fa-chevron-up'} />
      </span>
    );
  }
}

export default BackToTop;
