import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { footerElements } from '../../menu-elements';
import SubList from './Sub-list';

const ListElement = styled.ul`
    color: var(--White);
    list-style: none;

    @media (min-width: 768px) {
        align-items: flex-start;
        display: flex;
        max-width: 461px;
    }
`;

const SingleListElement = styled.li`
    font-size: 1.6rem;
    font-weight: var(--WeightBold);
    letter-spacing: -0.25px;
    line-height: 2.4rem;
    margin-bottom: 40px;
    text-align: center;

    @media (min-width: 768px) {
        line-height: 1.5rem;
        margin-bottom: 0;
        max-width: 153px;
        min-width: 120px;
        text-align: left;
        width: 11vw;
    }
`;

const SingleListElementLink = styled(Link)`
    color: inherit;
    text-decoration: none;
`;

const FooterList = () => {
    return (
        <ListElement>
            {footerElements.map(
                ({ id, title, href, subMenu: subMenuLinks }) => {
                    return (
                        <SingleListElement key={id}>
                            <SingleListElementLink to={href}>
                                {title}
                            </SingleListElementLink>
                            <SubList subLinks={subMenuLinks} />
                        </SingleListElement>
                    );
                }
            )}
        </ListElement>
    );
};

export default FooterList;
