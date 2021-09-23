import React from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Button from './../../UI/Button-primary';

const OutputWrapper = styled.div`
    background-color: var(--White);
    border-radius: 5px;
    font-size: 1.6rem;
    letter-spacing: 0.12px;
    line-height: 36px;
    margin-top: 24px;
    padding: 6px 0 16px;
    width: 100%;

    @media (min-width: 1024px) {
        align-items: center;
        display: flex;
        font-size: 2rem;
        justify-content: space-between;
        letter-spacing: 0.15px;
        padding: 16px 24px 16px 32px;
    }
`;
const LongLinkParagraph = styled.p`
    color: var(--VeryDarkBlue);
    margin-bottom: 6px;
    overflow: hidden;
    padding-inline: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (min-width: 1024px) {
        margin: 0;
        padding: 0;
    }
`;

const ResultWrapper = styled.div`
    border-top: 1px solid hsl(257, 7%, 63%, 0.25);
    padding-inline: 16px;

    @media (min-width: 1024px) {
        border-top: none;
        display: flex;
        gap: 24px;
        padding: 0;
    }
`;
const ShortLinkParagraph = styled.p`
    color: var(--Cyan);
    margin: 6px 0 8px;

    @media (min-width: 1024px) {
        margin: 0;
    }
`;

const ShortenOutput = ({
    initialLink,
    transformedLink,
    isCopied,
    detectCopiedElement,
    i,
}) => {
    return (
        <OutputWrapper>
            <LongLinkParagraph>{initialLink}</LongLinkParagraph>
            <ResultWrapper>
                <ShortLinkParagraph>{transformedLink}</ShortLinkParagraph>

                <CopyToClipboard text={transformedLink}>
                    <Button
                        copyButton
                        onClick={() => {
                            detectCopiedElement(i);
                        }}
                        bgc={isCopied === i}
                    >
                        {isCopied === i ? 'Copied!' : 'Copy'}
                    </Button>
                </CopyToClipboard>
            </ResultWrapper>
        </OutputWrapper>
    );
};

export default ShortenOutput;
