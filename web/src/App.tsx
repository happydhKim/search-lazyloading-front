import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Layout } from './components/base';
import { Main } from './pages';
import { GlobalStyle, theme } from './styles';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
      <Main />
    </Layout>
  </ThemeProvider>
);

export default App;
