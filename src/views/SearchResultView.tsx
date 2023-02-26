import { Response } from '../utils/interfaces';
import * as S from './styles/SearchResultView.styled';

export interface SearchResultViewProps {
  data: Response[];
}

export const SearchResultView = ({data}: SearchResultViewProps) => {
  const {
    word,
    phonetic,
    phonetics,
    meanings,
    sourceUrls
  } = data[0];
  const { audio } = phonetics[2];  

  return (
    <S.ViewContainer>
      <S.ViewHeader>
        <S.Title>{ word }</S.Title>
        <S.Phonetic data-testid="phonetics">{phonetic}</S.Phonetic>

        <S.PlayButton type="button" data-testid="audio-file">
          <audio src={audio}></audio>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 75 75"
          >
            <g
              fill="#A445ED"
              fillRule="evenodd"
            >
              <circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/>
              <path d="M29 27v21l21-10.5z"/>
            </g>
          </svg>
        </S.PlayButton>
      </S.ViewHeader>

      {/* FIXME: Should be splitted in other component? */}

      {
        meanings.map(({partOfSpeech, definitions, synonyms, antonyms}) => (
          <S.POSSection key={partOfSpeech}>
            <S.POSTitle>
              {partOfSpeech}
            </S.POSTitle>
            <S.POSSubtitle>
              Meaning
            </S.POSSubtitle>
            <S.DefinitionsList>
              {
                definitions.map(({definition, example}) => (
                  <li key={definition}>
                    {definition}
                    {example && <blockquote>{example}</blockquote>}
                  </li>
                ))
              }
            </S.DefinitionsList>
            {/* TODO: Check antonyms */}
            {
              synonyms.length > 0 && (
                <S.WordListContainer>
                  <S.POSSubtitle>
                    Synonyms
                  </S.POSSubtitle>
                  <S.WordList>
                    {
                      synonyms.map(synonym => (
                        <S.WordListItem key={synonym}>
                          {synonym}
                        </S.WordListItem>
                      ))
                    }
                  </S.WordList>
                </S.WordListContainer>
              )
            }

            {
              antonyms.length > 0 && (
                <S.WordListContainer>
                  <S.POSSubtitle>
                    Antonyms
                  </S.POSSubtitle>
                  <S.WordList>
                    {
                      antonyms.map(antonym => (
                        <S.WordListItem key={antonym}>
                          {antonym}
                        </S.WordListItem>
                      ))
                    }
                  </S.WordList>
                </S.WordListContainer>
              )
            }
          </S.POSSection>
        ))
      }

      <S.SourceSection>
        <S.SourceTitle>
          Source
        </S.SourceTitle>
        
        <S.SourceList>
          {
            sourceUrls.map(sourceUrl => (
              <S.SourceListItem key={sourceUrl}>
                <a href={sourceUrl} target="_blank">
                  {sourceUrl}
                </a>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  role="img"
                >
                  <title>Opens in a new tab</title>
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
                  />
                </svg>
              </S.SourceListItem>
            ))
          }
        </S.SourceList>
      </S.SourceSection>
    </S.ViewContainer>
  );
};
