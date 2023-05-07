import { useContext } from 'react';
import { FontContext, FontContextType } from '../../../contexts';
import * as S from '../../styles/SearchResultView.styled';

interface SourceSectionProps {
  sourceUrls: string[];
}

export const SourceSection = ({sourceUrls}: SourceSectionProps) => {
  const { currentFont } = useContext(FontContext) as FontContextType;

  return (
    <S.SourceSection>
      <S.SourceTitle $currentFont={currentFont}>
        Source
      </S.SourceTitle>
      
      <S.SourceList>
        {
          sourceUrls.map(sourceUrl => (
            <S.SourceListItem key={sourceUrl} $currentFont={currentFont}>
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
  )
}