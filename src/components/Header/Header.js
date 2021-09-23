import React from 'react';
import styled from 'styled-components';

import HeaderNav from './Header-nav';
import HeroSection from './Hero-section';

const HeaderWrapper = styled.header`
    overflow: hidden;
    padding: 0 24px 168px;
    position: relative;
    width: 100%;

    @media (min-width: 1024px) {
        padding: 0 95px 152px;
    }

    @media (min-width: 1240px) {
        padding: 0 165px 152px;
    }
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderNav />
            <HeroSection />
        </HeaderWrapper>
    );
};

export default Header;
