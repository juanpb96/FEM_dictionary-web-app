import { composeStories } from '@storybook/react';
import { fireEvent, render, screen } from '@testing-library/react';
import * as stories from '../stories/Dropdown.stories';

const { FontList } = composeStories(stories);

describe('Test <Dropdown />', () => {
  test('should render properly', () => {
    render(<FontList />);

    const label = screen.getByTestId('font-dropdown-label');

    expect(label.textContent).toBe('Select font style');

    const combobox = screen.getByRole('combobox');

    expect(combobox).toBeTruthy();
    expect(combobox.textContent).toBe('Sans Serif');

    // FIXME: Listbox is hidden until user opens it
    const listbox = screen.getByRole('listbox');

    expect(listbox).toBeTruthy();
    expect(listbox.children).toHaveLength(3);
  });

  test.only('should open the dropdown, change default font to "Serif" and close the dropdown', () => {
    const currentValue = 'Sans Serif';
    const expectedValue = 'Serif';
    
    render(<FontList />);

    const combobox = screen.getByRole('combobox');
    
    expect(combobox.textContent).toBe(currentValue);
    expect(combobox.getAttribute('aria-expanded')).toBe('false');

    fireEvent.click(combobox);
    
    screen.debug();
    expect(combobox.getAttribute('aria-expanded')).toBe('true');

    const listbox = screen.getByRole('listbox');
    
    expect(listbox).toBeTruthy();

    const listboxItem = screen.getByTestId('font-dropdown-item-serif');

    fireEvent.click(listboxItem);

    expect(combobox.textContent).toBe(expectedValue);
    expect(combobox.getAttribute('aria-expanded')).toBe('false');
  });
});

export {};