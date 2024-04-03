import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import StackNavigations from './Navigations/StackNavigation/StackNavigations';
import { Provider } from 'react-redux';
import { store } from './redux/Store/store'; 
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}  >
      <StackNavigations />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
