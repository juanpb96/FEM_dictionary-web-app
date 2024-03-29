import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from '../stories/Header.stories';
import { FontProvider, ThemeProvider } from '../../contexts';
import { MemoryRouter } from 'react-router-dom';

const { LightTheme } = composeStories(stories);

describe('Test <Header />', () => {
  test('should render properly', () => {
    render(
      <FontProvider>
        <ThemeProvider>
          <MemoryRouter>
            <LightTheme />
          </MemoryRouter>
        </ThemeProvider>
      </FontProvider>
    );

    const logo = screen.getByTestId('logo-img');

    expect(logo).toBeTruthy();
    expect(logo.getAttribute('role')).toBe('presentation');

    const dropdown = screen.getByRole('combobox');

    expect(dropdown).toBeTruthy();

    const themeSwitcher = screen.getByRole('switch');

    expect(themeSwitcher).toBeTruthy();
  });
});

export {};