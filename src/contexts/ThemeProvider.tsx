import { useState, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeContext } from './ThemeContext';
import { darkTheme, lightTheme } from '../themes';
import { FontContext, FontContextType } from './FontContext';

export const ThemeProvider = ({children}: React.PropsWithChildren) => {
  const { currentFont } = useContext(FontContext) as FontContextType;
  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState<boolean>(false);
  const theme = isDarkThemeEnabled ? darkTheme : lightTheme;
  theme.currentFont = currentFont;

  return (
    <ThemeContext.Provider value={{ isDarkThemeEnabled, setIsDarkThemeEnabled }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};