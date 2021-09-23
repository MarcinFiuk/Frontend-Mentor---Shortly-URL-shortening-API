import React from 'react';
import styled from 'styled-components';

import Button from './../../UI/Button-primary';

import backgroundImageMobile from './../../assets/bg-boost-mobile.svg';
import backgroundImageDesktop from './../../assets/bg-boost-desktop.svg';

const BootsWrapper = styled.div`
    align-items: center;
    background-size: 100% 100%;
    background: var(--DarkViolet) url(${backgroundImageMobile}) no-repeat;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: center;
    width: 100%;

    @media (min-width: 768px) {
        background-image: url(${backgroundImageDesktop});
        height: 250px;
    }
`;

const Title = styled.h2`
    color: var(--White);
    font-size: 2.8rem;
    font-weight: var(--WeightBold);
    letter-spacing: -0.7px;
    line-height: 48px;
    margin-bottom: 16px;
`;

const Boost = () => {
    return (
        <BootsWrapper>
            <Title>Boost your links today</Title>
            <Button>get started</Button>
        </BootsWrapper>
    );
};

export default Boost;
