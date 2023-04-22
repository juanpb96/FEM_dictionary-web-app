// import original module declarations
import 'styled-components';
import { KeyOfFont } from './types';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      night: string;
      darkJungle: string;
      heavyMetal: string;
      charcoal: string;
      paleSky: string;
      mercury: string;
      whiteSmoke: string;
      white: string;
      purpleFlower: string;
      error: string;
      text: string;
      boxShadow: string;
      backgroundPrimary: string;
      backgroundSecondary: string;
    };
    fontFamily: {
      Inconsolata: string;
      Inter: string;
      Lora: string;
    };
    currentFont: KeyOfFont;
    width: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    screen: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    }
  }
}