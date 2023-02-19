import { useState } from 'react';
import * as S from './styles/ThemeSwitcher.styled';


// TODO: Continue with https://www.w3.org/WAI/ARIA/apg/patterns/switch/examples/switch-button/
export const ThemeSwitcher = () => {
  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState(false);

  const onClick = () => {
    setIsDarkThemeEnabled(!isDarkThemeEnabled);
  };

  return (
    <S.ThemeButtonContainer>
      <S.Button
        type="button"
        role="switch"
        aria-checked={isDarkThemeEnabled}
        onClick={onClick}
      >
        <span className="sr-only">
          { isDarkThemeEnabled ? 'Dark' : 'Light' } Theme
        </span>

        <S.Circle />
      </S.Button>
    
      <S.Moon
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        role="presentation"
        $isDark={isDarkThemeEnabled}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
        />
      </S.Moon>
    </S.ThemeButtonContainer>
  )
}
