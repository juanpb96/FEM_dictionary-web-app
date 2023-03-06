import { KeyOfColors } from '../themes/default';
import { KeyOfFont } from '../types';
import * as S from './styles/Typography.styled';

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

type LineHeightViewport = {
  mobile: FontLineHeight;
  tablet?: FontLineHeight;
}

type Viewport = {
  mobile: string;
  tablet?: string;
};

export interface FontStyles {
  color?: KeyOfColors;
  fontWeight: 700 | 400;
  fontSize: Viewport;
  lineHeight: LineHeightViewport;
}

// TODO: Check if 'children' could be better than 'text'
interface TypographyProps {
  as: Tag;
  text: string;
  fontStyles: FontStyles;
}

export const Typography = ({
  as = 'span',
  text,
  fontStyles
}: TypographyProps) => {
  return (
    <S.Text 
      as={as}
      $fontStyles={fontStyles}
    >
      {text}
    </S.Text>
  );
};