import React, { useState, useContext } from 'react';
import { DecoratorFn } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import styled, { css } from 'styled-components';
import { GlobalStyle } from '../src/global.styles';
import { FontContext } from '../src/contexts/FontContext';
import { Fonts } from '../src/types/types';
import { ThemeContext, ThemeContextType, ThemeContextProvider } from '../src/contexts';
import { useEffect } from 'react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
};

const ThemeBlock = styled.div(({theme}) => css`
  width: 100vw;
  height: 100vh;
  padding-top: 1.5rem;
  background-color: ${theme.colors.backgroundPrimary};
  transition: background-color 150ms ease-in-out;
`);

// This is necessary to avoid collitions of context inside of withTheme decorator
const ToolbarThemeSwitch = ({context}) => {
  const { setIsDarkThemeEnabled } = useContext(ThemeContext) as ThemeContextType;
  const theme = context.parameters.theme || context.globals.theme;
  
  useEffect(() => {
    setIsDarkThemeEnabled(theme === 'dark');
  }, [theme]);

  return <></>;
};

const withTheme: DecoratorFn = (StoryFn, context) => {
  const [currentFont, setCurrentFont] = useState(Fonts.sansSerif);  

  const changeFont = (newFont: string) => {
    setCurrentFont(newFont);
  };

  return (
    <ThemeContextProvider>
      <FontContext.Provider value={{currentFont, changeFont}}>
        <ThemeBlock>
          <GlobalStyle $font={currentFont} />
          <ToolbarThemeSwitch context={context} />
          <StoryFn />
        </ThemeBlock>
      </FontContext.Provider>
    </ThemeContextProvider>
  );
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
      ],
    },
    showName: true
  }
}

export const decorators = [withTheme];