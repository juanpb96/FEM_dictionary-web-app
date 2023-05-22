import { render, screen } from '@testing-library/react';
import { FontProvider, ThemeProvider } from '../../../../contexts';
import { SourceSection } from '../SourceSection';

describe('Test <SourceSection />', () => { 
  test('should render one url', () => {
    const title = 'Source';
    const urls = ['https://en.wiktionary.org/wiki/spell'];

    render(
      <FontProvider>
        <ThemeProvider>
          <SourceSection sourceUrls={urls} />
        </ThemeProvider>
      </FontProvider>
    );

    const titleElement = screen.getByRole('heading', { level: 3 });
    const listElement = screen.getByRole('list');
    const linkElement = screen.getByRole('link');

    expect(titleElement.textContent).toBe(title);
    expect(listElement.children).toHaveLength(urls.length);
    expect(linkElement.textContent).toBe(urls[0]);
  });

  test('should render multiple urls', () => {
    const title = 'Source';
    const urls = [
      'https://en.wiktionary.org/wiki/aaa',
      'https://en.wiktionary.org/wiki/amalgam'
    ];

    render(
      <FontProvider>
        <ThemeProvider>
          <SourceSection sourceUrls={urls} />
        </ThemeProvider>
      </FontProvider>
    );

    const titleElement = screen.getByRole('heading', { level: 3 });
    const listElement = screen.getByRole('list');
    const linkElements = screen.getAllByRole('link');

    expect(titleElement.textContent).toBe(title);
    expect(listElement.children).toHaveLength(urls.length);
    expect(linkElements[0].textContent).toBe(urls[0]);
    expect(linkElements[1].textContent).toBe(urls[1]);
  });
});