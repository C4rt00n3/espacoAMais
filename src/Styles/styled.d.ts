import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      PrincipalOrange: string;
      PrincipalBlue: string;
      PrincipalRed: string;
      Black: string;
      Withe: string;
      WitheFocus: string;
      Grey100: string;
      Grey50: string;
      Fundo: string;
    };
  }
}
