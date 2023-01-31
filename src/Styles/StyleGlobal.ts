import { createGlobalStyle } from "styled-components";

export const StyleGlobal = createGlobalStyle`

    body{
        max-width: 100vw;

        font-family: 'Jaldi', sans-serif;

        scrollbar-width: thin;          
        scrollbar-color: blue orange;

        overflow-x: hidden ;

        background-color: var(--Fundo);
        color: var(--Black);



        #root{
            width: 100%;
            height: 100%;
        }
        .App{
            width: 100%;
            height: 100%;

        scroll-behavior: smooth;

        }

        * {
  scrollbar-width: thin;
  scrollbar-color: blue orange;
}

*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: #EBE9E9;
}

*::-webkit-scrollbar-thumb {
  background-color: var(--Grey100);
  border-radius: 20px;
}
    }


    :root{
        --PrincipalOrange: ${({ theme }) => theme.colors.PrincipalOrange};
        --PrincipalBlue:${({ theme }) => theme.colors.PrincipalBlue};
        --PrincipalRed:${({ theme }) => theme.colors.PrincipalRed};

        --Black:${({ theme }) => theme.colors.Black};
        --Withe: ${({ theme }) => theme.colors.Withe};
        --WitheFocus:${({ theme }) => theme.colors.WitheFocus};

        --Grey100: ${({ theme }) => theme.colors.Grey50};
        --Grey50:${({ theme }) => theme.colors.Grey50};
        --Fundo:${({ theme }) => theme.colors.Fundo};


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
