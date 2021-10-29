import React, { useEffect, useState } from 'react';
import $ from 'jquery';

import portraitOutline from '../../img/pt_otl.png';
import portrait from '../../img/pt.png';
import ScrollLink from '../scroll-link/scroll-link';

import './navbar.scss';

interface NavbarItemProps {
    to: string;
    title: string;
    isDefault?: boolean;
}

const NavbarItem = (props: NavbarItemProps) => {
    const { to, title, isDefault } = props;

    return (
        <li className={'nav-item'}>
            <ScrollLink
                to={to}
                title={
                    <span
                        className={`nav-link js-scroll ${
                            isDefault ? 'active' : ''
                        }`}
                    >
                        {title}
                    </span>
                }
            />
        </li>
    );
};

const Navbar = () => {
    const [logo, setLogo] = useState<any>(portrait);

    useEffect(() => {
        const nav = $('nav');
        const navHeight = nav.outerHeight();

        $('.navbar-toggler').on('click', () => {
            if (!$('#mainNav').hasClass('navbar-reduce')) {
                $('#mainNav').addClass('navbar-reduce');
            }
        });

        $('body').scrollspy({
            target: '#mainNav',
            offset: navHeight,
        });

        $('.js-scroll').on('click', () => {
            $('.navbar-collapse').collapse('hide');
        });

        window.addEventListener('scroll', handleTogglePortrait);

        return () => {
            window.removeEventListener('scroll', handleTogglePortrait);
        };
    });

    const handleTogglePortrait = () => {
        if (window.pageYOffset > 50) {
            document
                .querySelector('.navbar-expand-md')!
                .classList.add('navbar-reduce');
            document
                .querySelector('.navbar-expand-md')!
                .classList.remove('navbar-trans');
            setLogo(portraitOutline);
        } else {
            document
                .querySelector('.navbar-expand-md')!
                .classList.add('navbar-trans');
            document
                .querySelector('.navbar-expand-md')!
                .classList.remove('navbar-reduce');
            setLogo(portrait);
        }
    };

    return (
        <nav
            className={
                'navbar navbar-b navbar-trans navbar-expand-md fixed-top'
            }
            id={'mainNav'}
        >
            <div className={'container'}>
                <div className={'navbar-brand js-scroll'}>
                    <img
                        className={'fadedImg'}
                        src={logo}
                        alt={'logo'}
                        style={{
                            maxWidth: '150px',
                        }}
                    />
                </div>
                <button
                    className={'navbar-toggler collapsed'}
                    type={'button'}
                    data-toggle={'collapse'}
                    data-target={'#navbarDefault'}
                    aria-controls={'navbarDefault'}
                    aria-expanded={'false'}
                    aria-label={'Toggle navigation'}
                >
                    <span />
                    <span />
                    <span />
                </button>
                <div
                    className={'navbar-collapse collapse justify-content-end'}
                    id={'navbarDefault'}
                >
                    <ul className={'navbar-nav'}>
                        <NavbarItem to={'home'} title={'Home'} isDefault />
                        <NavbarItem to={'about'} title={'About'} />
                        <NavbarItem to={'work'} title={'Work'} />
                        <NavbarItem to={'contact'} title={'Contact'} />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
