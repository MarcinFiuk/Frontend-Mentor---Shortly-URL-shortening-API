import React from 'react';
import styled from 'styled-components';

import { iconsElements } from './../../menu-elements';

const SocialList = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-top: 8px;
    width: 168px;

    @media (min-width: 768px) {
        align-items: space-between;
        flex-direction: column;
        height: 150px;
        margin-left: 50px;
        margin-top: 0;
        width: auto;
    }

    @media (min-width: 1124px) {
        flex-direction: row;
        margin-left: 101px;
        width: 168px;
    }
`;

const SocialElements = () => {
    return (
        <SocialList>
            {iconsElements.map(({ id, icon }) => {
                return (
                    <li key={id}>
                        <a href='/'>{icon}</a>
                    </li>
                );
            })}
        </SocialList>
    );
};

export default SocialElements;
