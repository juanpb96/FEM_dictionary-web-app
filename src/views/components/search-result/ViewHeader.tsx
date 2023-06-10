import { useRef } from 'react';
import { Typography } from '../../../components';
import * as S from '../../styles/SearchResultView.styled';

interface ViewHeaderProps {
  word: string;
  phonetic: string | undefined;
  audio: string;
}

export const ViewHeader = ({word, phonetic, audio}: ViewHeaderProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const onClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <S.ViewHeader>
      <Typography
        as="h2"
        text={word}
        fontStyles={{
          fontWeight: 700,
          fontSize: {
            mobile: '32px',
            tablet: '64px'
          },
          lineHeight: {
            mobile: {
              sansSerif: '39px',
              serif: '41px',
              mono: '34px'
            },
            tablet: {
              sansSerif: '77px',
              serif: '82px',
              mono: '67px'
            }
          }
        }}
      />

      {/* Not necessary to render with <Typography /> since font family remains the same in the design */}
      <S.Phonetic data-testid="phonetics">{phonetic}</S.Phonetic>

      {audio && (
        <S.PlayButton
          aria-label="Listen to the pronunciation of this word"
          type="button"
          data-testid="audio-file"
          onClick={onClick}
        >
          <audio ref={audioRef} src={audio}></audio>
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
      )}
    </S.ViewHeader>
  )
}