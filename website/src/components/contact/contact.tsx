import React from 'react';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';
import SocialLink from '../social-link/social-link';

import './contact.scss';
import imageOverlay from '../../img/earth.jpg';

interface ContactProps {
  github: string,
  linkedin: string,
}

class Contact extends React.Component<ContactProps> {
  render() {
    const { github, linkedin } = this.props;

    return (
      <section
        className={'paralax-mf footer-paralax bg-image sect-mt4 route'}
        style={{ backgroundImage: `url(${imageOverlay})` }}
      >
        <div className={'overlay-mf'} />
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-sm-12'}>
              <div className={'contact-mf'}>
                <div
                  id={'contact'}
                  className={'box-shadow-full big-card'}
                >
                  <div className={'row'}>
                    <div className={'title-box-2 pt-4 pt-md-0'}>
                      <h5 className={'title-left'}>Get in Touch</h5>
                    </div>
                    <div className={'more-info'}>
                      <p className={'lead'}>
                          Whether you want to get in touch, talk about a project
                          collaboration, or just say hi, I&apos;d love to hear from
                          you.
                      </p>
                    </div>
                    <div className={'socials'}>
                      <ul>
                        <li>
                          <SocialLink
                            link={github}
                            size={70}
                            logo={(
                              <LogoGithub
                                fontSize={'60px'}
                                color={'#28384c'}
                                style={{
                                  height: '100%',
                                }}
                              />
                            )}
                          />
                        </li>
                        <li>
                          <SocialLink
                            link={linkedin}
                            size={70}
                            logo={(
                              <LogoLinkedin
                                fontSize={'60px'}
                                color={'#28384c'}
                                style={{
                                  height: '100%',
                                }}
                              />
                            )}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className={'container'}>
            <div className={'row'}>
              <div className={'col-sm-12'}>
                <div className={'copyright-box'} />
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
