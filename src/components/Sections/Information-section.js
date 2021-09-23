import React from 'react';
import styled from 'styled-components';

import Feature from '../Features/Feature';

import BrandRecognition from './../../assets/icons/Brand-recognition-icon';
import DetailedRecords from './../../assets/icons/Detailed-records-icon';
import FullyCustomizable from './../../assets/icons/Fully-customizable-icon';

const SectionWrapper = styled.section`
    background-color: var(--VeryLightGray);
    display: flex;
    flex-direction: column;
    padding: 0 24px 80px;

    @media (min-width: 768px) {
        padding-bottom: 120px;
        padding-top: 36px;
    }

    @media (min-width: 1240px) {
        padding-inline: 165px;
    }
`;

const Title = styled.h2`
    color: var(--VeryDarkBlue);
    font-size: clamp(2.8rem, 4vw, 4rem);
    font-weight: var(--WeightBold);
    letter-spacing: -0.7px;
    line-height: 48px;
    text-align: center;

    @media (min-width: 1024px) {
        letter-spacing: -1px;
    }
`;

const Paragraph = styled.p`
    color: var(--GrayishViolet);
    font-size: 1.6rem;
    font-weight: var(--WeightNormal);
    letter-spacing: 0.11px;
    line-height: 28px;
    margin: 16px auto 0;
    max-width: 540px;
    text-align: center;

    @media (min-width: 1024px) {
        font-size: 1.8rem;
        line-height: 32px;
        margin-top: 18px;
    }
`;

const FeaturesWrapper = styled.div`
    overflow: hidden;
    position: relative;
    width: 100%;

    @media (min-width: 1024px) {
        display: flex;
        gap: 32px;
        margin-top: 56px;
    }

    &:before {
        background-color: var(--Cyan);
        content: '';
        display: block;
        height: calc(100% - 92px);
        left: 50%;
        position: absolute;
        top: 92px;
        transform: translateX(-50%);
        width: 8px;

        @media (min-width: 1024px) {
            height: 8px;
            left: 0;
            top: 50%;
            transform: translate(0, -50%);
            width: 100%;
        }
    }
`;

const InformationSection = () => {
    return (
        <SectionWrapper>
            <Title>Advanced Statistics</Title>
            <Paragraph>
                Track how your links are performing across the web with our
                advanced statistics dashboard.
            </Paragraph>
            <FeaturesWrapper>
                <Feature
                    mgr='44px 0 88px'
                    icon={<BrandRecognition />}
                    title='Brand Recognition'
                    desc='Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
                />
                <Feature
                    mgr='88px 0 44px'
                    icon={<DetailedRecords />}
                    title='Detailed Records'
                    desc='Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
                />
                <Feature
                    mgr='132px 0 0'
                    icon={<FullyCustomizable />}
                    title='Fully Customizable'
                    desc='Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
                />
            </FeaturesWrapper>
        </SectionWrapper>
    );
};

export default InformationSection;
