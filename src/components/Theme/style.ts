import styled from "styled-components";

export const Button = styled.button`
    border: 1px solid #555;
    border-radius: 10px;
    padding: 8px;
    margin: 8px 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #fff;
    background: transparent;
    transition: all ease 0.4s;
    
    &:hover {
        background-color: #ccc;
        color: #17181f
    }
`;