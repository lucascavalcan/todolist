import "styled-components";

declare module 'styled-componnets' {
    export interface DefaultTheme {
        title: string;

        colors: {
            background: string;
            text: string;
        },

        input: {
            background: string;
            text: string;
        }

        search: {
            text: string;
        }
    }
}