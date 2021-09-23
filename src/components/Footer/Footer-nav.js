import React from 'react';
import styled from 'styled-components';

import List from '../Navigation-elements/Footer-list';
import Logo from './../../assets/Logo';
import SocialElements from './../Navigation-elements/Social-elements';

const NavWrapper = styled.div`
    background-color: var(--VeryDarkViolet);
    padding: 56px;

    @media (min-width: 1124px) {
        padding: 72px 165px;
    }

    & nav {
        align-items: center;
        display: flex;
        flex-direction: column;

        @media (min-width: 768px) {
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
        }
    }
`;

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 48px;

    @media (min-width: 768px) {
        align-items: flex-start;
        flex-direction: row;
        justify-content: flex-end;
        margin-top: 0;
    }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <nav>
                <Logo color='var(--White)' />
                <ListWrapper>
                    <List />
                    <SocialElements />
                </ListWrapper>
            </nav>
        </NavWrapper>
    );
};

export default Nav;
