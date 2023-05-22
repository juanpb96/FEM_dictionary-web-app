import { render, screen } from '@testing-library/react';
import { FontProvider, ThemeProvider } from '../../../../contexts';
import { POSSection } from '../POSSection';

const definitions = [
  { definition: "(etc.) A set of keys used to operate a typewriter, computer etc." },
  { definition: "A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck." },
  { definition: "A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device." }
];

describe('Test <POSSection />', () => {
  test('should render properly without synonyms and antonyms', () => {
    const data = {
      partOfSpeech: 'noun',
      definitions: definitions,
      synonyms: [],
      antonyms: []
    };

    render(
      <FontProvider>
        <ThemeProvider>
          <POSSection {...data} />
        </ThemeProvider>
      </FontProvider>
    );

    expect(screen.getByText(data.partOfSpeech)).toBeTruthy();
    expect(screen.getByText('Meaning')).toBeTruthy();
    expect(screen.getByRole('list').children).toHaveLength(data.definitions.length);
    expect(screen.queryByText('Synonyms')).toBeFalsy();
    expect(screen.queryByText('Antonyms')).toBeFalsy();
  });

  test('should render properly with synonyms and without antonyms', () => {
    const data = {
      partOfSpeech: 'noun',
      definitions: definitions,
      synonyms: ['electronic keyboard'],
      antonyms: []
    };

    render(
      <FontProvider>
        <ThemeProvider>
          <POSSection {...data} />
        </ThemeProvider>
      </FontProvider>
    );

    const lists = screen.getAllByRole('list');

    expect(screen.getByText(data.partOfSpeech)).toBeTruthy();
    expect(screen.getByText('Meaning')).toBeTruthy();
    expect(lists[0].children).toHaveLength(data.definitions.length);
    expect(screen.getByText('Synonyms')).toBeTruthy();
    expect(lists[1].children).toHaveLength(data.synonyms.length);
    expect(screen.queryByText('Antonyms')).toBeFalsy();
  });

  test('should render properly without synonyms and with antonyms', () => {
    const data = {
      partOfSpeech: 'noun',
      definitions: definitions,
      synonyms: [],
      antonyms: ['uncertain', 'unsure']
    };

    render(
      <FontProvider>
        <ThemeProvider>
          <POSSection {...data} />
        </ThemeProvider>
      </FontProvider>
    );

    const lists = screen.getAllByRole('list');

    expect(screen.getByText(data.partOfSpeech)).toBeTruthy();
    expect(screen.getByText('Meaning')).toBeTruthy();
    expect(lists[0].children).toHaveLength(data.definitions.length);
    expect(screen.queryByText('Synonyms')).toBeFalsy();
    expect(screen.getByText('Antonyms')).toBeTruthy();
    expect(lists[1].children).toHaveLength(data.antonyms.length);
  });

  test('should render properly with synonyms and antonyms', () => {
    const data = {
      partOfSpeech: 'noun',
      definitions: definitions,
      synonyms: ['certain','sure','wis'],
      antonyms: ['uncertain', 'unsure']
    };

    render(
      <FontProvider>
        <ThemeProvider>
          <POSSection {...data} />
        </ThemeProvider>
      </FontProvider>
    );

    const lists = screen.getAllByRole('list');

    expect(screen.getByText(data.partOfSpeech)).toBeTruthy();
    expect(screen.getByText('Meaning')).toBeTruthy();
    expect(lists[0].children).toHaveLength(data.definitions.length);
    expect(screen.getByText('Synonyms')).toBeTruthy();
    expect(lists[1].children).toHaveLength(data.synonyms.length);
    expect(screen.getByText('Antonyms')).toBeTruthy();
    expect(lists[2].children).toHaveLength(data.antonyms.length);
  });
});