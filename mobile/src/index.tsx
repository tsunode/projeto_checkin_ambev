import React from 'react';
import { StatusBar } from 'react-native';

import colors from './styles/colors';

// Routes
import Routes from './routes/routes';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.primary} />
      <Routes />
    </>
  );
};
