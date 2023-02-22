import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './ThemeContext';
import { darkTheme, lightTheme } from '../themes';

export const ThemeContextProvider = ({children}: React.PropsWithChildren) => {
  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState<boolean>(false);
  const theme = isDarkThemeEnabled ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkThemeEnabled, setIsDarkThemeEnabled }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};