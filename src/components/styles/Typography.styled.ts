import styled, { css } from 'styled-components';
import { KeyOfFont } from '../../types';
import { mediaQuery } from '../../utils/mediaQueries.styled';
import { FontStyles } from '../Typography';
import { getCurrentFontFamily, getCurrentLineHeight } from '../../utils/utils.styled';

interface TextProps {
  $fontStyles: FontStyles;
  $currentFont: KeyOfFont;
}

const Text = styled.span<TextProps>(({theme, $fontStyles, $currentFont}) => css`
  ${$fontStyles.color && css`
    color: ${theme.colors[$fontStyles.color]};
  `}

  font-weight: ${$fontStyles.fontWeight};
  font-family: ${getCurrentFontFamily($currentFont)};
  ${getCurrentLineHeight($currentFont, $fontStyles.lineHeight)}
  
  font-size: ${$fontStyles.fontSize.mobile};

  ${$fontStyles.fontSize.tablet && mediaQuery('sm', css`
    font-size: ${$fontStyles.fontSize.tablet};
  `)}

  ${$fontStyles.marginBottom && css`
    margin-bottom: ${$fontStyles.marginBottom};
  `}
`);

export {
  Text
};