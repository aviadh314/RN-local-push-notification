/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import TestNotifications from './src/components/TestNotifications';
import { View } from 'react-native';
import { notificationsInit } from './src/handlers/notificationsInit';

const App = () => {

  notificationsInit;

  return (
      <View>
        <TestNotifications />
      </View>
  );
};

export default App;
