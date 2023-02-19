import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from '../stories/ThemeSwitcher.stories';

const { ThemeSwitchButton } = composeStories(stories);

describe('Test <ThemeSwithcher />', () => { 
  test('should render properly', () => {
    render(<ThemeSwitchButton />);
  });
});

export {};