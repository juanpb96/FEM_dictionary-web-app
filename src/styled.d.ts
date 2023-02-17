// import original module declarations
import 'styled-components';

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
      orangeSunset: string;
      boxShadow: string;
      background: string;
    };

    fontFamily: {
      Inconsolata: string;
      Inter: string;
      Lora: string;
    };
  }
}