import React from 'react';
import styled from 'styled-components';

import ButtonPrimary from '../../UI/Button-primary';
import ButtonGhost from './../../UI/Button-ghost';

const ButtonWrapper = styled.div`
    border-top: 1px solid hsla(257, 7%, 63%, 0.25);
    width: 100%;

    @media (min-width: 768px) {
        border-top: none;
        margin-left: auto;
        width: auto;
    }
`;

const HeaderNavButtons = () => {
    return (
        <ButtonWrapper>
            <ButtonGhost>Login</ButtonGhost>
            <ButtonPrimary header>sign up</ButtonPrimary>
        </ButtonWrapper>
    );
};

export default HeaderNavButtons;
