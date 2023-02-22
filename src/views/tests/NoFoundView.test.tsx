import { render } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as Stories from '../stories/NoFound.stories';

const { NoDefinitionFound } = composeStories(Stories);

describe('Test <NoFoundView />', () => {
  test('should render properly', () => { 
    render(<NoDefinitionFound />);
  });
});

export {};