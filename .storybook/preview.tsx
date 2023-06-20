import React, { useEffect, useContext } from 'react';
import styled, { css } from 'styled-components';
import { DecoratorFn } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { GlobalStyle } from '../src/global.styles';
import {
  ThemeContext,
  ThemeContextType,
  ThemeProvider,
  FontProvider,
  FontContext,
  FontContextType,
  DataProvider
} from '../src/contexts';

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

const ToolbarFontSwitch = ({context}) => {
  const { setCurrentFont } = useContext(FontContext) as FontContextType;
  const newFont = context.parameters.fontFamily || context.globals.fontFamily;

  useEffect(() => {
    setCurrentFont(newFont);
  }, [newFont]);  

  return <></>;
};

const withTheme: DecoratorFn = (StoryFn, context) => {
  return (
    <FontProvider>
      <ThemeProvider>
        <ThemeBlock>
          <GlobalStyle />
          <DataProvider>
            <ToolbarThemeSwitch context={context} />
            <ToolbarFontSwitch context={context} />
            <StoryFn />
          </DataProvider>
        </ThemeBlock>
      </ThemeProvider>
    </FontProvider>
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
  },
  fontFamily: {
    name: 'Font Family',
    description: 'Global font family for text',
    defaultValue: 'serif',
    toolbar: {
      icon: 'paragraph',
      items: [
        { value: 'sansSerif', title: 'Sans Serif' },
        { value: 'serif', title: 'Serif' },
        { value: 'mono', title: 'Mono' },
      ]
    }
  }
}

export const decorators = [withTheme];