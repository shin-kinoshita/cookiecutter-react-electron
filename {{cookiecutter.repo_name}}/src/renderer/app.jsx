import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import { routerMiddleware, ConnectedRouter } from 'connected-react-router'

import rootReducer from './reducers/index';
import Main from './views/components/Main';

const history = createBrowserHistory();

const store = createStore(
  rootReducer(history),
  compose(
    applyMiddleware(
      routerMiddleware(history),
    ),
  ),
);

const appRouting = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Main}/>
          </Switch>
        </HashRouter>
      </div>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(appRouting, document.getElementById('app'));
