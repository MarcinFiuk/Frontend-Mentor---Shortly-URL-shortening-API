import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { headerElements } from '../../menu-elements';

const ListElement = styled.ul`
    color: var(--White);
    list-style: none;

    @media (min-width: 768px) {
        align-items: center;
        color: var(--GrayishViolet);
        display: flex;
    }
`;

const SingleListElement = styled.li`
    font-size: 1.8rem;
    font-weight: var(--WeightBold);
    line-height: 27px;
    margin-bottom: 30px;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 1.5rem;
        line-height: 22px;
        margin: 0 30px 0;

        :hover {
            color: var(--VeryDarkBlue);
        }
    }
`;

const SingleListElementLink = styled(Link)`
    color: inherit;
    text-decoration: none;
`;

const HeaderList = () => {
    return (
        <ListElement>
            {headerElements.map(({ id, title, href }) => {
                return (
                    <SingleListElement key={id}>
                        <SingleListElementLink to={href}>
                            {title}
                        </SingleListElementLink>
                    </SingleListElement>
                );
            })}
        </ListElement>
    );
};

export default HeaderList;
