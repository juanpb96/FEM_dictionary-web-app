import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import  * as Stories from '../stories/SearchResultView.stories';
import { DataProvider, ThemeProvider } from '../../contexts';

const {
  DefaultResult,
  MultipleResults,
  MultipleAntonymsResult,
  MultipleSourcesResult
} = composeStories(Stories);

describe('Test <SearchResultView />', () => {
  test('should render properly when request returns one result', () => {
    render(
      <ThemeProvider>
        <DataProvider>
          <DefaultResult />
        </DataProvider>
      </ThemeProvider>
    );

    expect(screen.getByRole('heading', { name: 'keyboard' })).toBeTruthy();
    expect(screen.getByText('Keyboarding is the part of this job I hate the most.')).toBeTruthy();
  });

  test('should render multiple results properly', () => {
    render(
      <ThemeProvider>
        <DataProvider>
          <MultipleResults />
        </DataProvider>
      </ThemeProvider>
    );

    expect(screen.getByRole('heading', { name: 'spell' })).toBeTruthy();
    expect(screen.getAllByText('noun')).toHaveLength(3);
    expect(screen.getAllByText('verb')).toHaveLength(3);
  });

  test('should render multiple antonyms', () => {
    render(
      <ThemeProvider>
        <DataProvider>
          <MultipleAntonymsResult />
        </DataProvider>
      </ThemeProvider>
    );

    expect(screen.getByRole('heading', { name: 'positive' })).toBeTruthy();
    
    const antonymsTitle = screen.getByRole('heading', { name: 'Antonyms' });

    expect(antonymsTitle.nextElementSibling?.childElementCount).toBe(7);
  });

  test('should render multiple sources', () => {
    render(
      <ThemeProvider>
        <DataProvider>
          <MultipleSourcesResult />
        </DataProvider>
      </ThemeProvider>
    );

    expect(screen.getByRole('heading', { name: 'aaa' })).toBeTruthy();
    
    const sourceTitle = screen.getByRole('heading', { name: 'Source' });

    expect(sourceTitle.nextElementSibling?.childElementCount).toBe(2);
  });
  
  test('should render audio button', () => {
    render(
      <ThemeProvider>
        <DataProvider>
          <DefaultResult />
        </DataProvider>
      </ThemeProvider>
    );

    expect(screen.getByRole('heading', { name: 'keyboard' })).toBeTruthy();
    expect(screen.queryByLabelText('Listen to the pronunciation of this word')).toBeTruthy();
  });

  test('should not render audio button', () => {
    render(
      <ThemeProvider>
        <DataProvider>
          <MultipleSourcesResult />
        </DataProvider>
      </ThemeProvider>
    );

    expect(screen.getByRole('heading', { name: 'aaa' })).toBeTruthy();
    expect(screen.queryByLabelText('Listen to the pronunciation of this word')).toBeFalsy();
  });
});

export {};