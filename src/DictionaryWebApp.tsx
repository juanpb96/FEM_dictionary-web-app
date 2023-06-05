import { GlobalStyle } from './global.styles';
import { FontProvider, ThemeProvider } from './contexts';
import { Header } from './components';
import { ViewRouter } from './views';
import { DataProvider } from './contexts/DataProvider';

export const DictionaryWebApp = () => {
  return (
    <FontProvider>
      <ThemeProvider>
        <GlobalStyle />
        <DataProvider>
          <Header />
          <ViewRouter />
        </DataProvider>
      </ThemeProvider>
    </FontProvider>
  )
}
