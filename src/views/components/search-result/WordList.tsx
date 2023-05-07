import * as S from '../../styles/SearchResultView.styled';
import { Typography } from "../../../components";
import { POSSubtitle } from "./POSSubtitle";

interface WordListProps {
  title: string;
  list: string[];
}

export const WordList = ({title, list}: WordListProps) => {
  return (
    <S.WordListContainer>
      <POSSubtitle text={title} />
      <S.WordList>
        {
          list.map((word: string, index) => (
            <S.WordListItem key={word + index}>
              <Typography
                as="span"
                text={word}
                fontStyles={{
                  color: 'purpleFlower',
                  fontWeight: 700,
                  fontSize: {
                    mobile: '16px',
                    tablet: '20px'
                  },
                  lineHeight: {
                    mobile: {
                      sansSerif: '19px',
                      serif: '20px',
                      mono: '17px'
                    },
                    tablet: {
                      sansSerif: '24px',
                      serif: '26px',
                      mono: '21px'
                    }
                  }
                }}
              />
            </S.WordListItem>
          ))
        }
      </S.WordList>
    </S.WordListContainer>
  )
};