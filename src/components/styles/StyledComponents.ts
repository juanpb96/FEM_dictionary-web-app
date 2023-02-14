import styled, { css } from 'styled-components';
import { Fonts } from '../../types/types';

interface ListItemProps {
  mode: string;
}

const ListItem = styled.div<ListItemProps>`
  cursor: pointer;
  color: ${({theme}) => theme.colors.heavyMetal};
  font: 700 1.125rem/1.5rem 'Inter';
  transition: color .3s ease-in-out;

  &:is(:hover, :focus) {
    color: ${({theme}) => theme.colors.purpleFlower};
  }

  ${props => {
    switch(props.mode) {
      case Fonts.sansSerif:
        return css`
          font-family: 'Inter';
        `
      case Fonts.serif:
        return css`
          font-family: 'Lora';
        `
      case Fonts.mono:
        return css`
          font-family: 'Inconsolata';
        `
    }
  }}
`;

export {
  ListItem
};