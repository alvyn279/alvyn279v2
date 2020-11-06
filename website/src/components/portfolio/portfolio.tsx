import React from 'react';
import './porfolio.scss';
import { Button } from 'antd';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import SectionHeader from '../section-header/section-header';

interface PortfolioProps {
  githubLink: string
}

export const Portfolio = (props: PortfolioProps) => {
  const { githubLink } = props;

  return (
    <section
      id={'work'}
      className={'portfolio-mf sect-pt4 route'}
    >
      <div className={'container'}>
        <SectionHeader
          header={'Projects'}
          subtitle={'Personal and open-source project contributions'}
        />
        <div className={'row'}>
          <p className={'message'}>
            View my code on
            {' '}
            <Button
              shape={'round'}
              href={githubLink}
              icon={(
                <LogoGithub
                  className={'githubIcon'}
                  fontSize={'30px'}
                />
              )}
              size={'middle'}
            >
            Github
            </Button>
            <span>&nbsp;, that&apos;s what it&apos;s made for. &nbsp;</span>
            <span
              role={'img'}
              aria-labelledby={'winky face'}
            >
              😉
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
