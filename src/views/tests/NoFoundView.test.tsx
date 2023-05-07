import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as Stories from '../stories/NoFound.stories';
import { ThemeProvider } from '../../contexts';

const { NoDefinitionFound } = composeStories(Stories);

describe('Test <NoFoundView />', () => {
  test('should render properly', () => { 
    render(
      <ThemeProvider>
        <NoDefinitionFound />
      </ThemeProvider>
    );    

    expect(screen.getByRole('img')).toBeTruthy();
    expect(screen.getByText('No Definitions Found')).toBeTruthy();
    expect(screen.getByText('Sorry pal, we couldn\'t find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.')).toBeTruthy();
  });
});

export {};