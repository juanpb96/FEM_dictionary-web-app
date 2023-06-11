import { composeStories } from '@storybook/react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../contexts';
import * as stories from '../stories/SearchInput.stories';
import { MemoryRouter } from 'react-router-dom';

const { SearchInputField } = composeStories(stories);

describe('Test <SearchInput />', () => { 
  test('should render properly', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <SearchInputField />
        </MemoryRouter>
      </ThemeProvider>
    );

    const form = screen.getByRole('search');

    expect(form).toBeTruthy();

    const label = screen.getByTestId('search-label');
    expect(label.textContent).toBe('Type in the word that you want to search');

    const searchInput = screen.getByRole('textbox');
    expect(searchInput.getAttribute('placeholder')).toBe('Search for any word…');

    expect(form.children).toHaveLength(2);
  });

  test('should display error message if search input is empty', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <SearchInputField />
        </MemoryRouter>
      </ThemeProvider>
    );

    const form = screen.getByRole('search');

    const searchInput = screen.getByRole('textbox');

    fireEvent.change(searchInput, {target: {value: ''}});
    fireEvent.submit(form);

    const errorMessage = screen.getByText('Whoops, can’t be empty…');

    expect(errorMessage).toBeTruthy();
    expect(form.children).toHaveLength(3);
  });
});

export {};