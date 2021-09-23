import React from 'react';
import styled, { keyframes } from 'styled-components';

const blinking = keyframes`
  0% {
    height: 15px;
    opacity: 1;
  }
  50% {
    height: 12px;
    opacity: 0;
  }
  100% {
    height: 15px;
    opacity: 1;
  }
`;

const Placeholder = styled.div`
    background-color: var(--White);
    border-radius: 5px;
    color: var(--DarkViolet);
    font-size: 1.6rem;
    letter-spacing: 0.12px;
    margin-top: 24px;
    padding: 6px 0 16px;
    text-align: center;
    text-transform: uppercase;
    width: 100%;

    @media (min-width: 1024px) {
        font-size: 2rem;
        letter-spacing: 0.15px;
    }

    & span {
        animation: ${blinking} 1000ms infinite ease-in-out;
        background: var(--DarkViolet);
        display: inline-block;
        height: 16px;
        margin: 0 6px;
        width: 2px;
    }
`;

const Loader = () => {
    return (
        <Placeholder>
            <div>Loading</div>
            <span style={{ animationDelay: '800ms' }}></span>
            <span style={{ animationDelay: '600ms' }}></span>
            <span style={{ animationDelay: '400ms' }}></span>
            <span style={{ animationDelay: '200ms' }}></span>
            <span></span>
            <span style={{ animationDelay: '200ms' }}></span>
            <span style={{ animationDelay: '400ms' }}></span>
            <span style={{ animationDelay: '600ms' }}></span>
            <span style={{ animationDelay: '800ms' }}></span>
        </Placeholder>
    );
};

export default Loader;
