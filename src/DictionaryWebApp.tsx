import { GlobalStyle } from './global.styles';
import { FontProvider, ThemeProvider } from './contexts';
import { Header } from './components';

export const DictionaryWebApp = () => {
  return (
    <FontProvider>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
      </ThemeProvider>
    </FontProvider>
  )
}
