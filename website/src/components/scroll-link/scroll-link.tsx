import React from 'react';
import { Link } from 'react-scroll';

interface ScrollLinkProps {
  to: string,
  title: any,
}

const ScrollLink = (props: ScrollLinkProps) => {
  const { to, title } = props;
  return (
    <Link
      to={to}
      spy
      smooth
      offset={-70}
      duration={500}
      style={{
        cursor: 'pointer',
        textDecoration: 'none',
      }}
    >
      {title}
    </Link>
  );
};

export default ScrollLink;
