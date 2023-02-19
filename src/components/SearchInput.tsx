import { useState } from 'react';


export const SearchInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [isErrorMessageEnabled, setIsErrorMessageEnabled] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Call api with search term

    if (inputValue === '') {
      setIsErrorMessageEnabled(true);

      return;
    }
  };

  return (
    <form role="search" onSubmit={onSubmit}>
      <label
        className="sr-only"
        htmlFor="search-input"
        data-testid="search-label"
      >
        Type in the word that you want to search
      </label>

      <div>
        <input
          id="search-input"
          type="text"
          placeholder="Search for any word…"
          value={inputValue}
          onChange={onChange}
        />

        <svg
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
        </svg>
      </div>

      {
        isErrorMessageEnabled && (
          <p>
            Whoops, can’t be empty…
          </p>
        )
      }
    </form>
  )
};