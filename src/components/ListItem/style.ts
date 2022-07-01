import styled from "styled-components";

type ContainerProps = {
    done: boolean;

}


export const Container = styled.div(({done}: ContainerProps)=>(
    `
    display: flex;
    background-color:  ${(props: { theme: { input: { background: any; }; }; }) => props.theme.input.background};
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    transition: all ease 0.5s;

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label {
        color: ${(props: { theme: { input: { text: any; }; }; }) => props.theme.input.text};
        text-decoration: ${done ? `line-through` : `initial`};
        transition: all ease 0.5s;
    }
`
));