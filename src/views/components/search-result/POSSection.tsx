import { Definition } from '../../../utils/interfaces';
import * as S from '../../styles/SearchResultView.styled';
import { DefinitionsList } from './DefinitionsList';
import { POSSubtitle } from './POSSubtitle';
import { POSTitleContainer } from './POSTitleContainer';
import { WordList } from './WordList';

interface POSSectionProps {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms?: string[];
  antonyms?: string[];
}

export const POSSection = ({
  partOfSpeech,
  definitions,
  synonyms = [],
  antonyms = []
}: POSSectionProps) => {
  return (
    <S.POSSection>
      <POSTitleContainer
        partOfSpeech={partOfSpeech}
      />

      <POSSubtitle
        text="Meaning"
      />

      <DefinitionsList
        definitions={definitions}
      />

      {
        synonyms.length > 0 && (
          <WordList
            title="Synonyms"
            list={synonyms}
          />
        )
      }

      {
        antonyms.length > 0 && (
          <WordList
            title="Antonyms"
            list={antonyms}
          />
        )
      }
    </S.POSSection>
  );
};