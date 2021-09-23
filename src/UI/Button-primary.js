import React from 'react';
import styled, { css } from 'styled-components';

const ButtonElement = styled.button`
    background-color: var(--Cyan);
    border-radius: 28px;
    border: none;
    color: var(--White);
    cursor: pointer;
    font-family: inherit;
    font-size: 2rem;
    font-weight: var(--WeightBold);
    height: 56px;
    line-height: 30px;
    text-transform: capitalize;
    width: 196px;

    ${({ header }) =>
        header &&
        css`
            font-size: 1.8rem;
            height: 48px;
            width: 100%;
        `}

    &:hover {
        background-color: hsl(180, 56%, 75%);
    }

    ${({ shorten }) =>
        shorten &&
        css`
            border-radius: 5px;
            font-size: 1.8rem;
            height: 48px;
            line-height: 27px;
            width: 100%;
        `}

    ${({ copyB }) =>
        copyB &&
        css`
            border-radius: 5px;
            font-size: 1.6rem;
            height: 40px;
            line-height: 24px;
            width: 100%;
        `}

    ${({ copyB, bgc }) =>
        copyB &&
        bgc &&
        css`
            background-color: var(--DarkViolet);
        `}


    @media (min-width: 768px) {
        ${({ header }) =>
            header &&
            css`
                font-size: 1.5rem;
                height: 40px;
                line-height: 22px;
                width: 105px;
            `}

        ${({ shorten }) =>
            shorten &&
            css`
                font-size: 2rem;
                height: 64px;
                line-height: 30px;
                width: 188px;
            `}

            ${({ copyB }) =>
            copyB &&
            css`
                width: 103px;
            `}
    }
`;

const Button = ({
    children,
    header,
    shorten,
    copyButton,
    isCopied,
    onClick,
    bgc,
}) => {
    return (
        <ButtonElement
            header={header}
            shorten={shorten}
            copyB={copyButton}
            onClick={onClick}
            isCopied={isCopied}
            bgc={bgc}
        >
            {children}
        </ButtonElement>
    );
};

export default Button;
