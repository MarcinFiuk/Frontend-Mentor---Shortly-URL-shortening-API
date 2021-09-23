import React from 'react';
import styled from 'styled-components';

const SubListElement = styled.ul`
    list-style: none;
    margin-top: 22px;
`;

const SingleSubListElement = styled.li`
    cursor: pointer;
    font-weight: var(--WeightNormal);
    line-height: 2.2rem;
    margin: 10px 0;
    opacity: 0.7;

    &:hover {
        color: var(--Cyan);
    }
`;

const SubList = ({ subLinks }) => {
    return (
        <SubListElement>
            {subLinks.map(({ id, title }) => (
                <SingleSubListElement key={id}>{title}</SingleSubListElement>
            ))}
        </SubListElement>
    );
};

export default SubList;
