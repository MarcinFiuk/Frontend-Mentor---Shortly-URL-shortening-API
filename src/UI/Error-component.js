import React from 'react';
import styled from 'styled-components';

const ErrorWrapper = styled.div`
    background-color: var(--White);
    border-radius: 5px;
    font-size: 1.6rem;
    letter-spacing: 0.12px;
    line-height: 36px;
    margin-top: 24px;
    padding: 6px 0 16px;
    width: 100%;

    @media (min-width: 1024px) {
        font-size: 2rem;
        letter-spacing: 0.15px;
        padding: 16px 24px 16px 32px;
    }
`;
const ErrorParagraph = styled.p`
    color: var(--Red);
    margin-bottom: 6px;
    padding-inline: 16px;
    text-align: center;

    @media (min-width: 1024px) {
        margin: 0;
        padding: 0;
    }
`;

const ErrorComponent = ({ children }) => {
    return (
        <ErrorWrapper>
            <ErrorParagraph>{children}</ErrorParagraph>
        </ErrorWrapper>
    );
};

export default ErrorComponent;
