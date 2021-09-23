import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import List from '../Navigation-elements/Header-list';
import Logo from './../../assets/Logo';
import HeaderNavButtons from '../Navigation-elements/Header-nav-buttons';

const NavigationWrapper = styled.nav`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 40px 0 23px;
    position: relative;

    @media (min-width: 1024px) {
        margin: 48px 0 78px;
    }
`;

const LogoSection = styled.div`
    height: 33px;
`;

const ListSection = styled.div`
    background-color: var(--DarkViolet);
    border-radius: 10px;
    left: 0;
    margin: 0 auto;
    opacity: ${({vis}) => (vis ? '0' : '1')};
    padding: 40px 24px;
    position: absolute;
    right: 0;
    top: 56px;
    transition: all 0.3s linear;
    transform: ${({vis}) =>
        vis ? 'translateY(-150%)' : 'translateY(0)'};
    width: clamp(330px, 70vw, 550px);

    @media (min-width: 768px) {
        background-color: transparent;
        border-radius: 0;
        display: flex;
        justify-content: space-between;
        margin-left: 45px;
        opacity: 1;
        padding: 0;
        position: static;
        transform: translateY(0);
        transition-duration: 0;
        transition: opacity 0s linear;
        width: 100%;
    }
`;

const HamburgerSection = styled.div`
    border-bottom: 3px solid var(--GrayishViolet);
    height: 21px;
    width: 24px;

    &::after {
        border-top: 3px solid var(--GrayishViolet);
        content: '';
        display: block;
        height: 21px;
        transform: translateY(-100%);
        width: 24px;
    }

    &::before {
        border-bottom: 3px solid var(--GrayishViolet);
        content: '';
        display: block;
        height: 21px;
        transform: translateY(-9px);
        width: 24px;
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

const Nav = () => {
    const [listSectionIsOpen, setListSectionIsOpen] = useState(false);

    const openListHandler = () => setListSectionIsOpen(!listSectionIsOpen);

    return (
        <NavigationWrapper>
            <LogoSection>
                <Link to='/'>
                    <Logo color='var(--VeryDarkBlue)' />
                </Link>
            </LogoSection>
            <ListSection vis={listSectionIsOpen}>
                <List />
                <HeaderNavButtons />
            </ListSection>
            <HamburgerSection onClick={openListHandler} />
        </NavigationWrapper>
    );
};

export default Nav;
