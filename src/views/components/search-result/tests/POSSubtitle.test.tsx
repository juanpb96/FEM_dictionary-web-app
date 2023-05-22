import { render, screen } from '@testing-library/react';
import { POSSubtitle } from '../POSSubtitle';
import { FontProvider, ThemeProvider } from '../../../../contexts';

describe('Test <POSSubtitle />', () => {
  test('should render properly', () => { 
    const text = 'Synonym';

    render(
      <FontProvider>
        <ThemeProvider>
          <POSSubtitle text={text} />
        </ThemeProvider>
      </FontProvider>
    );

    expect(screen.getByText(text)).toBeTruthy();
  });
});