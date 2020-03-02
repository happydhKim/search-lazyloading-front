import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Layout } from './components/base';
import {
  Main,
  Login,
  Customer,
  Basket,
  MyPage,
  NotFound,
} from './pages';
import { GlobalStyle, theme } from './styles';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/customer" component={Customer} />
          <Route exact path="/basket" component={Basket} />
          <Route exact path="/mypage" component={MyPage} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  </ThemeProvider>
);

export default App;
