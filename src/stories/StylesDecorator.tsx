import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../global.styles';
import { lightTheme } from '../themes/light';

export const decorators = [
  (Story: () => void) => (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyle />
        {Story()}
      </>
    </ThemeProvider>
  )
];