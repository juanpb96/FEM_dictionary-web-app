import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../../../contexts';
import { WordList } from '../WordList';

describe('Test <WordList />', () => {
  test('should render one item in the list', () => {
    const props = {
      title: 'Synonyms',
      list: ['electronic keyboard']
    };

    render(
      <ThemeProvider>
        <WordList {...props} />
      </ThemeProvider>
    );

    expect(screen.getByText(props.title)).toBeTruthy();
    
    const wordList = screen.getByRole('list');

    expect(wordList.children).toHaveLength(props.list.length);
    expect(wordList.firstElementChild?.textContent).toBe(props.list[0]);
  });

  test('should render multiple items in the list', () => {
    const props = {
      title: 'Synonyms',
      list: [
        'comprise',
        'forebode',
        'mean',
        'signify',
        'relieve'
      ]
    };

    render(
      <ThemeProvider>
        <WordList {...props} />
      </ThemeProvider>
    );

    expect(screen.getByText(props.title)).toBeTruthy();
    
    const wordList = screen.getByRole('list');

    expect(wordList.children).toHaveLength(props.list.length);

    const wordListItems = [...wordList.children].map(e => e.textContent); 

    expect(wordListItems).toEqual(props.list);
  });

  test('should not render repeated items', () => {
    const props = {
      title: 'Synonyms',
      list: [
        'cantrip',
        'cantrip',
        'incantation'
      ]
    };

    const expectedList = [...new Set(props.list)];

    render(
      <ThemeProvider>
        <WordList {...props} />
      </ThemeProvider>
    );

    expect(screen.getByText(props.title)).toBeTruthy();
    
    const wordList = screen.getByRole('list');

    expect(wordList.children).toHaveLength(expectedList.length);

    const wordListItems = [...wordList.children].map(e => e.textContent); 

    expect(wordListItems).toEqual(expectedList);
  });
});