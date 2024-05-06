import { createGlobalStyle } from 'styled-components';
import { normalize } from './normalize';
import { Colors } from '../design-system/constants';

/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
    ${normalize}
    html {
        font-size: 62.5%;
    }

    #webpack-dev-server-client-overlay-div,
    #webpack-dev-server-client-overlay {
        display: none;
    }

    *, *:before, *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    body {
        font-family: 'DM Sans', 'Roboto', 'sans-serif';
        max-width: 100vw;
        background-color: ${({ theme }) => theme.color.bodyBackground};
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */

        &::-webkit-scrollbar {
            width: 0;
        }
    }

    a {
        color: inherit;
        transition: all 0.3s;
        text-decoration: none;

        &:hover {
            text-decoration: none;
            color: ${({ theme }) => theme.color.primary};
        }
    }

    img {
        width: 100%;
        height: 100%;
    }

    .scroll {
        .scrollbar-track {
            background: transparent;

            &.scrollbar-track-y {
                width: 4px;
            }
        }

        .scrollbar-thumb {
            opacity: 0.5;
            transition: height 0.3s;
            cursor: pointer;
            background: ${p => p.theme.color.primary};
        }
    }


    *::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    *::-webkit-scrollbar {
        width: 3px;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
        opacity: 0.5;
        border-radius: 10px;
    }

    *::-webkit-scrollbar-thumb {
        background: ${Colors.PRIMARY};
        border-radius: 10px;
    }

    *::-webkit-scrollbar-thumb:hover {
        width: 5px;
        height: 5px;
        background: ${Colors.PURPLE700};
    }

`;
