import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';

import colors from './styles/colors';

// Routes
import Routes from './routes/routes';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Routes />
      </Provider>
    </>
  );
};
