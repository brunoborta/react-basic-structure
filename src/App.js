import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './configs/reactotron';

import store from './store';
import GlobalStyle from './styles/global';
import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
