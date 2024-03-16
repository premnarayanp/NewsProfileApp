import 'react-native-gesture-handler';
import StackNavigator from './src/navigation/StackNavigator'
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store/configureStore';

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
} 