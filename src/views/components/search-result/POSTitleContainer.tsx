import { Typography } from '../../../components';
import * as S from '../../styles/SearchResultView.styled';

interface POSTitleContainerProps {
  partOfSpeech: string;
}

export const POSTitleContainer = ({partOfSpeech}: POSTitleContainerProps) => {
  return (
    <S.POSTitleContainer>
      <Typography
        as="h3"
        text={partOfSpeech}
        fontStyles={{
          fontWeight: 700,
          fontSize: {
            mobile: '18px',
            tablet: '24px'
          },
          lineHeight: {
            mobile: {
              sansSerif: '21.78px',
              serif: '23.04px',
              mono: '18.88px'
            },
            tablet: {
              sansSerif: '29.05px',
              serif: '29.05px',
              mono: '25.18px'
            }
          }
        }}
      />
    </S.POSTitleContainer>
  );
};