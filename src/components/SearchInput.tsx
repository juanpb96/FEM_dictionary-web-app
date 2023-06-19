import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { FontContext, FontContextType } from '../contexts';
import * as S from './styles/SearchInput.styled';
import { useSearch } from '../hooks/useSearch';

export const SearchInput = () => {
  const { currentFont } = useContext(FontContext) as FontContextType; 
  const { pathname } = useLocation();
  const [, view, term] = pathname.split('/');
  const isValidPath = ['definition', 'notfound'].includes(view);
  const initialInput = isValidPath ? term : 'keyboard';  
  const [inputValue, setInputValue] = useState(initialInput);
  const [hasError, setHasError] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const { searchWordAndRedirect } = useSearch();  

  const onInputContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    (e.currentTarget.firstChild as HTMLElement).focus();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);    

    if (e.target.value !== '' && hasError) {
      setHasError(false);
      setHasFocus(true);
    }
  };

  const onFocus = () => {
    setHasFocus(true);
  }

  const onBlur = () => {
    setHasFocus(false);
  }

  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue === '') {
      setHasError(true);
      setHasFocus(false);

      return;
    }
    
    await searchWordAndRedirect(inputValue);
  };

  return (
    <S.Form role="search" onSubmit={onSubmit}>
      <label
        className="sr-only"
        htmlFor="search-input"
        data-testid="search-label"
      >
        Type in the word that you want to search
      </label>

      <S.TextField
        onClick={onInputContainerClick}
        $hasError={hasError}
        $hasFocus={hasFocus}
        $currentFont={currentFont}
      >
        <input
          id="search-input"
          type="text"
          placeholder="Search for any word…"
          value={inputValue}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />

        <S.SearchIcon
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          role="presentation"
        >
          <path
            fill="none"
            stroke="#A445ED"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
          />
        </S.SearchIcon>
      </S.TextField>

      {
        hasError && (
          <S.ErrorMessage $currentFont={currentFont}>
            Whoops, can’t be empty…
          </S.ErrorMessage>
        )
      }
    </S.Form>
  )
};