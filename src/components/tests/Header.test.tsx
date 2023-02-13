import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from '../stories/Header.stories';

const { LightMode } = composeStories(stories);

describe('Test <Header />', () => {
  test('should render properly', () => {
    render(<LightMode />);

    const logo = screen.getByTestId('logo-img');

    expect(logo).toBeTruthy();
    expect(logo.getAttribute('role')).toBe('presentation');

    const dropdownInput = screen.getByRole('combobox');
    const dropdownList = screen.getByRole('listbox');

    expect(dropdownInput).toBeTruthy();
    expect(dropdownList).toBeTruthy();

    const themeSwither = screen.getByRole('switch');

    expect(themeSwither).toBeTruthy();
  });
});

export {};