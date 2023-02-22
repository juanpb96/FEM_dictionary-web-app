import styled, { css } from 'styled-components';
import { widthCSS } from '../../utils/utils.styled';

const Emoji = styled.img`
  width: 4rem;
  aspect-ratio: 1 / 1;
  margin: 0 auto 2.75rem;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.25rem;
  font-family: inherit;
  line-height: 1.5125rem;
  margin-bottom: 1.5rem;
`;

const Message = styled.p(({theme}) => css`
  color: ${theme.colors.paleSky};
  font-weight: 400;
  font-size: 1.125rem;
  font-family: inherit;
  line-height: 1.5rem;
`);

const NoFoundViewContainer = styled.section`
  ${widthCSS}
  margin: 8.25rem auto 0;
  text-align: center;
`;

export {
  Emoji,
  Title,
  Message,
  NoFoundViewContainer
};