import styled, { css } from 'styled-components';
import { widthCSS } from '../../utils/utils.styled';

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

const Title = styled.h2(({theme}) => css`
  grid-area: title;
  font-weight: 700;
  font-size: 2rem;
  font-family: inherit;
  /* TODO: Add $font flag to render an individual line height  */
  /* Consider a function with 3 values depending on each font */
  line-height: 39px;
`);

const Phonetic = styled.p(({theme}) => css`
  grid-area: phonetic;
  color: ${theme.colors.purpleFlower};
  font: 400 1.125rem/1.5rem ${theme.fontFamily.Inter};
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

const POSTitle = styled.h3(({theme}) => css`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  font-weight: 700;
  font-style: italic;
  font-size: 1.125rem;
  /* FIXME: Replace with line-height function */
  line-height: 22px;

  &::after {
    content: '';
    display: inline-block;
    flex-grow: 1;
    height: 1px;
    background-color: ${theme.colors.mercury};
  }
`);

const POSSubtitle = styled.h4(({theme}) => css`
  color: ${theme.colors.paleSky};
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`);

const DefinitionsList = styled.ul(({theme}) => css`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  margin-top: 1.125rem;
  padding-left: 1rem;

  & li {
    padding-left: 0.25rem;

    &::marker {
      /* TODO: Set this color as a default value in theme */
      color: #8F19E8;
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

const WordListItem = styled.li(({theme}) => css`
  color: ${theme.colors.purpleFlower};
  font-weight: 700;
  font-size: 1rem;
  line-height: 19.36px;
  /* TODO: Get font styles from a function */

  &:not(:first-child) {
    margin-top: 0.5rem;
  }
`);

const SourceSection = styled.section(({theme}) => css`
  margin-top: 2rem;
  border-top: 1px solid ${theme.colors.mercury};
  padding-top: 1.5rem;
`);

const SourceTitle = styled.h3(({theme}) => css`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* TODO: Get font styles from a function */

  color: ${theme.colors.paleSky};
  text-decoration: underline;
`);

const SourceList = styled.ul`
  padding: 0;
  margin-top: 0.5rem;
  list-style-type: none;
`;

const SourceListItem = styled.li(({theme}) => css`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:not(:first-child) {
    margin-top: 6px;
  }

  & a {
    color: ${theme.colors.text};
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
  }

  & svg {
    width: 0.75rem;
    height: 0.75rem;
    color: ${theme.colors.paleSky}
  }
`);

export {
  ViewContainer,
  ViewHeader,
  Title,
  Phonetic,
  PlayButton,
  POSSection,
  POSTitle,
  POSSubtitle,
  DefinitionsList,
  WordListContainer,
  WordList,
  WordListItem,
  SourceSection,
  SourceTitle,
  SourceList,
  SourceListItem
};