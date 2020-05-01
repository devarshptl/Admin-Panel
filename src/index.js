import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import './index.css';
import App from './app/app';
import rootReducer from './reducers';
import Login from './containers/login/login';

let createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <CookiesProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login}/>
          <App/>
        </Switch>
      </BrowserRouter>
    </CookiesProvider>
  </Provider>,
  document.getElementById('root')
);
