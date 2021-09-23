import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background: transparent;
    border: none;
    color: var(--White);
    cursor: pointer;
    font-family: inherit;
    font-size: 1.8rem;
    font-weight: var(--WeightBold);
    line-height: 27px;
    margin: 32px 0 24px;
    width: 100%;

    @media (min-width: 768px) {
        color: var(--GrayishViolet);
        font-size: 1.5rem;
        height: 40px;
        line-height: 22px;
        margin: 0;
        width: 105px;
    }
`;

const ButtonGhost = ({ children }) => {
    return <Button>{children}</Button>;
};

export default ButtonGhost;
