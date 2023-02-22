import { css } from 'styled-components';
import { mediaQuery } from '../mediaQueries.styled';

const widthCSS = (({theme}: any) => css`
  width: ${theme.width.mobile};
  max-width: ${theme.width.desktop};

  ${mediaQuery('sm', css`
    width: ${theme.width.tablet};
  `)}

  ${mediaQuery('lg', css`
    width: ${theme.width.desktop};
  `)}
  
`);

export {
  widthCSS
};