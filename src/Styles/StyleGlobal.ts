import { createGlobalStyle } from "styled-components";

export const StyleGlobal = createGlobalStyle`

    body{
        width: 100vw;
        height: 100vh;

        font-family: 'Jaldi', sans-serif;;

        #root{
            width: 100%;
            height: 100%;
        }
        .App{
            width: 100%;
            height: 100%;
        }
    }


    :root{
        --PrincipalOrange: #FF6600;
        --PrincipalBlue:#2417B4;
        --PrincipalRed:#990000;


        --Black: #000;
        --Withe: #fff;
        --WitheFocus: #FBFBFB;

        --Grey100: #423F44;
        --Grey50: #2B2A2A;


        --Font12: 0.75rem;
        --Font14: 0.875rem;
        --Font16: 1rem;
        --Font18: 1.125rem;
        --Font20: 1.25rem;
        --Font24: 1.5rem;
        --Font28: 1.75rem;
        --Font32: 2rem;
        --Font12: 2.25rem;


    }
`;