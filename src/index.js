import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import store from './frontend/redux/store';

import App from './frontend/components/app/App';

const customHistory = createBrowserHistory();
ReactDOM.render(
  <React.StrictMode>
    <Router history={customHistory}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
