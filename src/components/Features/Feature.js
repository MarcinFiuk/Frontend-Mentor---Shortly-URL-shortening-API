import React from 'react';
import styled from 'styled-components';

const FeatureWrapper = styled.div`
    background-color: var(--White);
    margin-top: 92px;
    padding: 41px 32px;
    position: relative;
    text-align: center;

    @media (min-width: 1024px) {
        margin: ${({ mgr }) => mgr};
        text-align: left;
    }
`;

const IconContainer = styled.div`
    align-items: center;
    background-color: var(--DarkViolet);
    border-radius: 50%;
    display: flex;
    height: 88px;
    justify-content: center;
    left: 50%;
    position: absolute;
    top: -44px;
    transform: translateX(-50%);
    width: 88px;

    @media (min-width: 1024px) {
        left: 32px;
        transform: translateX(0);
    }
`;

const Title = styled.h3`
    color: var(--VeryDarkBlue);
    font-size: 2.2rem;
    font-weight: var(--WeightBold);
    line-height: 33px;
    margin: 36px 0 12px;
`;

const Paragraph = styled.p`
    color: var(--GrayishViolet);
    font-size: 1.5rem;
    line-height: 26px;
`;

const Feature = ({ icon, title, desc, mgr }) => {
    return (
        <FeatureWrapper mgr={mgr}>
            <IconContainer>{icon}</IconContainer>
            <Title>{title}</Title>
            <Paragraph>{desc}</Paragraph>
        </FeatureWrapper>
    );
};

export default Feature;
