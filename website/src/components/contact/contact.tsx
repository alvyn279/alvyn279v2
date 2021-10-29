import React from 'react';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';
import IosMail from 'react-ionicons/lib/IosMail';
import SocialLink from '../social-link/social-link';

import './contact.scss';
import imageOverlay from '../../img/earth.jpg';

interface ContactProps {
    github: string;
    linkedin: string;
    email: string;
}

const LOGO_PROPS = {
    fontSize: '35px',
    color: '#28384c',
    style: {
        height: '100%',
    },
};

const Contact = (props: ContactProps) => {
    const { github, linkedin, email } = props;

    const renderSocialRow = () => (
        <div className={'row'}>
            <div className={'contact-content'}>
                <div className={'more-info'}>
                    <p className={'lead'}>
                        Feel free to reach out to me for any inquiry.
                    </p>
                </div>
                <div className={'socials'}>
                    <ul>
                        <li>
                            <SocialLink
                                link={github}
                                size={45}
                                logo={<LogoGithub {...LOGO_PROPS} />}
                            />
                        </li>
                        <li>
                            <SocialLink
                                link={linkedin}
                                size={45}
                                logo={<LogoLinkedin {...LOGO_PROPS} />}
                            />
                        </li>
                        <li>
                            <SocialLink
                                link={`mailto:${email}`}
                                size={45}
                                logo={<IosMail {...LOGO_PROPS} />}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );

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
                                        <h5 className={'title-left'}>
                                            Contact Me
                                        </h5>
                                    </div>
                                </div>
                                {renderSocialRow()}
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
};

export default Contact;
