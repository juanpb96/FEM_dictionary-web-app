import { useContext } from 'react';
import { KeyOfColors } from '../themes/default';
import { KeyOfFont } from '../types';
import * as S from './styles/Typography.styled';
import { FontContext, FontContextType } from '../contexts';

type Tag = 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6'
| 'p'
| 'span';

type FontLineHeight = {
  [K in KeyOfFont]: string;
};

export type LineHeightViewport = {
  mobile: FontLineHeight;
  tablet?: FontLineHeight;
}

type Viewport = {
  mobile: string;
  tablet?: string;
};

// TODO: Consider removing margin or other styles not associated to font styles
export interface FontStyles {
  color?: KeyOfColors;
  fontWeight: 700 | 400;
  fontSize: Viewport;
  lineHeight: LineHeightViewport;
  marginBottom?: string;
}

interface TypographyProps {
  as: Tag;
  text: string;
  fontStyles: FontStyles;
}

// TODO: Consider adding font-style italic for a particular font-family
export const Typography = ({
  as = 'span',
  text,
  fontStyles
}: TypographyProps) => {
  const { currentFont } = useContext(FontContext) as FontContextType;

  return (
    <S.Text 
      as={as}
      $fontStyles={fontStyles}
      $currentFont={currentFont}
    >
      {text}
    </S.Text>
  );
};