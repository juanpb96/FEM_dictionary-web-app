import styled, { css, keyframes } from 'styled-components';
import { mediaQuery } from '../../utils/mediaQueries.styled';
import { FontIds } from '../../types';

interface ListItemProps {
  $mode: string;
}

const ListItem = styled.div<ListItemProps>(({theme, $mode}) => css`
  cursor: pointer;
  color: ${theme.colors.text};
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-weight: 700;
  font-family: inherit;
  transition: color 0.2s ease-in-out;

  &:is(:hover, :focus) {
    color: ${theme.colors.purpleFlower};
  }

  &.selected {
    outline: 2px solid ${theme.colors.purpleFlower};
    outline-offset: 3px;
  }

  ${mediaQuery('sm', css`
    font-size: 1.125rem;
  `)}

  ${() => {
    switch($mode) {
      case FontIds.sansSerif:
        return css`
          font-family: ${theme.fontFamily.Inter};
        `;
      case FontIds.serif:
        return css`
          font-family: ${theme.fontFamily.Lora};
        `;
      case FontIds.mono:
        return css`
          font-family: ${theme.fontFamily.Inconsolata};
        `;
    }
  }}
`);

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(-20%);
  }
`;

const ListBox = styled.div(({theme}) => css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 11.4375rem;
  padding: 1.5rem;
  position: absolute;
  top: calc(100% + 10.5px);
  right: 0;
  border-radius: 1rem;
  box-shadow: 0px 5px 30px ${theme.colors.boxShadow};
  background-color: ${theme.colors.backgroundPrimary};
  animation: ${fadeInDown} 0.3s linear;
  transition: background-color 150ms ease-in-out;

  &.closed {
    display: none;
  }

  &.closing {
    animation: ${fadeInUp} 0.3s linear;
  }

  ${mediaQuery('md', css`
    top: calc(100% + 18px);
  `)}
`);

// TODO: Add mobile style (font)
const ComboBox = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row-reverse;
  place-items: center;
  gap: 1.125rem;
`;

const DropdownContainer = styled.div`
  position: relative;
`;

export {
  ListItem,
  ListBox,
  ComboBox,
  DropdownContainer
};