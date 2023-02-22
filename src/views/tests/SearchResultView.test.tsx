import { render } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as Stories from '../stories/SearchResultView.stories';

const { SearchResult } = composeStories(Stories);

describe('Test <SearchResultView />', () => {
  test('should render properly', () => {
    render(<SearchResult />);
  });
});

export {};