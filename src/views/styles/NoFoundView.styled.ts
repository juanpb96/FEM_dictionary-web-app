import styled from 'styled-components';
import { widthCSS } from '../../utils/utils.styled';

const Emoji = styled.img`
  width: 4rem;
  aspect-ratio: 1 / 1;
  margin: 0 auto 2.75rem;
`;

const NoFoundViewContainer = styled.section`
  ${widthCSS}
  margin: 8.25rem auto;
  text-align: center;
`;

export {
  Emoji,
  NoFoundViewContainer
};