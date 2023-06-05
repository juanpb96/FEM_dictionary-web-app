import { useContext } from 'react';
import * as S from './styles/SearchResultView.styled';
import { Meaning } from '../utils/interfaces';
import { SourceSection, ViewHeader } from './components/search-result';
import { POSSection } from './components/search-result/POSSection';
import { DataContext, DataContextType } from '../contexts';

export const SearchResultView = () => {
  const { data = [] } = useContext(DataContext) as DataContextType; 

  if (!data.length) {
    return <></>;
  }
  
  const {
    word,
    phonetic,
    phonetics,
    sourceUrls
  } = data[0];
  const meaningList = data.reduce((acc, {meanings}) => {
    meanings.forEach(meaning => acc.push(meaning));
    return acc;
  }, [] as Meaning[]);
  
  const audio = phonetics.find(({audio}) => audio !== '')?.audio || ''; 

  return (
    <S.ViewContainer>
      <ViewHeader
        word={word}
        phonetic={phonetic}
        audio={audio}
      />

      {
        meaningList.map(({partOfSpeech, definitions, synonyms, antonyms}, index) => (
          <POSSection
            key={partOfSpeech + index}
            partOfSpeech={partOfSpeech}
            definitions={definitions}
            synonyms={synonyms}
            antonyms={antonyms}
          />
        ))
      }

      <SourceSection
        sourceUrls={sourceUrls}
      />
    </S.ViewContainer>
  );
};
