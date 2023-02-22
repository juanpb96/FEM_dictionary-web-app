import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from '../stories/Header.stories';
import { ThemeContextProvider } from '../../contexts';

const { LightTheme } = composeStories(stories);

describe('Test <Header />', () => {
  test('should render properly', () => {
    render(
      <ThemeContextProvider>
        <LightTheme />
      </ThemeContextProvider>
    );

    const logo = screen.getByTestId('logo-img');

    expect(logo).toBeTruthy();
    expect(logo.getAttribute('role')).toBe('presentation');

    const dropdown = screen.getByRole('combobox');

    expect(dropdown).toBeTruthy();

    const themeSwither = screen.getByRole('switch');

    expect(themeSwither).toBeTruthy();
  });
});

export {};