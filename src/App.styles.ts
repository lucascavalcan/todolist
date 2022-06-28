import styled from "styled-components";
import {UseAppSelector} from "./redux/hooks/useAppSelector";


const theme = UseAppSelector(state => state.theme)

export const Container = styled.div(()=>(
    `
    background-color:  ${theme.status === `Dark` ? `#17181f` : `#fff`};
    color: ${theme.color === `Light` ? `#797a81` : `#17181f`};
    min-height: 100vh;
`
));

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 10px;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    color: ${theme.color === `Light` ? `#fff` : `#17181f`};
    text-align: center;
    border-bottom: 1px solid #444;
    padding-bottom: 20px;
`;

