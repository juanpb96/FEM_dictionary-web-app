import { css } from 'styled-components';

const screen = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px'
};

type ScreenTypes = typeof screen;
type KeysOfScreen = keyof ScreenTypes;

export const mediaQuery = (type: KeysOfScreen, styles: any) => css`
  @media screen and (min-width: ${screen[type]}) {
    ${styles}
  }
`;