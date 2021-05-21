import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import pages from './pages';
import { checkExpireTime, clearStorages, getToken } from './utils/storage';
import { PersistGate } from 'redux-persist/integration/react';
import ContextProvider from './contexts';

if (!('scrollBehavior' in document.documentElement.style)) {
  import('scroll-behavior-polyfill');
}

const App = ({ history, store, persistor }) => {

  if (getToken() && checkExpireTime()) {
    clearStorages();
    location.reload();
    return null;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <ContextProvider>
            <Switch>
              <Route component={pages.Home} exact path={['/']} />
              <Route component={pages.MyPokemon} exact path={'/mypokemon'} />
              <Route component={pages.Detail} exact path={'/pokemon/:paramsId'} />
              <Route component={pages.Error404} />
            </Switch>
          </ContextProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default hot(App);

App.propTypes = {
  history: PropTypes.object.isRequired,
  persistor: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};
