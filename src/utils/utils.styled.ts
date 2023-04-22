import { useContext } from 'react';
import { ThemeContext, css } from 'styled-components';
import { mediaQuery } from './mediaQueries.styled';
import { FontIds, KeyOfFont } from '../types';
import { LineHeightViewport } from '../components';

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

const getCurrentFontFamily = (currentFont: KeyOfFont) => {
  const { fontFamily } = useContext(ThemeContext);

  switch(FontIds[currentFont]) {
    case FontIds.sansSerif:
      return fontFamily.Inter;
    case FontIds.serif:
      return fontFamily.Lora;
    case FontIds.mono:
      return fontFamily.Inconsolata;
  }
};

const getCurrentLineHeight = (currentFont: KeyOfFont, lineHeight: LineHeightViewport) => css`
  line-height: ${lineHeight.mobile[currentFont]};

  ${lineHeight.tablet && mediaQuery('sm', css`
    line-height: ${lineHeight.tablet[currentFont]};
  `)
}`;

export {
  widthCSS,
  getCurrentFontFamily,
  getCurrentLineHeight
};