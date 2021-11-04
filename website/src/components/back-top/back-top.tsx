import React, { useState, useEffect } from 'react';
import './back-top.scss';

const BackToTop = () => {
  const [show, setShow] = useState<boolean>(false);

  const setConditionalShow = () => {
    setShow(window.pageYOffset >= 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', setConditionalShow);

    return () => window.removeEventListener('scroll', setConditionalShow);
  });

  return (
    <span
      className={`back-to-top ${
        show ? 'fadeInBackTopButton' : 'fadeOutBackTopButton'
      }`}
      onClick={scrollToTop}
      style={{
        display: 'block',
        width: '44px',
        height: '44px',
      }}
    >
      <i className={'fa fa-chevron-up'} />
    </span>
  );
};

export default BackToTop;
