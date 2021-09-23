import React from 'react';
import styled from 'styled-components';

import ButtonPrimary from './../../UI/Button-primary';
import BgcPicture from './../../assets/Illustration-working';

const HeroWrapper = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
        align-items: center;
        flex-direction: row;
        gap: 6.87vw;
    }
`;

const PictureWrapper = styled.div`
    width: 540px;
    height: 337px;

    @media (min-width: 560px) {
        align-self: center;
    }

    @media (min-width: 1024px) {
        height: 400px;
        order: 2;
    }

    @media (min-width: 1240px) {
        height: 482px;
        width: 445px;
    }
`;

const ContentWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 37px;
    text-align: center;

    @media (min-width: 1024px) {
        align-items: flex-start;
        margin-top: 0;
        text-align: left;
    }
`;

const Title = styled.h1`
    color: var(--VeryDarkBlue);
    font-size: clamp(4.2rem, 5.5vw, 8rem);
    font-weight: var(--WeightBold);
    letter-spacing: -1.05px;
    line-height: 48px;

    @media (min-width: 1024px) {
        letter-spacing: -2px;
        line-height: 55px;
    }

    @media (min-width: 1240px) {
        line-height: 90px;
    }
`;
const Paragraph = styled.p`
    color: var(--GrayishViolet);
    font-size: clamp(1.8rem, 1.5vw, 2.2rem);
    letter-spacing: 0.12px;
    line-height: 30px;
    margin: 15px 0 32px;

    @media (min-width: 1024px) {
        letter-spacing: 0.15px;
        line-height: 36px;
        margin: 0 0 38px;
    }

    @media (min-width: 1240px) {
    }
`;

const HeroSection = () => {
    return (
        <HeroWrapper>
            <PictureWrapper>
                <BgcPicture />
            </PictureWrapper>
            <ContentWrapper>
                <Title>More than just shorter links</Title>
                <Paragraph>
                    Build your brand’s recognition and get detailed insights on
                    how your links are performing.
                </Paragraph>
                <ButtonPrimary>get started</ButtonPrimary>
            </ContentWrapper>
        </HeroWrapper>
    );
};

export default HeroSection;
