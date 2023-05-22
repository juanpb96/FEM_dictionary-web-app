import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "../../../../contexts";
import { ViewHeader } from "../ViewHeader";

describe('Test <ViewHeader />', () => { 
  test('should render properly', () => {
    const props = {
      word: 'keyboard',
      phonetic: '/ˈkiːbɔːd/',
      audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3'
    };

    render(
      <ThemeProvider>
        <ViewHeader {...props} />
      </ThemeProvider>
    );
    
    const title = screen.getByRole('heading', {level: 2});

    expect(title.textContent).toBe(props.word);

    const phonetic = screen.getByTestId('phonetics');

    expect(phonetic.textContent).toBe(props.phonetic);

    const audioContainer = screen.getByTestId('audio-file');
    const audio = audioContainer.firstElementChild;
    
    expect(audio?.getAttribute('src')).toBe(props.audio);
  });

  test('should render properly when phonetic is not present', () => {
    const props = {
      word: 'keyboard',
      phonetic: undefined,
      audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3'
    };

    render(
      <ThemeProvider>
        <ViewHeader {...props} />
      </ThemeProvider>
    );
    
    const title = screen.getByRole('heading', {level: 2});

    expect(title.textContent).toBe(props.word);

    const phonetic = screen.getByTestId('phonetics');

    expect(phonetic.textContent).toBe('');

    const audioContainer = screen.getByTestId('audio-file');
    const audio = audioContainer.firstElementChild;
    
    expect(audio?.getAttribute('src')).toBe(props.audio);
  });
});