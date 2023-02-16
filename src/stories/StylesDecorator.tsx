import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../global.styles';
import { lightTheme } from '../themes/light';
import { useState, ReactNode } from 'react';
import { Fonts } from '../types/types';
import { FontContext } from '../contexts/FontContext';

const Decorator = ({ children }: { children: ReactNode }) => {
  const [currentFont, setCurrentFont] = useState(Fonts.sansSerif);

  const changeFont = (newFont: string) => {
    setCurrentFont(newFont);
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <FontContext.Provider value={{ changeFont }}>
        <GlobalStyle $font={currentFont} />
        {children}
      </FontContext.Provider>
    </ThemeProvider>
  );
};

export const decorators = [
  (Story: () => void) => (
    <Decorator>
      <>
        {Story()}
      </>
    </Decorator>
  )
];