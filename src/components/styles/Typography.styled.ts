import styled, { css } from 'styled-components';
import { FontIds } from '../../types';
import { mediaQuery } from '../../utils/mediaQueries.styled';
import { FontStyles } from '../Typography';

interface TextProps {
  $fontStyles: FontStyles
}

const Text = styled.span<TextProps>(({theme, $fontStyles}) => css`
  ${$fontStyles.color && css`
    color: ${$fontStyles.color};
  `}

  font-weight: ${$fontStyles.fontWeight};

  ${() => {
    switch(FontIds[theme.currentFont]) {
      case FontIds.sansSerif:
        return css`
          font-family: ${theme.fontFamily.Inter};
        `
      case FontIds.serif:
        return css`
          font-family: ${theme.fontFamily.Lora};
        `
      case FontIds.mono:
        return css`
          font-family: ${theme.fontFamily.Inconsolata};
        `
    }
  }}

  font-size: ${$fontStyles.fontSize.mobile};

  ${$fontStyles.fontSize.tablet && mediaQuery('sm', css`
    font-size: ${$fontStyles.fontSize.tablet};
  `)}

  line-height: ${$fontStyles.lineHeight.mobile[theme.currentFont]};

  ${$fontStyles.lineHeight.tablet && mediaQuery('sm', css`
    line-height: ${$fontStyles.lineHeight.tablet[theme.currentFont]};
  `)}
`);

export {
  Text
};