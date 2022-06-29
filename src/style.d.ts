import "styled-components";

declare module 'styled-componnets' {
    export interface DefaultTheme {
        title: string;

        colors: {
            background: string;
            text: string;
        },
    }
}