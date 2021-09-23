import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
:before,
:after{
    margin:0;
    padding:0;
    box-sizing:border-box}

:root{
    font-size:62.5%;
    --White: hsl(0,0%,100%);
    --Cyan: hsl(180, 66%, 49%);
    --DarkViolet: hsl(257, 27%, 26%);
    --Red: hsl(0, 87%, 67%);
    --Gray: hsl(0, 0%, 75%);
    --GrayishViolet: hsl(257, 7%, 63%);
    --VeryDarkBlue: hsl(255, 11%, 22%);
    --VeryDarkViolet: hsl(260, 8%, 14%);
    --VeryLightGray:hsl(225, 33%, 95%);
    --WeightNormal:500;
    --WeightBold:700;
}

body{
    margin:0 auto;
    font-family: 'Poppins','Roboto', sans-serif;
    font-weight: var(--WeightNormal);
    max-width:1680px;
}
`;
