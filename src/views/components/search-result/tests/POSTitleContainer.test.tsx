import { render, screen } from "@testing-library/react";
import { POSTitleContainer } from "../POSTitleContainer";
import { ThemeProvider } from "../../../../contexts";

describe('Test <POSTitleContainer />', () => {
  test('should render properly', () => { 
    const partOfSpeech = 'noun';

    render(
      <ThemeProvider>
        <POSTitleContainer partOfSpeech={partOfSpeech} />
      </ThemeProvider>
    );

    const title = screen.getByRole('heading', {level: 3});

    expect(title.textContent).toBe(partOfSpeech);
  });
});