import styled, { css } from 'styled-components';
import { mediaQuery } from '../../utils/mediaQueries.styled';

const VerticalLine = styled.span`
  display: inline-block;
  width: 1px;
  height: 2rem;
  background-color: ${({theme}) => theme.colors.mercury};
`;

const Controls = styled.div`
  display: flex;
  place-items: center;
  gap: 1rem;
  margin-left: auto;

  ${mediaQuery('sm', css`
    gap: 1.625rem;
  `)}
`;

const HeaderContainer = styled.header(({theme}) => css`
  display: flex;
  width: ${theme.width.mobile};
  max-width: ${theme.width.desktop};
  margin-inline: auto;
  padding-block: 1.5rem;

  ${mediaQuery('sm', css`
    width: ${theme.width.tablet};
    padding-block: 3.625rem 3.2188rem;
  `)}
`);

export {
  VerticalLine,
  Controls,
  HeaderContainer
};