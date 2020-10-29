import React from 'react';
import './social-link.scss';

interface SocialLogoProps {
  link: string,
  logo: any,
  size: number
}

const SocialLink = (props: SocialLogoProps) => {
  const { link, logo, size } = props;

  return (
    <a
      href={link}
      target={'_blank'}
      rel={'noopener noreferrer'}
    >
      <span
        className={'logo ico-circle'}
        style={{
          height: `${size}px`,
          width: `${size}px`,
        }}
      >
        {logo}
      </span>

    </a>
  );
};

export default SocialLink;
