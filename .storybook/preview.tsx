import React from 'react';
import { DecoratorFn } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import styled, { css, ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/global.styles';
import { darkTheme, lightTheme } from '../src/themes';
import { FontContext } from '../src/contexts/FontContext';
import { useState } from 'react';
import { Fonts } from '../src/types/types';

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

const withTheme: DecoratorFn = (StoryFn, context) => {
  const [currentFont, setCurrentFont] = useState(Fonts.sansSerif);
  const theme = context.parameters.theme || context.globals.theme;
  const storyTheme = theme === 'dark' ? darkTheme : lightTheme;

  const changeFont = (newFont: string) => {
    setCurrentFont(newFont);
  }

  return (
    <ThemeProvider theme={storyTheme}>
      <FontContext.Provider value={{currentFont, changeFont}}>
        <ThemeBlock>
          <GlobalStyle $font={currentFont} />
          <StoryFn />
        </ThemeBlock>
      </FontContext.Provider>
    </ThemeProvider>
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