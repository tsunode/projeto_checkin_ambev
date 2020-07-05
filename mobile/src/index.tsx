import React from 'react';
import { StatusBar, SafeAreaView  } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';

import colors from './styles/colors';

// Routes
import Routes from './routes/routes';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }} >
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Routes />
        </SafeAreaView>
      </Provider>
    </>
  );
};
