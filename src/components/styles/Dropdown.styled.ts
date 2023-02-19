import styled, { css, keyframes } from 'styled-components';
import { Fonts } from '../../types/types';

interface ListItemProps {
  $mode: string;
}

const ListItem = styled.div<ListItemProps>`
  cursor: pointer;
  color: ${({theme}) => theme.colors.heavyMetal};
  font: 700 1.125rem/1.5rem 'Inter';
  transition: color 0.2s ease-in-out;

  &:is(:hover, :focus) {
    color: ${({theme}) => theme.colors.purpleFlower};
  }

  &.selected {
    outline: 2px solid ${({theme}) => theme.colors.purpleFlower};
    outline-offset: 3px;
  }

  ${props => {
    switch(props.$mode) {
      case Fonts.sansSerif:
        return css`
          font-family: ${({theme}) => theme.fontFamily.Inter};
        `
      case Fonts.serif:
        return css`
          font-family: ${({theme}) => theme.fontFamily.Lora};
        `
      case Fonts.mono:
        return css`
          font-family: ${({theme}) => theme.fontFamily.Inconsolata};
        `
    }
  }}
`;

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

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 11.4375rem;
  padding: 1.5rem;
  position: absolute;
  top: calc(100% + 10.5px);
  right: 0;
  border-radius: 1rem;
  box-shadow: 0px 5px 30px ${({theme}) => theme.colors.boxShadow};
  background-color: ${({theme}) => theme.colors.background};
  animation: ${fadeInDown} 0.3s linear;

  &.closed {
    display: none;
  }

  &.closing {
    animation: ${fadeInUp} 0.3s linear;
  }
`;

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