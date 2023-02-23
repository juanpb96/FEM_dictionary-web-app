import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import  * as Stories from '../stories/SearchResultView.stories';
import { VALID_RESPONSE_1_RESULT } from './fixtures/SearchResult.fixture';

const { SearchResultOneResult } = composeStories(Stories);

describe('Test <SearchResultView />', () => {
  test('should render properly when request returns one result', () => {
    const { word, phonetic, meanings, sourceUrls } = VALID_RESPONSE_1_RESULT[0];

    const { getByRole, getByTestId, getByText } = render(<SearchResultOneResult />);

    expect(getByRole('heading', {level: 2}).textContent).toBe(word);
    expect(getByTestId('phonetics').textContent).toBe(phonetic);
    expect(getByTestId('audio-file')).toBeTruthy();

    const nounSection = getByText('noun').parentElement;

    expect(nounSection?.children[0].textContent).toBe(meanings[0].partOfSpeech);
    expect(nounSection?.children[1].textContent).toBe('Meaning');
    expect(nounSection?.children[2].children).toHaveLength(meanings[0].definitions.length);
    expect(nounSection?.children[3].textContent).toBe('Synonyms');

    const verbSection = getByText('verb').parentElement;

    expect(verbSection?.children[0].textContent).toBe(meanings[1].partOfSpeech);
    expect(verbSection?.children[1].textContent).toBe('Meaning');
    expect(verbSection?.children[2].children).toHaveLength(meanings[1].definitions.length);

    const sourceSection = getByText('Source').parentElement;
    
    expect(sourceSection?.children).toHaveLength(2);
    expect(sourceSection?.children[0].textContent).toBe('Source');
    expect(sourceSection?.children[1].textContent).toBe(sourceUrls[0]);
  });
});

export {};