import React from 'react';
import styled from 'styled-components';

import InformationSection from '../components/Sections/Information-section';
import Shorten from '../components/Sections/Shorten';

const Main = styled.main`
    background-color: var(--VeryLightGray);
`;

const Home = () => {
    return (
        <Main>
            <Shorten />
            <InformationSection />
        </Main>
    );
};

export default Home;
