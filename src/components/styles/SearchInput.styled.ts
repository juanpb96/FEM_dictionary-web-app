import styled, { css } from 'styled-components';


const SearchIcon = styled.svg`
  width: 15.5px;
  height: 15.5px;
`;

interface TextFieldProps {
  $hasError: boolean;
  $hasFocus: boolean;
}

const TextField = styled.div<TextFieldProps>`
  display: flex;
  place-items: center;
  gap: 1.5rem;
  max-height: 3rem;
  padding: 1rem 1.5rem;
  background-color: ${({theme}) => theme.colors.whiteSmoke};
  border: 1px solid ${({theme}) => theme.colors.whiteSmoke};
  border-radius: 16px;

  ${props => {
    if (props.$hasError) {
      return css`
        border-color: ${({theme}) => theme.colors.orangeSunset};
      `
    }
  }}

  ${props => {
    if (props.$hasFocus) {
      return css`
        border-color: ${({theme}) => theme.colors.purpleFlower};
      `
    }
  }}

  & input {
    flex-grow: 1;
    height: 1.5rem;
    padding: 0;
    caret-color: ${({theme}) => theme.colors.purpleFlower};
    font: 700 16px/16.78px inherit;
    border: none;
    background-color: transparent;
    outline: none;
  }

  @media screen and (min-width: ${({theme}) => theme.screen.sm}) {
    & {
      max-height: 4rem;
    }

    & input {
      font-size: 1.25rem;
      line-height: 1.3125rem;
    }
  }

  @media screen and (min-width: ${({theme}) => theme.screen.lg}) {
    & input {
      line-height: 1.5rem;
    }
  }
`;

const ErrorMessage = styled.p`
  margin-top: 0.5rem;
  font: 400 16px/16.78px inherit;
  color: ${({theme}) => theme.colors.orangeSunset};
`;

export {
  SearchIcon,
  TextField,
  ErrorMessage
};