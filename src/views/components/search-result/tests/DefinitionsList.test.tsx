import { render, screen } from '@testing-library/react';
import { FontProvider, ThemeProvider } from '../../../../contexts';
import { DefinitionsList } from '../DefinitionsList';

describe('Test <DefinitionsList />', () => { 
  test('should render a single definition without example', () => {
    const definitions = [{
      definition: 'Speech, discourse.',
      synonyms: [],
      antonyms: [],
      example: ''
    }];

    render(
      <FontProvider>
        <ThemeProvider>
          <DefinitionsList definitions={definitions} />
        </ThemeProvider>
      </FontProvider>
    );

    const list = screen.getByRole('list');

    expect(list.children).toHaveLength(definitions.length);
    expect(list.firstChild?.textContent).toBe(definitions[0].definition);
  });

  test('should render a single definition with example', () => {
    const definitions = [{
      definition: 'A magical effect or influence induced by an incantation or formula.',
      synonyms: [],
      antonyms: [],
      example: 'under a spell'
    }];

    render(
      <FontProvider>
        <ThemeProvider>
          <DefinitionsList definitions={definitions} />
        </ThemeProvider>
      </FontProvider>
    );

    const list = screen.getByRole('list');
    const listItem = list.firstChild;

    expect(list.children).toHaveLength(definitions.length);
    expect(listItem?.childNodes[0].textContent).toBe(definitions[0].definition);
    expect(listItem?.childNodes[1].textContent).toBe(definitions[0].example);
  });

  test('should render a multiple definitions without examples', () => {
    const definitions = [
      {
        definition: "Speech, discourse.",
        synonyms: [],
        antonyms: []
      },
      {
        definition: "To put under the influence of a spell; to affect by a spell; to bewitch; to fascinate; to charm.",
        synonyms: [],
        antonyms: []
      }
    ];

    render(
      <FontProvider>
        <ThemeProvider>
          <DefinitionsList definitions={definitions} />
        </ThemeProvider>
      </FontProvider>
    );

    const list = screen.getByRole('list');
    const listItems = list.children;

    expect(list.children).toHaveLength(definitions.length);
    expect(listItems[0].textContent).toBe(definitions[0].definition);
    expect(listItems[1].textContent).toBe(definitions[1].definition);
  });

  test('should render a multiple definitions with examples', () => {
    const definitions = [
      {
        definition: "Words or a formula supposed to have magical powers.",
        synonyms: [],
        antonyms: [],
        example: "He cast a spell to cure warts."
      },
      {
        definition: "A magical effect or influence induced by an incantation or formula.",
        synonyms: [],
        antonyms: [],
        example: "under a spell"
      }
    ];

    render(
      <FontProvider>
        <ThemeProvider>
          <DefinitionsList definitions={definitions} />
        </ThemeProvider>
      </FontProvider>
    );

    const list = screen.getByRole('list');
    const listItems = list.children;

    expect(list.children).toHaveLength(definitions.length);
    expect(listItems[0].childNodes[0].textContent).toBe(definitions[0].definition);
    expect(listItems[0].childNodes[1].textContent).toBe(definitions[0].example);
    expect(listItems[1].childNodes[0].textContent).toBe(definitions[1].definition);
    expect(listItems[1].childNodes[1].textContent).toBe(definitions[1].example);
  });

  test('should render a definition with example and another without example', () => {
    const definitions = [
      {
        definition: "Words or a formula supposed to have magical powers.",
        synonyms: [],
        antonyms: [],
        example: "He cast a spell to cure warts."
      },
      {
        definition: "A magical effect or influence induced by an incantation or formula.",
        synonyms: [],
        antonyms: [],
        example: ""
      }
    ];

    render(
      <FontProvider>
        <ThemeProvider>
          <DefinitionsList definitions={definitions} />
        </ThemeProvider>
      </FontProvider>
    );

    const list = screen.getByRole('list');
    const listItems = list.children;

    expect(list.children).toHaveLength(definitions.length);
    expect(listItems[0].childNodes[0].textContent).toBe(definitions[0].definition);
    expect(listItems[0].childNodes[1].textContent).toBe(definitions[0].example);
    expect(listItems[1].textContent).toBe(definitions[1].definition);
  });
});