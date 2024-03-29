import { useContext } from 'react';
import { DataContext, DataContextType } from '../contexts/DataContext';
import { Typography } from '../components';
import * as S from './styles/NoFoundView.styled';

const DEFAULT_VALUES = {
  title: 'No Definitions Found',
  message: 'Sorry pal, we couldn\'t find definitions for the word you were looking for.',
  resolution: 'You can try the search again at later time or head to the web instead.'
};

export const NoFoundView = () => {
  const { error } = useContext(DataContext) as DataContextType;
  
  const errorMessage = error?.response?.data 
    ? `${error?.response?.data.message} ${error?.response?.data.resolution}` 
    : `${DEFAULT_VALUES.message} ${DEFAULT_VALUES.resolution}`;

  return (
    <S.NoFoundViewContainer>
      <S.Emoji
        src="data:image/png;base64,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"
        alt="😕"
      />

      <Typography
        as="h2"
        text={error?.response?.data.title || DEFAULT_VALUES.title}
        fontStyles={{
          fontWeight: 700,
          fontSize: {
            mobile: '1.125rem',
            tablet: '1.25rem'
          },
          lineHeight: {
            mobile: {
              sansSerif: '24px',
              serif: '26px',
              mono: '21px'
            }
          },
          marginBottom: '1.5rem'
        }}
      />

      <Typography
        as="p"
        text={errorMessage}
        fontStyles={{
          color: 'paleSky',
          fontWeight: 400,
          fontSize: {
            mobile: '1rem',
            tablet: '1.125rem'
          },
          lineHeight: {
            mobile: {
              sansSerif: '24px',
              serif: '26px',
              mono: '21px'
            }
          }
        }}
      />
    </S.NoFoundViewContainer>
  );
};
