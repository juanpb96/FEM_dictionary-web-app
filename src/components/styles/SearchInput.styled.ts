import styled, { css } from 'styled-components';
import { mediaQuery } from '../../utils/mediaQueries.styled';
import { KeyOfFont } from '../../types';
import { getCurrentFontFamily, getCurrentLineHeight } from '../../utils/utils.styled';

const SearchIcon = styled.svg`
  min-width: 15.5px;
  width: 15.5px;
  height: 15.5px;
`;

interface TextFieldProps {
  $hasError: boolean;
  $hasFocus: boolean;
  $currentFont: KeyOfFont;
}

const TextField = styled.div<TextFieldProps>(({theme, $hasFocus, $hasError, $currentFont}) => css`
  display: flex;
  place-items: center;
  gap: 1.5rem;
  max-height: 3rem;
  padding: 1rem 1.5rem;
  background-color: ${theme.colors.backgroundSecondary};
  border: 1px solid ${theme.colors.backgroundSecondary};
  border-radius: 16px;
  border-color: ${$hasFocus
    ? theme.colors.purpleFlower
    : $hasError
      ? theme.colors.error
      : theme.colors.backgroundSecondary};
  transition: background-color 150ms ease-in-out,
              border-color 150ms ease-in-out;

  ${mediaQuery('sm', css`
    max-height: 4rem;
    padding-block: 1.25rem;
  `)}

  & input {
    width: 100%;
    height: 1.5rem;
    padding: 0;
    caret-color: ${theme.colors.purpleFlower};
    color: ${theme.colors.text};
    font-weight: 700;
    font-size: 1rem;
    border: none;
    background-color: transparent;
    outline: none;
    transition: color 150ms ease-in-out;
    font-family: ${getCurrentFontFamily($currentFont)};
    ${getCurrentLineHeight(
      $currentFont,
      {
        mobile: {
          sansSerif: '19px',
          serif: '20px',
          mono: '17px'
        },
        tablet: {
          sansSerif: '24px',
          serif: '26px',
          mono: '21px'
        }
      }
    )}

    ${mediaQuery('sm', css`
      font-size: 1.25rem;
    `)}
  }
`);

const ErrorMessage = styled.p<{$currentFont: KeyOfFont}>(({theme, $currentFont}) => css`
  margin-top: 0.5rem;
  font: 400 16px/16.78px 'sans-serif';
  font-family: ${getCurrentFontFamily($currentFont)};
  color: ${theme.colors.error};

  ${mediaQuery('sm', css`
    font-size: 1.25rem;
    line-height: 1.5rem;
  `)}
`);

const Form = styled.form(({theme}) => css`
  width: ${theme.width.mobile};
  max-width: ${theme.width.desktop};
  margin: 0 auto;

  ${mediaQuery('sm', css`
    width: ${theme.width.tablet};
  `)}
`);

export {
  SearchIcon,
  TextField,
  ErrorMessage,
  Form
};