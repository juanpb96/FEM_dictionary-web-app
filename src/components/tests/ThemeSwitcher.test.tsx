import { composeStories } from '@storybook/react';
import { fireEvent, render, screen } from '@testing-library/react';
import * as stories from '../stories/ThemeSwitcher.stories';

const { ThemeSwitchButton } = composeStories(stories);

describe('Test <ThemeSwithcher />', () => { 
  test('should render properly', () => {
    render(<ThemeSwitchButton />);

    const button = screen.getByRole('switch');

    expect(button).toBeTruthy();
    expect(button.getAttribute('aria-checked')).toBe('false');
    expect(button.textContent).toBe('Light Theme');
    expect(button.children[1].tagName).toBe('SPAN');
    expect(button.children[1].textContent).toBe('');
    expect(button.nextElementSibling?.tagName).toBe('svg');
  });

  test('should change to dark theme and change aria checked to "true"', () => {
    render(<ThemeSwitchButton />);

    const button = screen.getByRole('switch');

    expect(button.getAttribute('aria-checked')).toBe('false');

    fireEvent.click(button);

    expect(button.getAttribute('aria-checked')).toBe('true');
    expect(button.textContent).toBe('Dark Theme');
  });
});

export {};