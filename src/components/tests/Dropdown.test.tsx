import { composeStories } from '@storybook/react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { FontContext, fontList, FontProvider, ThemeProvider } from '../../contexts';
import * as stories from '../stories/Dropdown.stories';

const { FontList } = composeStories(stories);

describe('Test <Dropdown />', () => {
  test('should render properly', () => {
    render(
      <FontProvider>
        <ThemeProvider>
          <FontList />
        </ThemeProvider>
      </FontProvider>
    );

    const label = screen.getByTestId('font-dropdown-label');

    expect(label.textContent).toBe('Select font style');

    const combobox = screen.getByRole('combobox');

    expect(combobox).toBeTruthy();
    expect(combobox.textContent).toBe('Sans Serif');
    expect(combobox.nextElementSibling?.getAttribute('role')).toBe('listbox');    
  });

  test('should open the dropdown, change default font to "Serif" and close the dropdown', async() => {
    const currentValue = 'Sans Serif';
    const expectedValue = 'Serif';
    const setCurrentFont = jest.fn();

    render(
      <FontContext.Provider value={{ setCurrentFont, fontList }}>
        <ThemeProvider>
            <FontList />
        </ThemeProvider>
      </FontContext.Provider>
    );

    const combobox = screen.getByRole('combobox');
    
    expect(combobox.textContent).toBe(currentValue);
    expect(combobox.getAttribute('aria-expanded')).toBe('false');

    fireEvent.click(combobox);
    
    expect(combobox.getAttribute('aria-expanded')).toBe('true');    

    const listbox = screen.getByRole('listbox');
    
    expect(listbox).toBeTruthy();

    const listboxItem = screen.getByTestId('font-dropdown-item-serif');

    fireEvent.click(listboxItem);

    expect(combobox.textContent).toBe(expectedValue);

    // It is necessary to wait for animation end before checking if attribute has changed
    waitFor(() => expect(combobox.getAttribute('aria-expanded')).toBe('false'));
  });

  test('should confirm the item as selected and its id as active-descendant', () => {
    render(
      <FontProvider>
        <ThemeProvider>
          <FontList />
        </ThemeProvider>
      </FontProvider>
    );

    const combobox = screen.getByRole('combobox');

    expect(combobox.getAttribute('aria-activedescendant')).toBe('');
    
    fireEvent.click(combobox);

    expect(combobox.getAttribute('aria-activedescendant')).toBe('font-dropdown-item-sans-serif');

    const listboxItem = screen.getByTestId('font-dropdown-item-sansSerif');

    expect(listboxItem.getAttribute('aria-selected')).toBe('true');
  });

  test('should validate navigation with keyboard, select Mono and check if combobox is not expanded', () => {
    const setCurrentFont = jest.fn();

    render(
      <FontContext.Provider value={{ setCurrentFont, fontList }}>
        <ThemeProvider>
            <FontList />
        </ThemeProvider>
      </FontContext.Provider>
    );

    const combobox = screen.getByRole('combobox');

    // https://www.toptal.com/developers/keycode
    fireEvent.keyDown(combobox, {key: 'Enter', code: 'Enter', charCode: 13});

    expect(combobox.getAttribute('aria-expanded')).toBe('true');

    const listbox = screen.getByRole('listbox');
    
    expect(listbox).toBeTruthy();

    fireEvent.keyDown(combobox, {key: 'ArrowDown', code: 'ArrowDown', charCode: 40});
    fireEvent.keyDown(combobox, {key: 'ArrowDown', code: 'ArrowDown', charCode: 40});
    fireEvent.keyDown(combobox, {key: ' ', code: 'Space', charCode: 32});

    expect(combobox.textContent).toBe('Mono');
    waitFor(() => expect(combobox.getAttribute('aria-expanded')).toBe('false'));
  });
});

export {};