import styled, { css } from 'styled-components';
import { getCurrentFontFamily, getCurrentLineHeight, widthCSS } from '../../utils/utils.styled';
import { mediaQuery } from '../../utils/mediaQueries.styled';
import { KeyOfFont } from '../../types';

interface FontProps {
  $currentFont: KeyOfFont;
};

const ViewContainer = styled.article`
  ${widthCSS}
  margin: 1.5rem auto;
`;

const ViewHeader = styled.header`
  display: grid;
  align-items: center;
  grid-template-areas: "title    audio"
                       "phonetic audio";
`;

const Phonetic = styled.p(({theme}) => css`
  grid-area: phonetic;
  color: ${theme.colors.purpleFlower};
  font: 400 1.125rem/1.5rem ${theme.fontFamily.Inter};

  ${mediaQuery('sm', css`
    font-size: 24px;
    line-height: 29px;
  `)}
`);

const PlayButton = styled.button(({theme}) => css`
  cursor: pointer;
  grid-area: audio;
  justify-self: end;
  width: 3rem;
  aspect-ratio: 1 / 1;
  padding: 0;
  border: none;
  background-color: unset;

  & svg {
    height: inherit;
  }
`);

const POSSection = styled.section(({theme}) => css`
  margin-top: 2rem;
`);

const POSTitleContainer = styled.div(({theme}) => css`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  font-style: italic;

  &::after {
    content: '';
    display: inline-block;
    flex-grow: 1;
    height: 1px;
    background-color: ${theme.colors.mercury};
  }
`);

const DefinitionsList = styled.ul<FontProps>(({theme, $currentFont}) => css`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  margin-top: 1.125rem;
  padding-left: 1rem;

  & li {
    padding-left: 0.25rem;
    font-size: 15px;
    font-family: ${getCurrentFontFamily($currentFont)};
    line-height: 24px;

    ${mediaQuery('sm', css`
      font-size: 18px;
    `)}

    &::marker {
      color: #8F19E8;
    }

    & blockquote {
      color: ${theme.colors.paleSky};
      margin-top: 13px;
    }
  }
`);

const WordListContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const WordList = styled.ul`
  padding: 0;
  list-style-type: none;
`;

const WordListItem = styled.li`
  &:not(:first-child) {
    margin-top: 0.5rem;
  }
`;

const SourceSection = styled.section(({theme}) => css`
  margin-top: 2rem;
  border-top: 1px solid ${theme.colors.mercury};
  padding-block: 1.5rem;

  ${mediaQuery('sm', css`
    display: flex;
    gap: 25px;
  `)}
`);

const SourceFontCSS = (currentFont: KeyOfFont) => css`
  font-weight: 400;
  font-size: 14px;
  font-family: ${getCurrentFontFamily(currentFont)};
  ${getCurrentLineHeight(
    currentFont,
    {
      mobile: {
        sansSerif: '16.94px',
        serif: '17.92px',
        mono: '14.69px'
      }
    }
  )}
  text-decoration: underline;
`

const SourceTitle = styled.h3<FontProps>(({theme, $currentFont}) => css`
  color: ${theme.colors.paleSky};
  ${SourceFontCSS($currentFont)}
`);

const SourceList = styled.ul`
  padding: 0;
  margin-top: 0.5rem;
  list-style-type: none;

  ${mediaQuery('sm', css`
    margin: 0;
  `)}
`;

const SourceListItem = styled.li<FontProps>(({theme, $currentFont}) => css`
  ${SourceFontCSS($currentFont)}
  
  &:not(:first-child) {
    margin-top: 6px;
  }

  & a {
    color: ${theme.colors.text};
  }

  & svg {
    display: inline-block;
    margin-left: 0.5rem;
    width: 0.75rem;
    height: 0.75rem;
    color: ${theme.colors.paleSky}
  }
`);

export {
  ViewContainer,
  ViewHeader,
  Phonetic,
  PlayButton,
  POSSection,
  POSTitleContainer,
  DefinitionsList,
  WordListContainer,
  WordList,
  WordListItem,
  SourceSection,
  SourceTitle,
  SourceList,
  SourceListItem
};