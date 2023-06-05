import { useState, useContext, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeContext } from './ThemeContext';
import { darkTheme, lightTheme } from '../themes';
import { FontContext, FontContextType } from './FontContext';
import { LocalStorageKeys } from '../utils/constants';

export const ThemeProvider = ({children}: React.PropsWithChildren) => {
  const { currentFont } = useContext(FontContext) as FontContextType;
  const isColorSchemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState<boolean>(isColorSchemeDark);
  const theme = isDarkThemeEnabled ? darkTheme : lightTheme;
  theme.currentFont = currentFont;

  useEffect(() => {
    const storedValue = localStorage.getItem(LocalStorageKeys.darkModeEnabled);    
    
    if (storedValue === 'true') {
      setIsDarkThemeEnabled(true);
    } else if (storedValue === 'false') {
      setIsDarkThemeEnabled(false);
    }
  }, []);
  

  return (
    <ThemeContext.Provider value={{ isDarkThemeEnabled, setIsDarkThemeEnabled }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};