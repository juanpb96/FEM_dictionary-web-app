import { useContext } from 'react';
import { FontContext, FontContextType } from '../../../contexts';
import * as S from '../../styles/SearchResultView.styled';
import { Definition } from '../../../utils/interfaces';

interface DefinitionsListProps {
  definitions: Definition[];
}

export const DefinitionsList = ({definitions}: DefinitionsListProps) => {
  const { currentFont } = useContext(FontContext) as FontContextType;

  return (
    <S.DefinitionsList $currentFont={currentFont}>
      {
        definitions.map(({definition, example}) => (
          <li key={definition}>
            {definition}
            {example && <blockquote>{example}</blockquote>}
          </li>
        ))
      }
    </S.DefinitionsList>
  );
};