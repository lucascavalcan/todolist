import React from 'react'
import styled from 'styled-components'
import theme from 'styled-theming';
import {createGlobalStyle} from "styled-components";

type Props = {
    toggleTheme: () => void
}

export const Container = styled.div<Props>`
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text}; ;
    min-height: 100vh;
`
;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 10px;
`;


export const Header = styled.h1`
    margin: 0;
    padding: 0;
    color: ${props => props.theme.colors.text};
    text-align: center;
    border-bottom: 1px solid #444;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 40px;
`;

export const Button = styled.button`
    
`;

