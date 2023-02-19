import styled from 'styled-components';

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
`;

const HeaderContainer = styled.header`
  display: flex;
  width: ${({theme}) => theme.width.mobile};
  margin: 1.5rem auto;
`;

export {
  VerticalLine,
  Controls,
  HeaderContainer
};