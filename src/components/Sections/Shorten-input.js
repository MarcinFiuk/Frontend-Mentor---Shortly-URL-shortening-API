import React, { useState } from 'react';
import styled from 'styled-components';

import bgcMobile from './../../assets/bg-shorten-mobile.svg';
import bgcDesktop from './../../assets/bg-shorten-desktop.svg';
import Button from '../../UI/Button-primary';
import { regExUrlValidation } from './../../GlobalVariables';

const Wrapper = styled.form`
    background-color: var(--DarkViolet);
    background-image: url(${bgcMobile});
    background-position: 90px -30px;
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    padding: 24px;
    position: relative;

    @media (min-width: 768px) {
        background-image: url(${bgcDesktop});
        background-position: initial;
        background-size: cover;
        flex-direction: row;
        gap: 24px;
        padding: 40px 45px;
    }

    @media (min-width: 1024px) {
        padding: 52px 64px;
    }
`;

const InputWrapper = styled.div`
    margin-bottom: 16px;
    width: 100%;

    @media (min-width: 768px) {
        margin: 0;
    }
`;

const Input = styled.input`
    border-radius: 5px;
    border: ${({ hasError }) => (hasError ? '3px solid var(--Red)' : 'none')};
    color: var(--VeryDarkBlue);
    font-family: inherit;
    font-size: 1.6rem;
    height: 48px;
    letter-spacing: 0.12px;
    line-height: 36px;
    padding-inline: 16px;
    width: 100%;

    &::placeholder {
        color: ${({ hasError }) =>
            hasError ? 'var(--Red)' : 'var(--VeryDarkBlue)'};
        opacity: 0.5;
    }

    @media (min-width: 768px) {
        font-size: 2rem;
        height: 64px;
        letter-spacing: 0.15px;
        margin-bottom: 0;
    }
`;

const ErrorMessage = styled.span`
    color: var(--Red);
    display: inline-block;
    font-size: 1.6rem;
    font-weight: var(--WeightNormal);
    letter-spacing: 0.08px;
    line-height: 18px;
    margin-top: 4px;

    @media (min-width: 768px) {
        left: 45px;
        position: absolute;
        top: 108px;
    }

    @media (min-width: 1024px) {
        left: 64px;
        top: 120px;
    }
`;

const ShortenInput = ({ getLinks }) => {
    const [inputHasError, setInputHasError] = useState(false);
    const [input, setInput] = useState('');

    const inputChangeHandler = (e) => {
        setInput(e.target.value);
    };

    const clearErrorHandler = () => {
        setInputHasError(false);
    };

    const submitFormHandler = (e) => {
        e.preventDefault();

        setInputHasError(false);

        if (!input.trim()) {
            setInputHasError('Please add a link');
            return;
        }

        if (!regExUrlValidation.test(input)) {
            setInputHasError('Please provide correct url address');
            return;
        }

        getLinks(input);
        setInput('');
    };

    return (
        <Wrapper onSubmit={submitFormHandler}>
            <InputWrapper>
                <Input
                    placeholder='Shorten a link here...'
                    hasError={inputHasError}
                    onChange={inputChangeHandler}
                    value={input}
                    onFocus={clearErrorHandler}
                />
                {inputHasError && <ErrorMessage>{inputHasError}</ErrorMessage>}
            </InputWrapper>{' '}
            <Button shorten>Shorten It!</Button>
        </Wrapper>
    );
};

export default ShortenInput;
