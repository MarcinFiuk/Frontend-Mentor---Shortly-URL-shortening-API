import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ShortenInput from './Shorten-input';
import ShortenOutput from './Shorten-output';
import Loader from './../../UI/Loader';
import { url } from './../../GlobalVariables';
import ErrorComponent from '../../UI/Error-component';

const ShortenWrapper = styled.section`
    padding-inline: 24px;
    transform: translateY(-80px);

    @media (min-width: 768px) {
        padding-inline: 80px;
        transform: translateY(-84px);
    }
    @media (min-width: 1024px) {
        padding-inline: 165px;
    }
`;

const Shorten = () => {
    const [links, setLinks] = useState([]);
    const [query, setQuery] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [copiedItem, setCopiedItem] = useState(null);

    useEffect(() => {
        const linksFromLocalStorage = localStorage.getItem('links');
        if (linksFromLocalStorage) {
            const parsedLinks = JSON.parse(linksFromLocalStorage);
            setLinks(parsedLinks);
        }
    }, []);

    useEffect(() => {
        const stringifiedLinks = JSON.stringify(links);
        localStorage.setItem('links', stringifiedLinks);
    }, [links]);

    useEffect(() => {
        const fetchURL = async (query) => {
            setError('');
            setIsLoading(true);

            try {
                const res = await fetch(`${url}?url=${query}`);

                if (!res.ok)
                    throw new Error(
                        'Sorry, currently data is not available. Try again later'
                    );

                const data = await res.json();

                const outputLink = {
                    id: Math.random().toString(),
                    initialLink: data.result.original_link,
                    transformedLink: data.result.short_link3,
                };

                setLinks((prev) => [...prev, outputLink]);
                setIsLoading(false);
            } catch (e) {
                setError(e.message);
                setIsLoading(false);
            }
        };

        if (query !== '') {
            fetchURL(query);
            setQuery('');
        }
    }, [query]);

    const getShortenLinksHandler = (inputValue) => {
        setQuery(inputValue);
    };

    const markCopiedHandler = (i) => {
        setCopiedItem(i);
    };

    return (
        <ShortenWrapper>
            <ShortenInput getLinks={getShortenLinksHandler} />
            {isLoading && <Loader />}
            {links.map(({ id, initialLink, transformedLink }, index) => {
                return (
                    <ShortenOutput
                        key={id}
                        initialLink={initialLink}
                        transformedLink={transformedLink}
                        isCopied={copiedItem}
                        i={index}
                        detectCopiedElement={markCopiedHandler}
                    />
                );
            })}
            {error && <ErrorComponent>{error}</ErrorComponent>}
        </ShortenWrapper>
    );
};

export default Shorten;
